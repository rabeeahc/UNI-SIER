import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
};

// `icon` lets callers drop a leading icon (e.g. a search icon) inside the
// input without every page having to hand-roll the absolute positioning.
function Input({ icon, className = "", ...props }: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sand-400">
          {icon}
        </span>
      )}
      <input
        className={`w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-sm text-sand-800 placeholder:text-sand-400 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-100 dark:border-sand-700 dark:bg-sand-800 dark:text-sand-100 dark:focus:ring-coral-900/30 ${
          icon ? "pl-11" : ""
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
