import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "../../hooks/useLanguage";
import {
  campusCategories,
  campusMapPoints,
  CAMPUS_CENTER,
  directionsUrl,
} from "../../data/campusPlaces";
import type { TranslationKey } from "../../i18n/translations";

// A colour per category id. Only ids that actually have pinned places show
// up as filter chips, so it's fine for this to list every category.
const CATEGORY_COLOR: Record<string, string> = {
  buildings: "#e5352b",
  library: "#7c3aed",
  intlOffice: "#1f9c7c",
  cafes: "#e08a12",
  groceries: "#b45309",
  pharmacies: "#dc2626",
  atms: "#2563eb",
  mosques: "#059669",
  busStops: "#0891b2",
};

const titleKeyById = new Map(
  campusCategories.map((c) => [c.id, c.titleKey as TranslationKey]),
);

function pinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<span class="usm-pin" style="--pin:${color}"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 16],
    popupAnchor: [0, -14],
  });
}

type UniSierMapProps = {
  // A "Show on map" click in the Campus accordion sets these: the target
  // pin's id, plus a nonce that changes on every click so re-selecting the
  // same pin still re-focuses it.
  focusPointId?: string;
  focusNonce?: number;
};

// The UNI-SIER campus map: an OpenStreetMap base with only the places a
// student actually needs, coloured and filterable by category. Replaces the
// old plain Google Maps embed.
function UniSierMap({ focusPointId, focusNonce = 0 }: UniSierMapProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layersRef = useRef<Record<string, L.LayerGroup>>({});
  const markersRef = useRef<Record<string, L.Marker>>({});

  const points = useMemo(() => campusMapPoints(), []);
  const categoryIds = useMemo(
    () => [...new Set(points.map((p) => p.categoryId))],
    [points],
  );
  const [active, setActive] = useState<Set<string>>(() => new Set(categoryIds));

  // Build the map once.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [CAMPUS_CENTER.lat, CAMPUS_CENTER.lng],
      zoom: CAMPUS_CENTER.zoom,
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      className: "usm-tiles",
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const groups: Record<string, L.LayerGroup> = {};
    for (const point of points) {
      const color = CATEGORY_COLOR[point.categoryId] ?? "#e5352b";
      const group = (groups[point.categoryId] ??= L.layerGroup().addTo(map));
      const marker = L.marker([point.lat, point.lng], { icon: pinIcon(color) });
      marker.bindPopup(
        `<div class="max-w-[15rem]">
           <p class="font-semibold text-sand-900 dark:text-white">${escapeHtml(point.name)}</p>
           <p class="mt-1 text-sm text-sand-600 dark:text-sand-300">${escapeHtml(point.detail)}</p>
           <a href="${directionsUrl(point.lat, point.lng)}" target="_blank" rel="noreferrer"
              class="mt-2 inline-block text-sm font-semibold text-coral-600 dark:text-coral-400">
             ${escapeHtml(t("campus.openInMaps"))} &rarr;
           </a>
         </div>`,
      );
      group.addLayer(marker);
      markersRef.current[point.id] = marker;
    }
    layersRef.current = groups;

    // Leaflet mis-measures when its container animates/mounts inside flex.
    setTimeout(() => map.invalidateSize(), 0);

    return () => {
      map.remove();
      mapRef.current = null;
      layersRef.current = {};
      markersRef.current = {};
    };
    // `points` is memoised for the component's life; `t` only changes copy
    // inside popups, which we accept going stale until the map is reopened.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Toggle category layers when the filter changes.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    for (const [id, group] of Object.entries(layersRef.current)) {
      if (active.has(id)) {
        if (!map.hasLayer(group)) group.addTo(map);
      } else if (map.hasLayer(group)) {
        map.removeLayer(group);
      }
    }
  }, [active]);

  // Focus a pin when the accordion asks for it (via a changing nonce).
  useEffect(() => {
    if (!focusNonce || !focusPointId) return;
    const map = mapRef.current;
    const marker = markersRef.current[focusPointId];
    if (!map || !marker) return;

    const categoryId = focusPointId.split("::")[0];
    // Make sure the pin's category is switched on, or the marker won't be
    // on the map to open.
    setActive((prev) => (prev.has(categoryId) ? prev : new Set(prev).add(categoryId)));
    const group = layersRef.current[categoryId];
    if (group && !map.hasLayer(group)) group.addTo(map);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    map.setView(marker.getLatLng(), Math.max(map.getZoom(), 17), {
      animate: !reduceMotion,
    });
    marker.openPopup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusNonce]);

  function toggle(id: string) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div>
      {categoryIds.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {categoryIds.map((id) => {
            const on = active.has(id);
            const color = CATEGORY_COLOR[id] ?? "#e5352b";
            return (
              <button
                key={id}
                type="button"
                onClick={() => toggle(id)}
                aria-pressed={on}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  on
                    ? "border-sand-300 bg-white text-sand-800 dark:border-sand-600 dark:bg-sand-800 dark:text-sand-100"
                    : "border-sand-200 bg-transparent text-sand-400 dark:border-sand-700 dark:text-sand-500"
                }`}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: on ? color : "transparent", border: `1.5px solid ${color}` }}
                />
                {t(titleKeyById.get(id) ?? "campus.title")}
              </button>
            );
          })}
        </div>
      )}

      <div
        ref={containerRef}
        className="h-[420px] w-full overflow-hidden rounded-3xl border border-sand-200 shadow-(--shadow-soft) dark:border-sand-700"
      />
    </div>
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default UniSierMap;
