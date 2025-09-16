import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  scrollProgress: number; // 0에서 100 사이의 숫자
  scrollToTopRequest: number;
}

const initialState: UiState = {
  scrollProgress: 0,
  scrollToTopRequest: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrollProgress: (state, action: PayloadAction<number>) => {
      state.scrollProgress = action.payload;
    },
    requestScrollToTop: (state) => {
      state.scrollToTopRequest += 1; // 숫자를 1 증가시켜 변화를 감지
    },
  },
});

export const { setScrollProgress, requestScrollToTop } = uiSlice.actions;
export default uiSlice.reducer;
