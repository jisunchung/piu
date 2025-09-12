import { useRef } from "react";

import useScrollProgress from "@hooks/ui/useScrollProgress";
import { useScrollUpdater } from "@hooks/ui/useScrollUpdater";

import ProgressBar from "./ProgressBar";

interface Section {
  id: string;
  component: React.ReactNode;
  visible?: boolean;
}

interface SnapScrollAreaProps {
  sections: Section[];
}

export function SnapScrollArea({ sections }: SnapScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { progress: scrollProgress } = useScrollProgress();
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
      <ProgressBar progress={scrollProgress}></ProgressBar>
    </div>
  );
}
