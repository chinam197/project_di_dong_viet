import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../middlewares/getUsers.middleware";
const initialState = {
  userList: [],
  status: "",
};
export const getUsersSlice = createSlice({
  name: "getUserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.userList = action.payload;
      state.status = "success";
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.status = "error";
    });
  },
});
