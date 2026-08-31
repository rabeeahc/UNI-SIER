import type { ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";

type CategoryCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

// Used on Campus and Community pages to preview sections that aren't built
// yet, without looking like broken/dead functionality - the "Coming soon"
// badge sets honest expectations instead of an empty page.
function CategoryCard({ icon, title, description }: CategoryCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group rounded-2xl border border-sand-200 bg-white/70 p-6 transition-all duration-500 ease-out-back hover:-translate-y-1 hover:border-coral-300 hover:shadow-(--shadow-soft) dark:border-sand-700 dark:bg-sand-800/60 dark:hover:border-coral-800">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-coral-50 to-ember-100 text-coral-600 transition-transform duration-500 ease-out-back group-hover:scale-110 dark:from-coral-900/25 dark:to-ember-600/15 dark:text-coral-400">
          {icon}
        </div>
        <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-sand-500 dark:bg-sand-700 dark:text-sand-300">
          {t("common.comingSoon")}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-sand-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sand-600 dark:text-sand-400">{description}</p>
    </div>
  );
}

export default CategoryCard;
