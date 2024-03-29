"use client";
import { authSlice } from "@/redux/slice/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "@/redux/middlewares/todomiddleware";
const { auth: auth1 } = authSlice.actions;
const page = () => {
  const auth = useSelector((state) => state.auth.auth);
  const todo = useSelector((state) => state.todo.todolist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      <p>{auth}</p>
      <button
        onClick={() => {
          dispatch(auth1(auth + 1));
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        +
      </button>
      <ul>
        {todo.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default page;
