import Container from "../components/ui/Container";
import CategoryCard from "../components/ui/CategoryCard";
import PageHeader from "../components/ui/PageHeader";
import { useLanguage } from "../hooks/useLanguage";
import {
  MessageIcon,
  UsersIcon,
  CalendarIcon,
  HeartHandshakeIcon,
  TagIcon,
} from "../components/ui/icons";

function Community() {
  const { t } = useLanguage();

  const features = [
    { key: "qa", icon: <MessageIcon />, title: t("community.feature.qa.title"), description: t("community.feature.qa.description") },
    { key: "discussions", icon: <MessageIcon />, title: t("community.feature.discussions.title"), description: t("community.feature.discussions.description") },
    { key: "events", icon: <CalendarIcon />, title: t("community.feature.events.title"), description: t("community.feature.events.description") },
    { key: "groups", icon: <UsersIcon />, title: t("community.feature.groups.title"), description: t("community.feature.groups.description") },
    { key: "recommendations", icon: <HeartHandshakeIcon />, title: t("community.feature.recommendations.title"), description: t("community.feature.recommendations.description") },
    { key: "marketplace", icon: <TagIcon />, title: t("community.feature.marketplace.title"), description: t("community.feature.marketplace.description") },
  ];

  return (
    <main className="py-20 md:py-28">
      <Container>
        <PageHeader
          badge={t("community.badge")}
          title={t("community.title")}
          subtitle={t("community.subtitle")}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <CategoryCard
              key={feature.key}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Community;
