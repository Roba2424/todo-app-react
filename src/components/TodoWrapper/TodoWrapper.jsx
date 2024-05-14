import { useRef, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "../TodoWrapper/TodoWrapper.css";
import { v4 as uuidv4 } from "uuid";
import EditDialog from "../EditDialog/EditDialog";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const dialog = useRef();

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
    dialog.current.showModal();
  };

  const saveEdit = (newTask) => {
    if (newTask !== "")
      setTodos(
        todos.map((todo) =>
          todo.id === currentTodo.id ? { ...todo, task: newTask } : todo
        )
      );
    setCurrentTodo(null);
  };

  return (
    <>
      <EditDialog
        ref={dialog}
        onSave={saveEdit}
        initialValue={currentTodo ? currentTodo.task : ""}
      />
      <div className="todo-wrapper">
        <h1>Title of TODOS</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <TodoItem
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </>
  );
}
