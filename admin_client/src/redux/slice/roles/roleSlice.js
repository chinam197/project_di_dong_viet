import { createSlice } from "@reduxjs/toolkit";
import { getRoles } from "../../middlewares/roles/getRoles.middleware";
const initialState = {
  roleList: [],
  role_permission_data: [],
  status: "idle",
};
export const getRoleSlice = createSlice({
  name: "getRole",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoles.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getRoles.fulfilled, (state, action) => {
      state.roleList = action.payload;
      state.status = "success";
    });
    builder.addCase(getRoles.rejected, (state) => {
      state.status = "error";
    });
  },
});
