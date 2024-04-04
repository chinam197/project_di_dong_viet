import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../config/client";
const VITE_SERVER_API = import.meta.env.VITE_SERVER_API;
export const getUsers = createAsyncThunk("getUsers", async (api) => {
  const response = await fetch(`${VITE_SERVER_API}${api}`);

  const data = response.json();

  return data;
});
