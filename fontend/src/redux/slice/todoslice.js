import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "../middlewares/todomiddleware";
const initialState = {
  todolist: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todolist = action.payload;
    });
  },
});
