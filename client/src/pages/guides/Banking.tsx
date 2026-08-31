import GuidePage from "../../components/guides/GuidePage";
import { bankingContent } from "../../content/guides/banking";
import { useLanguage } from "../../hooks/useLanguage";

function Banking() {
  const { language } = useLanguage();
  return <GuidePage content={bankingContent[language]} />;
}

export default Banking;
