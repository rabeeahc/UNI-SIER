import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import CommunityLinkCard from "../components/community/CommunityLinkCard";
import { useLanguage } from "../hooks/useLanguage";
import { resourceGroups } from "../data/communityResources";

function Community() {
  const { t, language } = useLanguage();

  return (
    <main className="py-20 md:py-28">
      <Container>
        <PageHeader
          badge={t("community.badge")}
          title={t("community.title")}
          subtitle={t("community.subtitle")}
        />

        {language !== "en" && (
          <p className="mt-8 rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-sand-600 dark:border-sand-700 dark:bg-sand-800/50 dark:text-sand-400">
            {t("common.contentInEnglish")}
          </p>
        )}

        <div className="mt-10 rounded-3xl border border-coral-200/70 bg-coral-50/70 p-6 md:p-8 dark:border-coral-900/40 dark:bg-coral-900/10">
          <h2 className="font-display text-xl font-semibold text-sand-900 dark:text-white">
            {t("community.help.title")}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sand-700 dark:text-sand-300">
            {t("community.help.body")}
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {resourceGroups.map((group) => (
            <section key={group.id}>
              <h2 className="font-display text-2xl font-semibold text-sand-900 dark:text-white">
                {t(group.titleKey)}
              </h2>
              {group.subtitleKey && (
                <p className="mt-2 max-w-2xl text-sand-600 dark:text-sand-400">
                  {t(group.subtitleKey)}
                </p>
              )}

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.resources.map((resource) => (
                  <CommunityLinkCard key={resource.name} resource={resource} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Community;
