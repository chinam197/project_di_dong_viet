import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  auth: 0,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.auth = action.payload;
    },
  },
});
