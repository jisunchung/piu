import React, { useRef } from "react";

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
}

export function SnapScrollArea({ sections, children }: SnapScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useScrollUpdater(scrollRef);

  return (
    <div
      ref={scrollRef}
      className="h-screen snap-y snap-mandatory overflow-scroll"
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
  );
}
