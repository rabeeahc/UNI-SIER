import { useState, type ReactNode } from "react";
import { ChevronDownIcon, ExternalLinkIcon, MapPinIcon } from "../ui/icons";
import { useLanguage } from "../../hooks/useLanguage";
import { mapsUrl, mapPointId, type CampusPlace } from "../../data/campusPlaces";

type CampusCategoryProps = {
  categoryId: string;
  icon: ReactNode;
  title: string;
  description: string;
  places: CampusPlace[];
  // Called with a map-point id when a pinned place's "Show on map" is
  // clicked - the Campus page scrolls the map into view and opens that pin.
  onShowOnMap?: (pointId: string) => void;
};

// One expandable category on the Campus page. Collapsed it's just an icon +
// title + count; expanded it lists the actual places with map / phone /
// website links. A category with no places yet keeps the old "Coming soon"
// treatment so half-finished sections still read as intentional.
function CampusCategory({
  categoryId,
  icon,
  title,
  description,
  places,
  onShowOnMap,
}: CampusCategoryProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const hasPlaces = places.length > 0;

  return (
    <div
      className={`group rounded-2xl border transition-all duration-500 ease-out-back ${
        open
          ? "border-coral-300 bg-white shadow-(--shadow-soft) dark:border-coral-800 dark:bg-sand-800"
          : "border-sand-200 bg-white/70 hover:border-coral-300 dark:border-sand-700 dark:bg-sand-800/60 dark:hover:border-coral-800"
      }`}
    >
      <button
        type="button"
        onClick={() => hasPlaces && setOpen((v) => !v)}
        aria-expanded={hasPlaces ? open : undefined}
        className={`flex w-full items-start gap-4 p-6 text-left ${hasPlaces ? "" : "cursor-default"}`}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-coral-50 to-ember-100 text-coral-600 transition-transform duration-500 ease-out-back group-hover:scale-110 dark:from-coral-900/25 dark:to-ember-600/15 dark:text-coral-400">
          {icon}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-display text-lg font-semibold text-sand-900 dark:text-white">
              {title}
            </span>
            {hasPlaces ? (
              <span className="rounded-full bg-coral-50 px-2.5 py-0.5 text-xs font-semibold text-coral-700 dark:bg-coral-900/30 dark:text-coral-300">
                {places.length}
              </span>
            ) : (
              <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-sand-500 dark:bg-sand-700 dark:text-sand-300">
                {t("common.comingSoon")}
              </span>
            )}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-sand-600 dark:text-sand-400">
            {description}
          </span>
        </span>

        {hasPlaces && (
          <ChevronDownIcon
            className={`mt-1 h-5 w-5 shrink-0 text-sand-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {hasPlaces && open && (
        <ul className="animate-rise space-y-4 border-t border-sand-200 px-6 py-5 dark:border-sand-700">
          {places.map((place) => {
            const pinned = typeof place.lat === "number" && typeof place.lng === "number";
            return (
            <li key={place.name}>
              <p className="font-medium text-sand-800 dark:text-sand-100">{place.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-sand-600 dark:text-sand-300">
                {place.detail}
              </p>
              {place.address && (
                <p className="mt-1 text-xs text-sand-500 dark:text-sand-500">{place.address}</p>
              )}

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
                {pinned && onShowOnMap ? (
                  <button
                    type="button"
                    onClick={() => onShowOnMap(mapPointId(categoryId, place.name))}
                    className="inline-flex items-center gap-1 text-coral-600 hover:underline dark:text-coral-400"
                  >
                    <MapPinIcon className="h-4 w-4" />
                    {t("campus.showOnMap")}
                  </button>
                ) : (
                  <a
                    href={mapsUrl(place)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-coral-600 hover:underline dark:text-coral-400"
                  >
                    <MapPinIcon className="h-4 w-4" />
                    {t("campus.openInMaps")}
                  </a>
                )}
                {place.phone && (
                  <a
                    href={`tel:${place.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1 text-coral-600 hover:underline dark:text-coral-400"
                  >
                    {place.phone}
                  </a>
                )}
                {place.url && (
                  <a
                    href={place.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-coral-600 hover:underline dark:text-coral-400"
                  >
                    {t("campus.website")}
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CampusCategory;
