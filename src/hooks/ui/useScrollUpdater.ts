import { useScroll } from "framer-motion";
import { useEffect, type RefObject } from "react";

import { useAppDispatch } from "@store/hooks";
import { setScrollProgress } from "@store/ui/uiSlice";

export function useScrollUpdater(scrollRef?: RefObject<HTMLElement | null>) {
  const dispatch = useAppDispatch();

  const { scrollYProgress } = useScroll({ container: scrollRef });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      dispatch(setScrollProgress(latest * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress, dispatch]);
}
