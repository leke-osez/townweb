import { useEffect } from "react";

type ScrollOptions = {
  offset?: number;
  behavior?: ScrollBehavior;
};

export function useScrollToSection(
  sectionId?: string,
  options: ScrollOptions = {},
) {
  const { offset = 0, behavior = "smooth" } = options;
  //   const hasScrolled = useRef(false);
  //   if (hasScrolled.current) return;
  //   hasScrolled.current = true;

  useEffect(() => {
    if (!sectionId) return;

    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({ top: y, behavior });
    };

    // Delay ensures DOM is fully rendered after navigation
    const timeout = setTimeout(scroll, 1000);

    return () => clearTimeout(timeout);
  }, [sectionId, offset, behavior]);
}
