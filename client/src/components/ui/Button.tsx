import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

// A Button can either render as a real <button> (for actions like form
// submits or onClick handlers) or as a <Link> (for navigation, e.g. "View
// guide" cards). Passing a `to` prop switches it into link mode. This keeps
// one consistent visual component instead of having ButtonLink duplicated
// everywhere pages need a styled navigation link.
type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined };

type ButtonAsLink = BaseProps & { to: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-br from-coral-500 to-ember-500 text-white shadow-(--shadow-glow) hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(229,53,43,0.55)] active:translate-y-0",
  secondary:
    "border border-sand-300/80 bg-white/70 text-sand-800 backdrop-blur hover:-translate-y-0.5 hover:border-coral-300 hover:bg-white dark:border-sand-700 dark:bg-sand-800/70 dark:text-sand-100 dark:hover:border-coral-800 dark:hover:bg-sand-800",
  ghost:
    "text-sand-600 hover:bg-sand-100 dark:text-sand-300 dark:hover:bg-sand-800",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out-back disabled:opacity-50 disabled:pointer-events-none";

function Button({ children, variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const classes = `${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export default Button;
