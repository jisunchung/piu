import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setScrollProgress } from "@store/ui/uiSlice";

function useScrollProgress() {
  const progress = useAppSelector((state) => state.ui.scrollProgress);
  const dispatch = useAppDispatch();

  const updateScrollProgress = (progress: number) =>
    dispatch(setScrollProgress(progress));

  return { updateScrollProgress, progress };
}

export default useScrollProgress;
