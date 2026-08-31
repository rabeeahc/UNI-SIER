import Container from "../components/ui/Container";
import CategoryCard from "../components/ui/CategoryCard";
import PageHeader from "../components/ui/PageHeader";
import CampusMap from "../components/campus/CampusMap";
import { useLanguage } from "../hooks/useLanguage";
import {
  BuildingIcon,
  BookIcon,
  MapPinIcon,
  TagIcon,
} from "../components/ui/icons";

function Campus() {
  const { t } = useLanguage();

  const categories = [
    { key: "buildings", icon: <BuildingIcon />, title: t("campus.category.buildings.title"), description: t("campus.category.buildings.description") },
    { key: "library", icon: <BookIcon />, title: t("campus.category.library.title"), description: t("campus.category.library.description") },
    { key: "intlOffice", icon: <MapPinIcon />, title: t("campus.category.intlOffice.title"), description: t("campus.category.intlOffice.description") },
    { key: "cafes", icon: <TagIcon />, title: t("campus.category.cafes.title"), description: t("campus.category.cafes.description") },
    { key: "groceries", icon: <TagIcon />, title: t("campus.category.groceries.title"), description: t("campus.category.groceries.description") },
    { key: "pharmacies", icon: <TagIcon />, title: t("campus.category.pharmacies.title"), description: t("campus.category.pharmacies.description") },
    { key: "atms", icon: <TagIcon />, title: t("campus.category.atms.title"), description: t("campus.category.atms.description") },
    { key: "mosques", icon: <MapPinIcon />, title: t("campus.category.mosques.title"), description: t("campus.category.mosques.description") },
    { key: "busStops", icon: <MapPinIcon />, title: t("campus.category.busStops.title"), description: t("campus.category.busStops.description") },
  ];

  return (
    <main className="py-20 md:py-28">
      <Container>
        <PageHeader
          badge={t("campus.badge")}
          title={t("campus.title")}
          subtitle={t("campus.subtitle")}
        />

        <div className="mt-12">
          <CampusMap />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.key}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Campus;
