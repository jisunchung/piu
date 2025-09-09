import type { User } from "@models/user";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = User | null;

const initialState: initialStateType = null;

const userSlice = createSlice({
  name: "user",
  initialState: initialState as initialStateType,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => {
      return action.payload;
    },
    clearUser: () => null,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
