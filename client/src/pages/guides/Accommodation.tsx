import GuidePage from "../../components/guides/GuidePage";
import { accommodationContent } from "../../content/guides/accommodation";
import { useLanguage } from "../../hooks/useLanguage";

function Accommodation() {
  const { language } = useLanguage();
  return <GuidePage content={accommodationContent[language]} />;
}

export default Accommodation;
