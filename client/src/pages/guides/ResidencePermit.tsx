import GuidePage from "../../components/guides/GuidePage";
import { residencePermitContent } from "../../content/guides/residencePermit";
import { useLanguage } from "../../hooks/useLanguage";

function ResidencePermit() {
  const { language } = useLanguage();
  return <GuidePage content={residencePermitContent[language]} />;
}

export default ResidencePermit;
