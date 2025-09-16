import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useScrollProgress from "@hooks/ui/useScrollProgress";
import useScrollToTopRequest from "@hooks/ui/useScrollToTopRequest";

import type { RefObject } from "react";

interface ScrollToTopProps {
  scrollRef?: RefObject<HTMLElement | null>;
}

export default function ScrollToTop({ scrollRef }: ScrollToTopProps) {
  const { pathname } = useLocation();
  const { scrollToTopRequest } = useScrollToTopRequest();
  const { updateScrollProgress } = useScrollProgress();

  // 1. 페이지 이동 시 발생하는 스크롤 처리
  useEffect(() => {
    const target = scrollRef?.current ?? window;
    target.scrollTo({ top: 0, behavior: "auto" });
    updateScrollProgress(0);
  }, [pathname, scrollRef]);

  // 2. 로고 클릭, NavLink클릭 등으로 발생하는 수동 스크롤 요청 처리
  useEffect(() => {
    if (scrollToTopRequest > 0) {
      const target = scrollRef?.current ?? window;
      target.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollToTopRequest, scrollRef]);

  return null;
}
