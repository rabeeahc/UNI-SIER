type JourneyCardProps = {
  emoji: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

function JourneyCard({ emoji, title, description, selected, onClick }: JourneyCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center overflow-hidden rounded-3xl border p-8 text-center transition-all duration-500 ease-out-back ${
        selected
          ? "-translate-y-1 border-coral-400/60 bg-white shadow-(--shadow-lift) dark:border-coral-800/60 dark:bg-sand-800"
          : "border-sand-200 bg-white/70 hover:-translate-y-1 hover:border-coral-300 hover:shadow-(--shadow-soft) dark:border-sand-700 dark:bg-sand-800/60 dark:hover:border-coral-800"
      }`}
    >
      <span
        className={`pointer-events-none absolute inset-x-0 -top-16 h-32 bg-linear-to-b from-coral-400/25 to-transparent blur-2xl transition-opacity duration-500 ${
          selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        aria-hidden="true"
      />
      <span className="relative text-5xl transition-transform duration-500 ease-out-back group-hover:scale-110">
        {emoji}
      </span>

      <h3 className="relative mt-5 font-display text-xl font-semibold text-sand-900 dark:text-white">
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-sand-600 dark:text-sand-400">
        {description}
      </p>
    </button>
  );
}

export default JourneyCard;
