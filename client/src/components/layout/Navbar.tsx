import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuIcon, CloseIcon } from "../ui/icons";
import { useLanguage } from "../../hooks/useLanguage";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { to: "/guides", label: t("nav.guides") },
    { to: "/campus", label: t("nav.campus") },
    { to: "/community", label: t("nav.community") },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm font-medium transition after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-linear-to-r after:from-coral-500 after:to-ember-400 after:transition-all after:duration-300 ${
      isActive
        ? "text-coral-600 after:w-full dark:text-coral-400"
        : "text-sand-600 after:w-0 hover:text-sand-900 hover:after:w-full dark:text-sand-300 dark:hover:text-white"
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3 text-base font-medium transition ${
      isActive
        ? "bg-coral-50 text-coral-600 dark:bg-coral-900/20 dark:text-coral-400"
        : "text-sand-700 hover:bg-sand-50 dark:text-sand-200 dark:hover:bg-sand-800"
    }`;

  return (
    <header className="glass sticky top-0 z-50 border-b border-sand-200/60 dark:border-sand-800/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <NavLink to="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </NavLink>

        {/* Desktop navigation - hidden below md breakpoint */}
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme + language controls stay visible at all sizes */}
          <div className="hidden sm:flex sm:items-center sm:gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Hamburger toggle - only visible below md breakpoint */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-sand-200 bg-white/70 text-sand-600 transition hover:border-coral-300 md:hidden dark:border-sand-700 dark:bg-sand-800/70 dark:text-sand-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="glass border-t border-sand-200/60 px-6 py-4 md:hidden dark:border-sand-800/60">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileNavLinkClasses}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3 border-t border-sand-200 pt-4 sm:hidden dark:border-sand-800">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
