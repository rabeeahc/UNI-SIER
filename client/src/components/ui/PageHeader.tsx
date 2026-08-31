type PageHeaderProps = {
  badge: string;
  title: string;
  subtitle: string;
};

// Shared hero header for the top-level section pages (Guides, Campus,
// Community). Keeps the eyebrow badge + display heading + lede consistent
// so every page opens with the same rhythm.
function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <div className="animate-rise max-w-3xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-coral-200/70 bg-coral-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-coral-700 dark:border-coral-900/40 dark:bg-coral-900/25 dark:text-coral-300">
        {badge}
      </span>

      <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-sand-900 md:text-6xl dark:text-white">
        {title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-sand-600 dark:text-sand-300">{subtitle}</p>
    </div>
  );
}

export default PageHeader;
