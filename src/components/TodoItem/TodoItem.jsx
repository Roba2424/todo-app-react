import "../TodoItem/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../../store/todoSlice";

export default function TodoItem({ task, editTodo }) {
  const dispatch = useDispatch();
  
  return (
    <div className="TodoItem">
      <p
        onClick={() => dispatch(toggleComplete(task.id))}
        className={`${task.completed ? "complete" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div className="todo-icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="icon-hover"
          onClick={() => editTodo(task.id)}
        />
          <i
            className="fa-solid fa-trash-can"
            onClick={() => dispatch(removeTodo(task.id))}
          ></i>
      </div>
    </div>
  );
}
