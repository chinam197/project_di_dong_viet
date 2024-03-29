import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { todoSlice } from "./slice/todoslice";
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todo: todoSlice.reducer,
  },
  devTools: true,
});
