import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: uuidv4(),
      task: "alo",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      return state.map((todo) =>
        action.payload === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export default todoSlice;
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
