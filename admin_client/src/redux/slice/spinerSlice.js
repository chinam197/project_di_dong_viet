import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onSpiner: false,
};

export const spinerEl = createSlice({
  name: "spiner",
  initialState,
  reducers: {
    onSpiner: (state, action) => {
      state.onSpiner = action.payload;
    },
  },
});
