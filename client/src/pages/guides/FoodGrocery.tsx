import GuidePage from "../../components/guides/GuidePage";
import { foodGroceryContent } from "../../content/guides/foodGrocery";
import { useLanguage } from "../../hooks/useLanguage";

function FoodGrocery() {
  const { language } = useLanguage();
  return <GuidePage content={foodGroceryContent[language]} />;
}

export default FoodGrocery;
