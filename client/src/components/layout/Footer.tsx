import { Link } from "react-router-dom";
import Logo from "./Logo";
import Container from "../ui/Container";
import { useLanguage } from "../../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();

  const footerSections = [
    {
      heading: t("footer.section.guides"),
      links: [
        { label: t("footer.link.residencePermit"), to: "/guides/residence-permit" },
        { label: t("footer.link.allGuides"), to: "/guides" },
      ],
    },
    {
      heading: t("footer.section.explore"),
      links: [
        { label: t("footer.link.campus"), to: "/campus" },
        { label: t("footer.link.community"), to: "/community" },
      ],
    },
  ];

  return (
    <footer className="border-t border-sand-200/60 bg-sand-50 dark:border-sand-800/60 dark:bg-sand-900">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-sand-600 dark:text-sand-400">
              {t("footer.tagline")}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-sand-500 dark:text-sand-400">
                {section.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-sand-600 transition hover:text-coral-600 dark:text-sand-400 dark:hover:text-coral-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-sand-200 py-6 text-sm text-sand-500 sm:flex-row dark:border-sand-800 dark:text-sand-500">
          <p>© {new Date().getFullYear()} Unisier. {t("footer.rights")}</p>
          <p>{t("footer.madeBy")}</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
