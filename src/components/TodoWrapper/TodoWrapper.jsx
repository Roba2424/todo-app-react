import { useRef, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "../TodoWrapper/TodoWrapper.css";
import EditDialog from "../EditDialog/EditDialog";
import { useDispatch, useSelector } from "react-redux";

export default function TodoWrapper() {
  const todosStore = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todosStore);
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const dialog = useRef();

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
        <TodoForm />
        {todosStore.map((todo, index) => (
          <TodoItem task={todo} key={index} editTodo={editTodo} />
        ))}
      </div>
    </>
  );
}
