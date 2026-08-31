import { BridgeIcon } from "../ui/icons";

function Logo() {
  return (
    <div className="group flex cursor-pointer items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-coral-500 to-ember-500 shadow-(--shadow-glow) transition-transform duration-500 ease-out-back group-hover:rotate-6 group-hover:scale-105">
        <BridgeIcon className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="font-display text-lg font-semibold leading-tight tracking-tight text-sand-900 dark:text-white">
          Campus Bridge
        </h1>

        <p className="text-xs font-medium tracking-wide text-sand-500 dark:text-sand-400">
          Kocaeli University
        </p>
      </div>
    </div>
  );
}

export default Logo;
