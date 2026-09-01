import { lazy, Suspense, useCallback, useRef, useState, type ReactNode } from "react";
import Container from "../components/ui/Container";
import CampusCategory from "../components/campus/CampusCategory";
import PageHeader from "../components/ui/PageHeader";
import { useLanguage } from "../hooks/useLanguage";
import { campusCategories } from "../data/campusPlaces";
import {
  BuildingIcon,
  BookIcon,
  MapPinIcon,
  TagIcon,
  UsersIcon,
  HeartHandshakeIcon,
} from "../components/ui/icons";

// Leaflet is ~150 kB - only pull it in when someone actually opens Campus.
const UniSierMap = lazy(() => import("../components/campus/UniSierMap"));

// Icon per category id. Kept here (JSX) rather than in the data file so
// campusPlaces.ts stays plain serialisable data.
const categoryIcons: Record<string, ReactNode> = {
  buildings: <BuildingIcon />,
  library: <BookIcon />,
  intlOffice: <UsersIcon />,
  cafes: <TagIcon />,
  groceries: <TagIcon />,
  pharmacies: <HeartHandshakeIcon />,
  atms: <TagIcon />,
  mosques: <MapPinIcon />,
  busStops: <MapPinIcon />,
};

function Campus() {
  const { t, language } = useLanguage();

  // A "Show on map" click in the accordion below sets the target pin id and
  // bumps the nonce (so clicking the same pin twice still re-focuses it),
  // then scrolls the map back into view.
  const mapWrapRef = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState<{ id: string; nonce: number }>({ id: "", nonce: 0 });

  const showOnMap = useCallback((id: string) => {
    setFocus((prev) => ({ id, nonce: prev.nonce + 1 }));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    mapWrapRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  return (
    <main className="py-20 md:py-28">
      <Container>
        <PageHeader
          badge={t("campus.badge")}
          title={t("campus.title")}
          subtitle={t("campus.subtitle")}
        />

        <div ref={mapWrapRef} className="mt-12 scroll-mt-24">
          <Suspense
            fallback={
              <div className="h-[420px] w-full animate-pulse rounded-3xl border border-sand-200 bg-sand-100 dark:border-sand-700 dark:bg-sand-800" />
            }
          >
            <UniSierMap focusPointId={focus.id} focusNonce={focus.nonce} />
          </Suspense>
        </div>

        {language !== "en" && (
          <p className="mt-8 rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-sand-600 dark:border-sand-700 dark:bg-sand-800/50 dark:text-sand-400">
            {t("common.contentInEnglish")}
          </p>
        )}

        <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
          {campusCategories.map((category) => (
            <CampusCategory
              key={category.id}
              categoryId={category.id}
              icon={categoryIcons[category.id]}
              title={t(category.titleKey)}
              description={t(category.descriptionKey)}
              places={category.places}
              onShowOnMap={showOnMap}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Campus;
