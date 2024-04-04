import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/authSlice";
import { spinerEl } from "./slice/spinerSlice";
import { getUsersSlice } from "./slice/getUsersSlice";
import { getRoleSlice } from "./slice/roles/roleSlice";
export const store = configureStore({
  reducer: {
    authLogin: loginSlice.reducer,
    onSpiner: spinerEl.reducer,
    getUserState: getUsersSlice.reducer,
    getRolesSate: getRoleSlice.reducer,
  },
});
