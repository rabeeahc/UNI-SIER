import { useLanguage } from "../../hooks/useLanguage";

type TocItem = {
  id: string;
  label: string;
};

type GuideTableOfContentsProps = {
  items: TocItem[];
};

// Sticky sidebar nav so students can jump straight to "Fees" or "FAQ"
// instead of scrolling through the whole guide - this is what turns a
// long guide into something that feels like a reference tool, not an article.
function GuideTableOfContents({ items }: GuideTableOfContentsProps) {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-28 hidden w-56 shrink-0 lg:block">
      <p className="text-xs font-semibold uppercase tracking-wide text-sand-400 dark:text-sand-500">
        {t("common.onThisPage")}
      </p>
      <ul className="mt-4 space-y-1 border-l border-sand-200 dark:border-sand-700">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block border-l-2 border-transparent py-1.5 pl-4 text-sm text-sand-600 transition hover:border-coral-400 hover:text-coral-600 dark:text-sand-400 dark:hover:text-coral-400"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GuideTableOfContents;
