import GuidePage from "../../components/guides/GuidePage";
import { simCardsContent } from "../../content/guides/simCards";
import { useLanguage } from "../../hooks/useLanguage";

function SimCards() {
  const { language } = useLanguage();
  return <GuidePage content={simCardsContent[language]} />;
}

export default SimCards;
