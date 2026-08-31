import GuidePage from "../../components/guides/GuidePage";
import { transportationContent } from "../../content/guides/transportation";
import { useLanguage } from "../../hooks/useLanguage";

function Transportation() {
  const { language } = useLanguage();
  return <GuidePage content={transportationContent[language]} />;
}

export default Transportation;
