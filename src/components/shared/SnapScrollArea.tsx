import { ScrollContext } from "@contexts/ScrollContext";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import useScrollToTop from "@hooks/ui/useScrollToTop";
import { useScrollUpdater } from "@hooks/ui/useScrollUpdater";

interface Section {
  id: string;
  component: React.ReactNode;
  visible?: boolean;
  children?: React.ReactNode;
}

interface SnapScrollAreaProps {
  sections: Section[];
  children: React.ReactNode;
  snap?: boolean;
}

export function SnapScrollArea({
  sections,
  children,
  snap = true,
}: SnapScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollUpdater(scrollRef);
  const { scrollToTopRequest } = useScrollToTop();

  useEffect(() => {
    if (scrollToTopRequest > 0 && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollToTopRequest]);

  return (
    <ScrollContext.Provider value={{ scrollRef }}>
      <div
        ref={scrollRef}
        className={clsx(
          snap && "snap-y snap-mandatory",
          "relative h-screen w-full overflow-y-scroll scroll-smooth",
        )}
      >
        {sections.map((section) =>
          section.visible !== false ? (
            <div className="h-screen snap-start" key={section.id}>
              {section.component}
            </div>
          ) : null,
        )}
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
