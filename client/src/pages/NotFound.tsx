import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { BridgeIcon } from "../components/ui/icons";
import { useLanguage } from "../hooks/useLanguage";

function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="flex flex-1 items-center py-24">
      <Container>
        <div className="animate-rise mx-auto max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-coral-500 to-ember-500 shadow-(--shadow-glow)">
            <BridgeIcon className="h-8 w-8 text-white" />
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-sand-900 dark:text-white">{t("notfound.title")}</h1>

          <p className="mt-4 text-sand-600 dark:text-sand-400">{t("notfound.description")}</p>

          <div className="mt-8 flex justify-center gap-3">
            <Button to="/">{t("notfound.home")}</Button>
            <Button to="/guides" variant="secondary">
              {t("notfound.guides")}
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default NotFound;
