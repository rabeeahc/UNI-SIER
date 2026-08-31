import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../ui/icons";

type GuideCardProps = {
  emoji: string;
  title: string;
  description: string;
  link: string;
  available: boolean;
};

function GuideCard({ emoji, title, description, link, available }: GuideCardProps) {
  const content = (
    <>
      <div className="mb-5 flex items-start justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-sand-50 to-sand-100 text-3xl shadow-inner transition-transform duration-500 ease-out-back group-hover:scale-110 group-hover:-rotate-6 dark:from-sand-800 dark:to-sand-900">
          {emoji}
        </span>
        {!available && (
          <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-sand-500 dark:bg-sand-700 dark:text-sand-300">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold text-sand-900 dark:text-white">{title}</h3>

      <p className="mt-3 leading-relaxed text-sand-600 dark:text-sand-400">{description}</p>
    </>
  );

  // A guide that isn't written yet shouldn't behave like a clickable link -
  // that's a broken/confusing experience. Render it as a static, visibly
  // muted card instead of a Link pointing nowhere.
  if (!available) {
    return (
      <div className="rounded-3xl border border-sand-200 bg-sand-50 p-6 opacity-70 dark:border-sand-700 dark:bg-sand-800/30">
        {content}
      </div>
    );
  }

  return (
    <Link
      to={link}
      className="group ring-gradient relative block overflow-hidden rounded-3xl border border-sand-200 bg-white/80 p-6 transition-all duration-500 ease-out-back hover:-translate-y-2 hover:border-coral-300 hover:shadow-(--shadow-lift) dark:border-sand-700 dark:bg-sand-800/70 dark:hover:border-coral-800"
    >
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-coral-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative">{content}</div>
      <span
        className="relative mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-sand-400 transition-all duration-300 group-hover:border-coral-300 group-hover:bg-coral-500 group-hover:text-white dark:border-sand-700"
        aria-hidden="true"
      >
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default GuideCard;
