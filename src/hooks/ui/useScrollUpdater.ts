import { useEffect, type RefObject } from "react";

import { useAppDispatch } from "@store/hooks";
import { setScrollProgress } from "@store/ui/uiSlice";

export function useScrollUpdater(scrollRef?: RefObject<HTMLElement | null>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const scrollElement = scrollRef?.current ?? window;
    const targetElement = scrollRef?.current ?? document.documentElement;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = targetElement;
      const currentScrollHeight = scrollHeight - clientHeight;
      const progress =
        currentScrollHeight > 0 ? (scrollTop / currentScrollHeight) * 100 : 0;
      dispatch(setScrollProgress(progress));
    };

    scrollElement.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, scrollRef]);
}
