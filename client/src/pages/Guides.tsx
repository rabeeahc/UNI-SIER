import GuideCard from "../components/guides/GuideCard";
import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import { useLanguage } from "../hooks/useLanguage";

function Guides() {
  const { t } = useLanguage();

  // Titles/descriptions now come from translation keys so this list
  // actually changes with the selected language - links and emoji are
  // structural and don't need translating.
  const guides = [
    {
      emoji: "🪪",
      title: t("guideList.residencePermit.title"),
      description: t("guideList.residencePermit.description"),
      link: "/guides/residence-permit",
      available: true,
    },
    {
      emoji: "📱",
      title: t("guideList.simCards.title"),
      description: t("guideList.simCards.description"),
      link: "/guides/sim-cards",
      available: true,
    },
    {
      emoji: "🚌",
      title: t("guideList.transportation.title"),
      description: t("guideList.transportation.description"),
      link: "/guides/transportation",
      available: true,
    },
    {
      emoji: "🏠",
      title: t("guideList.accommodation.title"),
      description: t("guideList.accommodation.description"),
      link: "/guides/accommodation",
      available: true,
    },
    {
      emoji: "🏦",
      title: t("guideList.banking.title"),
      description: t("guideList.banking.description"),
      link: "/guides/banking",
      available: true,
    },
    {
      emoji: "🍔",
      title: t("guideList.foodGrocery.title"),
      description: t("guideList.foodGrocery.description"),
      link: "/guides/food-grocery",
      available: true,
    },
  ];

  return (
    <main className="py-20 md:py-28">
      <Container>
        <PageHeader
          badge={t("guides.badge")}
          title={t("guides.title")}
          subtitle={t("guides.subtitle")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard
              key={guide.link}
              emoji={guide.emoji}
              title={guide.title}
              description={guide.description}
              link={guide.link}
              available={guide.available}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Guides;
