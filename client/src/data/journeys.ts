import type { TranslationKey } from "../i18n/translations";

// Structural data only - no literal English text here anymore. Titles,
// descriptions, and checklist item text all live in translations.ts as
// keys, so JourneySection can resolve them through the current language
// via t(). This is what makes the journey checklist actually translate
// instead of always showing English regardless of the language picker.
type ChecklistItemKeys = {
  titleKey: TranslationKey;
  infoKey: TranslationKey;
};

type Journey = {
  id: string;
  emoji: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  checklist: ChecklistItemKeys[];
};

export const journeys: Journey[] = [
  {
    id: "accepted",
    emoji: "🎓",
    titleKey: "journey.accepted.title",
    descriptionKey: "journey.accepted.description",
    checklist: [
      { titleKey: "journey.accepted.item1.title", infoKey: "journey.accepted.item1.info" },
      { titleKey: "journey.accepted.item2.title", infoKey: "journey.accepted.item2.info" },
      { titleKey: "journey.accepted.item3.title", infoKey: "journey.accepted.item3.info" },
      { titleKey: "journey.accepted.item4.title", infoKey: "journey.accepted.item4.info" },
      { titleKey: "journey.accepted.item5.title", infoKey: "journey.accepted.item5.info" },
      { titleKey: "journey.accepted.item6.title", infoKey: "journey.accepted.item6.info" },
    ],
  },
  {
    id: "preparing",
    emoji: "✈️",
    titleKey: "journey.preparing.title",
    descriptionKey: "journey.preparing.description",
    checklist: [
      { titleKey: "journey.preparing.item1.title", infoKey: "journey.preparing.item1.info" },
      { titleKey: "journey.preparing.item2.title", infoKey: "journey.preparing.item2.info" },
      { titleKey: "journey.preparing.item3.title", infoKey: "journey.preparing.item3.info" },
      { titleKey: "journey.preparing.item4.title", infoKey: "journey.preparing.item4.info" },
      { titleKey: "journey.preparing.item5.title", infoKey: "journey.preparing.item5.info" },
      { titleKey: "journey.preparing.item6.title", infoKey: "journey.preparing.item6.info" },
    ],
  },
  {
    id: "arrived",
    emoji: "🏠",
    titleKey: "journey.arrived.title",
    descriptionKey: "journey.arrived.description",
    checklist: [
      { titleKey: "journey.arrived.item1.title", infoKey: "journey.arrived.item1.info" },
      { titleKey: "journey.arrived.item2.title", infoKey: "journey.arrived.item2.info" },
      { titleKey: "journey.arrived.item3.title", infoKey: "journey.arrived.item3.info" },
      { titleKey: "journey.arrived.item4.title", infoKey: "journey.arrived.item4.info" },
      { titleKey: "journey.arrived.item5.title", infoKey: "journey.arrived.item5.info" },
      { titleKey: "journey.arrived.item6.title", infoKey: "journey.arrived.item6.info" },
    ],
  },
  {
    id: "studying",
    emoji: "📚",
    titleKey: "journey.studying.title",
    descriptionKey: "journey.studying.description",
    checklist: [
      { titleKey: "journey.studying.item1.title", infoKey: "journey.studying.item1.info" },
      { titleKey: "journey.studying.item2.title", infoKey: "journey.studying.item2.info" },
      { titleKey: "journey.studying.item3.title", infoKey: "journey.studying.item3.info" },
      { titleKey: "journey.studying.item4.title", infoKey: "journey.studying.item4.info" },
      { titleKey: "journey.studying.item5.title", infoKey: "journey.studying.item5.info" },
      { titleKey: "journey.studying.item6.title", infoKey: "journey.studying.item6.info" },
    ],
  },
  {
    id: "graduating",
    emoji: "🎉",
    titleKey: "journey.graduating.title",
    descriptionKey: "journey.graduating.description",
    checklist: [
      { titleKey: "journey.graduating.item1.title", infoKey: "journey.graduating.item1.info" },
      { titleKey: "journey.graduating.item2.title", infoKey: "journey.graduating.item2.info" },
      { titleKey: "journey.graduating.item3.title", infoKey: "journey.graduating.item3.info" },
      { titleKey: "journey.graduating.item4.title", infoKey: "journey.graduating.item4.info" },
      { titleKey: "journey.graduating.item5.title", infoKey: "journey.graduating.item5.info" },
      { titleKey: "journey.graduating.item6.title", infoKey: "journey.graduating.item6.info" },
    ],
  },
];
