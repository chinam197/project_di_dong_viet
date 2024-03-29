import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.onLogin = action.payload;
    },
  },
});
export default loginSlice;
