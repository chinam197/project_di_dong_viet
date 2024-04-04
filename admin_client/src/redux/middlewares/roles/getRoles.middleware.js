import { createAsyncThunk } from "@reduxjs/toolkit";
const VITE_SERVER_API = import.meta.env.VITE_SERVER_API;
export const getRoles = createAsyncThunk("getRoles", async () => {
  const response = await fetch(`${VITE_SERVER_API}/api/v1/admin/roles`);
  const data = response.json();

  return data;
});
