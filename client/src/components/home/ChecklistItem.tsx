import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "../ui/icons";

type ChecklistItemProps = {
  title: string;
  info: string;
  checked: boolean;
  onToggle: () => void;
};

function ChecklistItem({ title, info, checked, onToggle }: ChecklistItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        checked
          ? "border-coral-200 bg-coral-50/60 dark:border-coral-900/40 dark:bg-coral-900/10"
          : "border-sand-200 bg-white/70 hover:border-sand-300 dark:border-sand-700 dark:bg-sand-800/60"
      }`}
    >
      <div className="flex w-full items-center justify-between p-5 text-left">
        <div className="flex flex-1 items-center gap-4">
          {/* Real checkbox - toggles saved progress, separate from the
              expand/collapse button so clicking one doesn't trigger the other */}
          <button
            onClick={onToggle}
            aria-label={checked ? `Mark "${title}" as not done` : `Mark "${title}" as done`}
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ease-out-back ${
              checked
                ? "scale-110 border-coral-500 bg-linear-to-br from-coral-500 to-ember-500 text-white"
                : "border-sand-300 hover:border-coral-400 dark:border-sand-600"
            }`}
          >
            {checked && <CheckIcon className="h-4 w-4" />}
          </button>

          <button onClick={() => setOpen(!open)} className="flex-1 text-left">
            <span
              className={`font-medium ${
                checked
                  ? "text-sand-500 line-through dark:text-sand-500"
                  : "text-sand-800 dark:text-sand-100"
              }`}
            >
              {title}
            </span>
          </button>
        </div>

        <button onClick={() => setOpen(!open)} aria-label={open ? "Collapse details" : "Expand details"}>
          <ChevronDownIcon className={`h-5 w-5 text-sand-400 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 px-5 py-4 dark:border-sand-700 dark:bg-sand-900/40">
          <p className="text-sand-600 dark:text-sand-300">{info}</p>
        </div>
      )}
    </div>
  );
}

export default ChecklistItem;
