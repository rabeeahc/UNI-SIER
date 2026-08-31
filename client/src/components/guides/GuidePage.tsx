import { Link } from "react-router-dom";
import Container from "../ui/Container";
import GuideSection from "./GuideSection";
import GuideTableOfContents from "./GuideTableOfContents";
import { ArrowRightIcon } from "../ui/icons";
import { useLanguage } from "../../hooks/useLanguage";
import type { GuideContent } from "../../types/guideContent";

type GuidePageProps = {
  content: GuideContent;
};

// Generic renderer used by all 6 guide pages. Each guide page component
// (ResidencePermit.tsx, Banking.tsx, etc) just picks the right multilingual
// content object for the current language and hands it to this component -
// this is what lets a single guide be shown in 4 languages without 4
// separate copies of the page's JSX structure.
function GuidePage({ content }: GuidePageProps) {
  const { t } = useLanguage();

  const tocItems = content.sections.map((section) => ({ id: section.id, label: section.title }));

  return (
    <main className="py-20 md:py-28">
      <Container>
        <Link
          to="/guides"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-coral-600 transition hover:gap-2 hover:underline dark:text-coral-400"
        >
          ← {t("common.backToGuides")}
        </Link>

        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-coral-200/70 bg-coral-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-coral-700 dark:border-coral-900/40 dark:bg-coral-900/25 dark:text-coral-300">
            {content.badgeLabel}
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-sand-900 md:text-6xl dark:text-white">
            {content.heroTitle}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-sand-600 dark:text-sand-300">
            {content.heroDescription}
          </p>
        </div>

        {content.calloutNote && (
          <div className="mt-6 max-w-3xl rounded-2xl border border-coral-200 bg-coral-50 p-4 text-sm text-coral-800 dark:border-coral-900/40 dark:bg-coral-900/10 dark:text-coral-200">
            {content.calloutNote}
          </div>
        )}

        <div className="mt-16 flex gap-16">
          <GuideTableOfContents items={tocItems} />

          <div className="max-w-3xl flex-1 space-y-16">
            {content.sections.map((section) => (
              <GuideSection key={section.id} id={section.id} title={section.title}>
                {section.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}

                {section.list &&
                  (section.list.type === "ol" ? (
                    <ol className="list-decimal space-y-3 pl-6">
                      {section.list.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.list.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ))}

                {section.faq?.map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-sand-800 dark:text-sand-100">{item.question}</p>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </GuideSection>
            ))}

            {content.sourceNoteText && (
              <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6 dark:border-sand-700 dark:bg-sand-800/50">
                <p className="text-sm text-sand-600 dark:text-sand-400">
                  {content.sourceNoteText}{" "}
                  {content.sourceLinks.map((link, i) => (
                    <span key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-coral-600 hover:underline dark:text-coral-400"
                      >
                        {link.label}
                      </a>
                      {i < content.sourceLinks.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            )}

            <Link
              to="/guides"
              className="inline-flex items-center gap-2 font-medium text-coral-600 hover:underline dark:text-coral-400"
            >
              {t("common.browseMoreGuides")} <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default GuidePage;
