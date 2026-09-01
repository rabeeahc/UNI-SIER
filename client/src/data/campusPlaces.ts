import type { TranslationKey } from "../i18n/translations";

// Real, static location content for the Campus page. This replaces the
// "Coming soon" placeholder grid.
//
// LANGUAGE: category titles/descriptions are translated (campus.category.*
// keys in translations.ts). Individual place `name`/`detail` text is
// English-only for now, the same trade-off the 6 guide pages make - the
// Campus page shows a short note about this in non-English languages.
//
// VERIFICATION STATUS - please confirm / correct before relying on this:
//   verified  -> checked against official Kocaeli University / Kocaeli
//                municipality sources (Sept 2026)
//   review    -> plausible and useful, but the specific names/details need
//                a local student to confirm. Marked with `needsReview: true`
//                so they render a small "confirm this" hint in dev-style
//                review, and so they're easy to grep.
//
// The structure is the important part - drop in accurate places as you get
// them and the UI updates automatically.

export type CampusPlace = {
  name: string;
  detail: string;
  address?: string;
  phone?: string;
  url?: string;
  // What an external map search should look for. Falls back to `address`
  // then `name`.
  mapsQuery?: string;
  // Exact position for the UNI-SIER map. A place only gets a pin on the map
  // once BOTH lat and lng are set - places without coordinates still show in
  // the list below the map.
  //
  // ⚠️  Every coordinate currently in this file is a ROUGH PLACEHOLDER near
  // the Umuttepe campus, not a surveyed location. Replace them: open the
  // real spot in any map, right-click -> copy coordinates, paste here.
  lat?: number;
  lng?: number;
  needsReview?: boolean;
};

export type CampusCategory = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  places: CampusPlace[];
};

// A link to the place on OpenStreetMap (same data our own map uses). Kept
// separate from the app's map so the accordion list still works for places
// that don't have coordinates yet - it searches by name/address instead.
export function mapsUrl(place: CampusPlace): string {
  if (typeof place.lat === "number" && typeof place.lng === "number") {
    return `https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=18/${place.lat}/${place.lng}`;
  }
  const query = place.mapsQuery ?? place.address ?? place.name;
  return `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`;
}

// Directions to a pinned place on OpenStreetMap.
export function directionsUrl(lat: number, lng: number): string {
  return `https://www.openstreetmap.org/directions?to=${lat}%2C${lng}`;
}

export type CampusMapPoint = CampusPlace & {
  id: string;
  categoryId: string;
  lat: number;
  lng: number;
};

// Stable identifier for a pinned place, shared between the accordion list
// and the map so a "Show on map" click can find the right marker.
export function mapPointId(categoryId: string, name: string): string {
  return `${categoryId}::${name}`;
}

// Flattens every place that has coordinates into a single list for the map,
// tagged with the id of the category it came from (drives the pin colour /
// filter chips).
export function campusMapPoints(): CampusMapPoint[] {
  return campusCategories.flatMap((category) =>
    category.places
      .filter((p) => typeof p.lat === "number" && typeof p.lng === "number")
      .map((p) => ({
        ...(p as CampusMapPoint),
        categoryId: category.id,
        id: mapPointId(category.id, p.name),
      })),
  );
}

// Rough centre of the Umuttepe campus. PLACEHOLDER - nudge once the pins are
// real.
export const CAMPUS_CENTER = { lat: 40.8212, lng: 29.9212, zoom: 15 };

const UMUTTEPE = "Kocaeli Üniversitesi Umuttepe Yerleşkesi, İzmit";

