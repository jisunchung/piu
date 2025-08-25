import type { User } from "@models/user";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: User | null = null;

const userStateSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {},
});

export const {} = userStateSlice.actions;
export default userStateSlice.reducer;
