import Button from "../ui/Button";
import Container from "../ui/Container";
import { ArrowRightIcon } from "../ui/icons";
import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-sand-200/60 bg-sand-50 py-28 md:py-36 dark:border-sand-800/60 dark:bg-sand-900">
      {/* Aurora lighting */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="aurora -left-24 -top-32 h-96 w-96 bg-coral-400" />
        <div className="aurora right-0 top-10 h-80 w-80 bg-ember-300 [animation-delay:-6s]" />
        <div className="aurora bottom-[-6rem] left-1/3 h-72 w-72 bg-teal-500/70 [animation-delay:-12s]" />
      </div>

      {/* Fine grid wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-sand-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-sand-900) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-coral-200/70 bg-white/60 px-5 py-2 text-sm font-medium text-coral-700 backdrop-blur dark:border-coral-900/40 dark:bg-coral-900/20 dark:text-coral-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral-500" />
            </span>
            {t("hero.badge")}
          </div>

          <h1 className="animate-rise mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-sand-900 [animation-delay:0.05s] md:text-7xl dark:text-white">
            <span className="text-gradient">{t("hero.title")}</span>
          </h1>

          <p className="animate-rise mx-auto mt-7 max-w-2xl text-lg leading-8 text-sand-600 [animation-delay:0.1s] dark:text-sand-300">
            {t("hero.description")}
          </p>

          <div className="animate-rise mt-8 flex flex-wrap justify-center gap-3 [animation-delay:0.15s]">
            <span className="rounded-full bg-coral-100 px-4 py-2 text-sm font-medium text-coral-700 dark:bg-coral-900/30 dark:text-coral-300">
              {t("hero.badge.supporting")}
            </span>

            <span className="rounded-full bg-sand-100 px-4 py-2 text-sm font-medium text-sand-700 dark:bg-sand-800 dark:text-sand-200">
              {t("hero.badge.comingSoon")}
            </span>
          </div>

          <div className="animate-rise mt-10 flex flex-col justify-center gap-4 [animation-delay:0.2s] sm:flex-row">
            <Button to="/guides" size="lg">
              {t("hero.cta.primary")}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button to="/guides" variant="secondary" size="lg">
              {t("hero.cta.secondary")}
            </Button>
          </div>

          <p className="animate-rise mt-8 text-sm text-sand-500 [animation-delay:0.25s] dark:text-sand-500">
            {t("hero.trust")}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