export const campusCategories: CampusCategory[] = [
  {
    id: "buildings",
    titleKey: "campus.category.buildings.title",
    descriptionKey: "campus.category.buildings.description",
    places: [
      {
        name: "Umuttepe Campus",
        detail:
          "The main campus, about 10 km from central İzmit. Most faculties are here: Science & Arts (Fen-Edebiyat), Economics & Administrative Sciences (İİBF), Communication, Medicine, Law, Education, Engineering, Technology and the health schools. Fine Arts, Architecture & Design and Dentistry are on other campuses.",
        address: "Kabaoğlu Mah., Baki Komşuoğlu Bulvarı No:515, 41001 İzmit/Kocaeli",
        mapsQuery: UMUTTEPE,
        url: "https://www.kocaeli.edu.tr/en",
        lat: 40.8199,
        lng: 29.919,
      },
      {
        name: "Rectorate (Rektörlük)",
        detail:
          "Central administration building near the main square. Ask here or at your faculty's dean's office (dekanlık) when you don't know which office handles something.",
        phone: "+90 262 303 10 00",
        mapsQuery: "Kocaeli Üniversitesi Rektörlük Umuttepe",
        lat: 40.8219,
        lng: 29.9215,
        needsReview: true,
      },
      {
        name: "Student Affairs (Öğrenci İşleri Daire Başkanlığı)",
        detail:
          "Enrolment, course registration problems, student certificates (öğrenci belgesi), transcripts and diploma matters. You'll need a student certificate for your residence permit and bank account, so find this office early.",
        url: "https://oidb.kocaeli.edu.tr/",
        mapsQuery: "Kocaeli Üniversitesi Öğrenci İşleri Daire Başkanlığı Umuttepe",
        lat: 40.8223,
        lng: 29.9208,
        needsReview: true,
      },
      {
        name: "Central Cafeteria (Merkezi Yemekhane)",
        detail:
          "Subsidised set-menu lunch and dinner for students. Much cheaper than eating off campus. Top up your meal balance through the university's system.",
        mapsQuery: "Kocaeli Üniversitesi Merkez Yemekhane Umuttepe",
        lat: 40.8207,
        lng: 29.9231,
        needsReview: true,
      },
    ],
  },
  {
    id: "library",
    titleKey: "campus.category.library.title",
    descriptionKey: "campus.category.library.description",
    places: [
      {
        name: "Central Library (Merkez Kütüphane)",
        detail:
          "Borrow books with your student card, book group study rooms, and use the online databases and e-journals from on and off campus. Opening hours are extended during exam periods - check the library site for the current schedule.",
        url: "http://kutuphane.kocaeli.edu.tr/",
        mapsQuery: "Kocaeli Üniversitesi Merkez Kütüphane Umuttepe",
        lat: 40.8226,
        lng: 29.9223,
        needsReview: true,
      },
      {
        name: "Faculty branch libraries",
        detail:
          "Medicine and Law keep their own branch libraries near those faculties, with subject collections and quieter study space. Hours are listed on the library website.",
        url: "http://kutuphane.kocaeli.edu.tr/en/birim-kutuphaneleri.php",
        needsReview: true,
      },
    ],
  },
  {
    id: "intlOffice",
    titleKey: "campus.category.intlOffice.title",
    descriptionKey: "campus.category.intlOffice.description",
    places: [
      {
        name: "International Relations Office (Uluslararası İlişkiler Ofisi)",
        detail:
          "Your first stop for Erasmus and exchange, welcome support, and questions about being an international student here. For residence-permit and visa specifics, also read the Residence Permit guide.",
        phone: "+90 262 303 13 24",
        url: "https://uio.kocaeli.edu.tr/",
        mapsQuery: "Kocaeli Üniversitesi Uluslararası İlişkiler Ofisi Umuttepe",
        lat: 40.822,
        lng: 29.9201,
        needsReview: true,
      },
      {
        name: "Email",
        detail: "inerasmus@kocaeli.edu.tr - use this for Erasmus / exchange enquiries.",
      },
    ],
  },
  {
    id: "cafes",
    titleKey: "campus.category.cafes.title",
    descriptionKey: "campus.category.cafes.description",
    places: [
      {
        name: "Faculty canteens (kantin)",
        detail:
          "Every faculty building has a canteen selling tea, toast, gözleme, pastries and cheap hot food between classes. The cheapest way to eat without leaving campus.",
        needsReview: true,
      },
      {
        name: "Merkezi Yemekhane",
        detail: "Subsidised student cafeteria - a full set menu for a small fixed price at lunch and dinner.",
        mapsQuery: "Kocaeli Üniversitesi Merkez Yemekhane Umuttepe",
        needsReview: true,
      },
      {
        name: "Cafés along Umuttepe Bulvarı",
        detail:
          "The road up to the main gate has a run of cafés and small restaurants - a mix of national chains and local spots - popular for sitting down between or after classes.",
        mapsQuery: "cafe Umuttepe Bulvarı İzmit",
        needsReview: true,
      },
    ],
  },
  {
    id: "groceries",
    titleKey: "campus.category.groceries.title",
    descriptionKey: "campus.category.groceries.description",
    places: [
      {
        name: "Budget markets - BİM, A101, ŞOK",
        detail:
          "Turkey's discount chains. Branches are all over Kabaoğlu and along the road toward İzmit. Cheapest option for everyday staples, cleaning products and basics.",
        mapsQuery: "A101 BIM SOK Kabaoğlu İzmit",
        needsReview: true,
      },
      {
        name: "Larger supermarkets - Migros, CarrefourSA",
        detail:
          "Bigger stores with more choice (international products, fresh counters). Mostly toward İzmit centre rather than right next to campus.",
        mapsQuery: "Migros CarrefourSA İzmit",
        needsReview: true,
      },
      {
        name: "Weekly market (pazar)",
        detail:
          "İzmit's neighbourhood street markets are the cheapest place for fruit, vegetables and household goods. Ask classmates which day the nearest one runs.",
        mapsQuery: "İzmit semt pazarı",
        needsReview: true,
      },
    ],
  },
  {
    id: "pharmacies",
    titleKey: "campus.category.pharmacies.title",
    descriptionKey: "campus.category.pharmacies.description",
    places: [
      {
        name: "Kocaeli University Hospital (Araştırma ve Uygulama Hastanesi)",
        detail:
          "The university's teaching hospital, on the Umuttepe campus. 24/7 emergency department. Book outpatient appointments by phone or through the hospital website (or the national MHRS system).",
        address: "Eski İstanbul Yolu 10. km, Umuttepe Yerleşkesi, Kabaoğlu, 41001 İzmit",
        phone: "+90 262 303 75 75",
        url: "https://hastane.kocaeli.edu.tr/",
        mapsQuery: "Kocaeli Üniversitesi Araştırma ve Uygulama Hastanesi Umuttepe",
        lat: 40.8189,
        lng: 29.925,
        needsReview: true,
      },
      {
        name: "Pharmacies (eczane)",
        detail:
          "Nearest pharmacies are in Kabaoğlu and around the hospital. Outside opening hours there is always one on night duty in each district - search \"nöbetçi eczane İzmit\" or check the notice in any pharmacy window.",
        mapsQuery: "eczane Kabaoğlu İzmit",
        needsReview: true,
      },
      {
        name: "Other hospitals in İzmit",
        detail:
          "For care outside the university hospital, İzmit has state hospitals and private hospitals. With your residence permit and SGK health coverage, state hospitals and the university hospital are the low-cost options.",
        mapsQuery: "hastane İzmit merkez",
        needsReview: true,
      },
    ],
  },
  {
    id: "atms",
    titleKey: "campus.category.atms.title",
    descriptionKey: "campus.category.atms.description",
    places: [
      {
        name: "ATMs on campus",
        detail:
          "Several bank ATMs are clustered around the main square / cafeteria area and near the hospital. Enough for cash withdrawals and card top-ups without leaving campus.",
        mapsQuery: "ATM Kocaeli Üniversitesi Umuttepe",
        needsReview: true,
      },
      {
        name: "Banks for a student account",
        detail:
          "Most major Turkish banks (Ziraat Bankası, İş Bankası, Garanti BBVA, Akbank and others) open student accounts. Bring your passport, residence permit or application, student certificate and tax number. See the Banking guide for the full walkthrough.",
        mapsQuery: "banka İzmit merkez",
        needsReview: true,
      },
    ],
  },
  {
    id: "mosques",
    titleKey: "campus.category.mosques.title",
    descriptionKey: "campus.category.mosques.description",
    places: [
      {
        name: "Campus mosque",
        detail:
          "There is a mosque on the Umuttepe campus for daily and Friday prayers. Most faculty buildings also have a small prayer room (mescit).",
        mapsQuery: "cami Kocaeli Üniversitesi Umuttepe",
        lat: 40.8205,
        lng: 29.9219,
        needsReview: true,
      },
      {
        name: "Mosques in İzmit",
        detail:
          "Central İzmit has many mosques, including the historic Ottoman-era Pertev Mehmet Paşa (Yalı) Mosque near the seafront.",
        mapsQuery: "Pertev Mehmet Paşa Camii İzmit",
        needsReview: true,
      },
    ],
  },
  {
    id: "busStops",
    titleKey: "campus.category.busStops.title",
    descriptionKey: "campus.category.busStops.description",
    places: [
      {
        name: "Umuttepe Kampüs stop",
        detail:
          "The main stop and turnaround loop at the campus entrance - most lines terminate here. Pay with a Kocaelikart (see the Transportation guide for how to get one).",
        mapsQuery: "Umuttepe Kampüs otobüs durağı Kocaeli",
        lat: 40.8193,
        lng: 29.9183,
        needsReview: true,
      },
      {
        name: "Main lines from İzmit centre - 10 and 43",
        detail:
          "Line 10 (Otogar - Bayındırlık - Umuttepe) and line 43 (Batı Terminali - Umuttepe) are the two busiest routes between the city centre and campus.",
        needsReview: true,
      },
      {
        name: "Other lines to campus",
        detail:
          "Depending on where you live, lines such as 13, 20, 24, 33, 53, 70, 73, 85 and 105 also serve Umuttepe, plus intercity routes (115, 133, 145, 170, 175, 300) from Gebze, Derince, Körfez and Hereke. Check the KO Ulaşım route planner for your address.",
        url: "https://www.kocaeli.bel.tr/",
        needsReview: true,
      },
    ],
  },
];
