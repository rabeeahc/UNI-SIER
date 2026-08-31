import type { ReactNode } from "react";

type GuideSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// A consistent wrapper for each section of a guide (Overview, Fees, FAQ,
// etc). The `id` matches the href used by the in-page navigation, so
// clicking "Fees" in the sidebar scrolls straight to this section.
function GuideSection({ id, title, children }: GuideSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="relative pl-4 text-3xl font-semibold tracking-tight text-sand-900 before:absolute before:left-0 before:top-1.5 before:h-8 before:w-1 before:rounded-full before:bg-linear-to-b before:from-coral-500 before:to-ember-400 dark:text-white">
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-8 text-sand-600 dark:text-sand-300">{children}</div>
    </section>
  );
}

export default GuideSection;
