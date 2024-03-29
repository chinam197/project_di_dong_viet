import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/authSlice";
import { spinerEl } from "./slice/spinerSlice";
export const store = configureStore({
  reducer: {
    authLogin: loginSlice.reducer,
    onSpiner: spinerEl.reducer,
  },
});
