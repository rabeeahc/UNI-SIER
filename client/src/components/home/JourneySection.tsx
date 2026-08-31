import { useState } from "react";
import Container from "../ui/Container";
import JourneyCard from "./JourneyCard";
import { journeys } from "../../data/journeys";
import ChecklistItem from "./ChecklistItem";
import { useChecklistProgress } from "../../hooks/useChecklistProgress";
import { useLanguage } from "../../hooks/useLanguage";

function JourneySection() {
  // Tracked by stable journey.id, not the (now translated) title - titles
  // change when the language changes, which would silently break this
  // comparison and reset the selected card back to nothing.
  const [selectedJourneyId, setSelectedJourneyId] = useState("accepted");
  const { t } = useLanguage();

  const currentJourney = journeys.find((journey) => journey.id === selectedJourneyId);

  // Progress is tracked per journey id, so switching from "Accepted" to
  // "Preparing" shows that stage's own saved progress, not a shared one.
  const { checkedItems, toggleItem } = useChecklistProgress(currentJourney?.id ?? "");

  // Checked-state and progress are keyed by titleKey (a stable translation
  // key like "journey.accepted.item1.title"), not the translated display
  // text. If we keyed by the translated string instead, switching languages
  // would change the key value and silently break a student's saved
  // progress - checked items would appear unchecked after a language switch.
  const completedCount = currentJourney
    ? currentJourney.checklist.filter((item) => checkedItems.includes(item.titleKey)).length
    : 0;
  const totalCount = currentJourney?.checklist.length ?? 0;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <section className="bg-sand-25 py-24 md:py-28 dark:bg-sand-950">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-sand-900 md:text-5xl dark:text-white">
            {t("journey.title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-sand-600 dark:text-sand-400">
            {t("journey.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {journeys.map((journey) => (
            <JourneyCard
              key={journey.id}
              emoji={journey.emoji}
              title={t(journey.titleKey)}
              description={t(journey.descriptionKey)}
              selected={selectedJourneyId === journey.id}
              onClick={() => setSelectedJourneyId(journey.id)}
            />
          ))}
        </div>

        {currentJourney && (
          <div className="ring-gradient mt-12 rounded-3xl border border-sand-200 bg-white/80 p-8 shadow-(--shadow-lift) backdrop-blur-sm md:p-10 dark:border-sand-700 dark:bg-sand-900/70">
            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-display text-3xl font-semibold text-sand-900 dark:text-white">
                  {currentJourney.emoji} {t(currentJourney.titleKey)}
                </h3>

                <span className="rounded-full border border-coral-200/70 bg-coral-50 px-4 py-2 text-sm font-semibold text-coral-700 dark:border-coral-900/40 dark:bg-coral-900/30 dark:text-coral-300">
                  {completedCount} / {totalCount} {t("common.completed")}
                </span>
              </div>

              <p className="mt-4 text-sand-600 dark:text-sand-400">{t(currentJourney.descriptionKey)}</p>
            </div>

            <div className="mb-8">
              <div className="h-2 w-full overflow-hidden rounded-full bg-sand-200 dark:bg-sand-800">
                <div
                  className="h-2 rounded-full bg-linear-to-r from-coral-500 to-ember-400 transition-all duration-500 ease-out-back"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {currentJourney.checklist.map((item) => (
                <ChecklistItem
                  key={item.titleKey}
                  title={t(item.titleKey)}
                  info={t(item.infoKey)}
                  checked={checkedItems.includes(item.titleKey)}
                  onToggle={() => toggleItem(item.titleKey)}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default JourneySection;
