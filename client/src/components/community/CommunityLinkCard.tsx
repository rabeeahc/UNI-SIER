import { ExternalLinkIcon } from "../ui/icons";
import { useLanguage } from "../../hooks/useLanguage";
import { kindLabel, type CommunityResource } from "../../data/communityResources";

// One resource on the Community page. With an `href` it's a real, clickable
// external link; without one it renders muted with a "Link coming soon"
// chip so a half-populated list still looks deliberate.
function CommunityLinkCard({ resource }: { resource: CommunityResource }) {
  const { t } = useLanguage();
  const pending = !resource.href;

  const inner = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-sand-600 dark:bg-sand-700 dark:text-sand-300">
          {kindLabel[resource.kind]}
        </span>
        {pending ? (
          <span className="text-xs font-medium text-sand-400 dark:text-sand-500">
            {t("common.linkPending")}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-coral-600 dark:text-coral-400">
            {t("common.openLink")}
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-sand-900 dark:text-white">
        {resource.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-sand-600 dark:text-sand-400">
        {resource.detail}
      </p>
    </>
  );

  const shared =
    "block rounded-2xl border p-6 transition-all duration-500 ease-out-back";

  if (pending) {
    return (
      <div
        className={`${shared} border-sand-200 bg-sand-50/60 opacity-75 dark:border-sand-700 dark:bg-sand-800/30`}
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noreferrer"
      className={`group ${shared} border-sand-200 bg-white/70 hover:-translate-y-1 hover:border-coral-300 hover:shadow-(--shadow-soft) dark:border-sand-700 dark:bg-sand-800/60 dark:hover:border-coral-800`}
    >
      {inner}
    </a>
  );
}

export default CommunityLinkCard;
