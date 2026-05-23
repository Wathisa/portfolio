import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const desktopMediaQuery = "(min-width: 768px)";

const HorizontalScroll = forwardRef(function HorizontalScroll(
  { children, onSectionChange },
  ref,
) {
  const containerRef = useRef(null);
  const onSectionChangeRef = useRef(onSectionChange);

  useEffect(() => {
    onSectionChangeRef.current = onSectionChange;
  }, [onSectionChange]);

  useImperativeHandle(ref, () => ({
    scrollToSection(sectionId, { behavior = "smooth" } = {}) {
      const container = containerRef.current;
      const section = container?.querySelector(
        `[data-section-id="${sectionId}"]`,
      );

      if (!container || !section) {
        return false;
      }

      if (window.matchMedia(desktopMediaQuery).matches) {
        container.scrollTo({
          left: section.offsetLeft,
          behavior,
        });
      } else {
        section.scrollIntoView({
          behavior,
          block: "start",
        });
      }

      return true;
    },
  }));

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const handleWheel = (event) => {
      const canScrollHorizontally = container.scrollWidth > container.clientWidth;

      if (!window.matchMedia(desktopMediaQuery).matches || !canScrollHorizontally) {
        return;
      }

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

      if (delta === 0) {
        return;
      }

      event.preventDefault();
      container.scrollBy({
        left: delta,
        behavior: "auto",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const updateActiveSection = () => {
      if (!window.matchMedia(desktopMediaQuery).matches) {
        return;
      }

      const sections = container.querySelectorAll("[data-section-id]");
      const nextIndex = Math.round(container.scrollLeft / Math.max(container.clientWidth, 1));
      const nextSection = sections[nextIndex]?.getAttribute("data-section-id") ?? "home";

      onSectionChangeRef.current?.(nextSection);
    };

    updateActiveSection();
    container.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      container.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main ref={containerRef} className="horizontal-scroll">
      {children}
    </main>
  );
});

export default HorizontalScroll;
