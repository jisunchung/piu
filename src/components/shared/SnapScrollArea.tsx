import { useEffect, useRef, useState } from "react";

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollEl = scrollRef.current;
      if (!scrollEl) return;
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight - scrollEl.clientHeight;
      const ratio = 100; // 100% 스크롤을 기준
      const progress = (scrollTop / scrollHeight) * ratio || 0;
      setScrollProgress(progress);
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      // 초기값 설정
      handleScroll();
    }
    return () => {
      if (scrollEl) scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
