// Structured content for a single guide, one instance per language.
// Rather than flat translation keys (fine for short UI strings, unwieldy
// for paragraphs and lists), each guide's full content per language lives
// in one object of this shape. GuidePage.tsx renders whichever language's
// object matches the current selection.

export type GuideFaqItem = {
  question: string;
  answer: string;
};

export type GuideSectionContent = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: { type: "ul" | "ol"; items: string[] };
  faq?: GuideFaqItem[];
};

export type GuideLink = {
  label: string;
  href: string;
};

export type GuideContent = {
  badgeLabel: string;
  heroTitle: string;
  heroDescription: string;
  // Optional callout shown right under the hero (e.g. Residence Permit's
  // "this process is run nationally, not by the university" note).
  calloutNote?: string;
  sections: GuideSectionContent[];
  // Text for the disclaimer box at the bottom of every guide.
  sourceNoteText: string;
  sourceLinks: GuideLink[];
};
