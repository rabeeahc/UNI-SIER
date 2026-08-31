import { useLanguage } from "../../hooks/useLanguage";

// A real embedded map, not a placeholder - Google Maps' basic embed URL
// works without an API key for a simple "show this place" view (API keys
// are only required for the JavaScript Maps API with custom markers/routes,
// which is the right next step later, but this gets something genuinely
// useful live today).
const MAP_QUERY = encodeURIComponent("Kocaeli University Umuttepe Campus, İzmit, Kocaeli, Türkiye");

function CampusMap() {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden rounded-3xl border border-sand-200 shadow-(--shadow-soft) dark:border-sand-700">
      <iframe
        title={t("campus.map.title")}
        src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
        width="100%"
        height="360"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default CampusMap;
