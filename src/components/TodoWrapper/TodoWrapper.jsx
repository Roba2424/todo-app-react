import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "../TodoWrapper/TodoWrapper.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="todo-wrapper">
      <h1>Title of TODOS</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem task={todo} key={index} />
      ))}
    </div>
  );
}
