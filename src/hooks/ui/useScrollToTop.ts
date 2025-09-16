import { useAppDispatch, useAppSelector } from "@store/hooks";
import { requestScrollToTop } from "@store/ui/uiSlice";

function useScrollToTop() {
  const dispatch = useAppDispatch();
  const scrollToTopRequest = useAppSelector(
    (state) => state.ui.scrollToTopRequest,
  );

  const ScrollToTop = () => dispatch(requestScrollToTop());

  return { scrollToTopRequest, requestScrollToTop: ScrollToTop };
}

export default useScrollToTop;
