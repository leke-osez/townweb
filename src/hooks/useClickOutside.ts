import { useEffect } from "react";

type AnyEvent = MouseEvent | TouchEvent;

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: AnyEvent) => void,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: AnyEvent) => {
      const el = ref?.current;
      const target = event.target as HTMLElement;
      if (
        !el ||
        el.contains(target as Node) ||
        target.closest("[data-radix-select-content]") ||
        target.closest("[data-radix-popper-content-wrapper]")
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, enabled]);
}
