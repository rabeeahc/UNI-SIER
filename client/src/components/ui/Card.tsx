import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  // Adds hover lift + border highlight - used for clickable cards like
  // guide cards, but not for static content cards (e.g. a checklist card).
  hoverable?: boolean;
};

function Card({ children, className = "", hoverable = false }: CardProps) {
  const hoverStyles = hoverable
    ? "transition-all duration-500 ease-out-back hover:-translate-y-1 hover:border-coral-300 hover:shadow-(--shadow-lift)"
    : "";

  return (
    <div
      className={`rounded-2xl border border-sand-200 bg-white/80 p-6 shadow-(--shadow-soft) backdrop-blur-sm dark:border-sand-700 dark:bg-sand-800/70 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
