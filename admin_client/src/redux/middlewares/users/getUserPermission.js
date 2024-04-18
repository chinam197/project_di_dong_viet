import { createAsyncThunk } from "@reduxjs/toolkit";
const VITE_SERVER_API = import.meta.env.VITE_SERVER_API;

export const userPermissions = createAsyncThunk(
  "userPermissions",
  async (id) => {
    const response = await fetch(
      `${VITE_SERVER_API}/api/v1/admin/permission/${id}`
    );
    const data = response.json();
    console.log(data);
    return data;
  }
);
