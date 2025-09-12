import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  scrollProgress: number; // 0에서 100 사이의 숫자
}

const initialState: UiState = {
  scrollProgress: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrollProgress: (state, action: PayloadAction<number>) => {
      state.scrollProgress = action.payload;
    },
  },
});

export const { setScrollProgress } = uiSlice.actions;
export default uiSlice.reducer;
