import type { TranslationKey } from "../i18n/translations";

// The Community page used to advertise 6 interactive features (Q&A,
// discussions, events, a marketplace...) that all need a backend we don't
// have yet. This is the honest version: a curated set of links to the
// places where the Kocaeli international-student community *already* lives -
// group chats, physical hangout spaces, official accounts, and second-hand
// marketplaces.
//
// Anything without an `href` renders as a muted "Link coming soon" chip
// instead of a dead link. Paste the real invite / profile URL when you have
// it and it becomes a working card - no other change needed.

export type ResourceKind =
  | "whatsapp"
  | "telegram"
  | "discord"
  | "instagram"
  | "facebook"
  | "reddit"
  | "place"
  | "web";

export type CommunityResource = {
  name: string;
  detail: string;
  kind: ResourceKind;
  href?: string;
};

export type ResourceGroup = {
  id: string;
  titleKey: TranslationKey;
  subtitleKey?: TranslationKey;
  resources: CommunityResource[];
};

export const kindLabel: Record<ResourceKind, string> = {
  whatsapp: "WhatsApp",
  telegram: "Telegram",
  discord: "Discord",
  instagram: "Instagram",
  facebook: "Facebook",
  reddit: "Reddit",
  place: "Place",
  web: "Web",
};

export const resourceGroups: ResourceGroup[] = [
  {
    id: "groups",
    titleKey: "community.groups.title",
    subtitleKey: "community.groups.subtitle",
    resources: [
      {
        name: "KOÜ International Students",
        detail:
          "The main group chat for international students at Kocaeli University - introductions, arrival questions, housing leads and day-to-day help. Ask the International Relations Office or a senior for the current invite.",
        kind: "whatsapp",
      },
      {
        name: "Kocaeli University students (Telegram)",
        detail: "Wider student channel with announcements and open chat. Good for course and campus questions.",
        kind: "telegram",
      },
      {
        name: "Erasmus & exchange students",
        detail: "Separate group for exchange and Erasmus students each semester, usually run with the ESN / buddy programme.",
        kind: "whatsapp",
      },
      {
        name: "Your country's student group",
        detail:
          "Most nationalities have their own WhatsApp or Telegram group in Kocaeli (food, documents in your language, meetups). Search your embassy's student page or ask in the main group.",
        kind: "whatsapp",
      },
      {
        name: "r/Kocaeli",
        detail: "Reddit community for the city - useful for neighbourhood, transport and cost-of-living questions in English.",
        kind: "reddit",
        href: "https://www.reddit.com/r/Kocaeli/",
      },
    ],
  },
  {
    id: "spaces",
    titleKey: "community.spaces.title",
    subtitleKey: "community.spaces.subtitle",
    resources: [
      {
        name: "Genç Mekan İzmit (Yeni Cuma)",
        detail:
          "A free, government-run youth centre in central İzmit, by the Yeni Cuma Mosque - and the spot where most international students end up hanging out. Membership is free for anyone roughly 12-29 (bring your passport / residence permit). Across its floors you get: a quiet academic library and study rooms, free Wi-Fi and computers, a café area with cheap or free tea and coffee, an e-sports room, and YouTube / podcast recording studios. It also runs free workshops, language and skills courses, and regular social events where you'll meet other students. Some Gençlik Merkezi branches also have a gym / sports hall - check what this one offers. Open late most days; closed or shorter hours on Sundays.",
        kind: "place",
        href: "https://www.openstreetmap.org/search?query=Gen%C3%A7%20Mekan%20%C4%B0zmit%20Yeni%20Cuma",
      },
      {
        name: "Other Gençlik Merkezleri (youth centres)",
        detail:
          "The Ministry of Youth & Sports runs more youth centres and KYK study halls around Kocaeli, all free to members - libraries, study rooms, Wi-Fi and activities. Ask at Genç Mekan or in the student chats which ones are closest to you.",
        kind: "place",
      },
    ],
  },
  {
    id: "official",
    titleKey: "community.official.title",
    resources: [
      {
        name: "Kocaeli Üniversitesi on Facebook",
        detail: "Official university page - events, announcements and academic calendar updates.",
        kind: "facebook",
        href: "https://www.facebook.com/kou92official/",
      },
      {
        name: "International Relations Office",
        detail: "Official site for exchange, incoming students and contact details. Start here for anything visa- or enrolment-related.",
        kind: "web",
        href: "https://uio.kocaeli.edu.tr/",
      },
      {
        name: "Kocaeli University website",
        detail: "Main university site (English) - faculties, academic calendar, news.",
        kind: "web",
        href: "https://www.kocaeli.edu.tr/en",
      },
      {
        name: "KOÜ on Instagram",
        detail: "Campus life, event photos and student stories. Confirm the official handle before following.",
        kind: "instagram",
      },
    ],
  },
  {
    id: "buysell",
    titleKey: "community.buysell.title",
    resources: [
      {
        name: "İzmit student second-hand groups",
        detail:
          "Facebook and Telegram groups where graduating students sell furniture, kitchenware and books cheap at the end of each term. Ask in the main student chat for the active one.",
        kind: "facebook",
      },
      {
        name: "sahibinden.com",
        detail: "Turkey's biggest classifieds site - second-hand furniture and white goods in the İzmit area. Meet in public and check items in person.",
        kind: "web",
        href: "https://www.sahibinden.com/",
      },
      {
        name: "Dolap / Letgo apps",
        detail: "Phone apps for buying and selling used items locally. Handy for clothes, electronics and small furniture.",
        kind: "web",
      },
    ],
  },
];
