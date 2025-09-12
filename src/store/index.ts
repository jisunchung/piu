import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "@store/ui/uiSlice";
import userReducer from "@store/user/userSlice";

export const store = configureStore({
  reducer: { user: userReducer, ui: uiReducer },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
