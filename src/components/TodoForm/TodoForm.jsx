import { useState } from "react";
import "../TodoForm/TodoForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  console.log("alo " + value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!!value) dispatch(addTodo(value));
    setValue("");
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
}
