import "../TodoItem/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function TodoItem({
  task,
  toggleComplete,
  removeTodo,
  editTodo,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="TodoItem">
      <p
        onClick={() => toggleComplete(task.id)}
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
        {isHovered ? (
          <i
            className="fa-solid fa-trash-list fa-shake icon-hover"
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => removeTodo(task.id)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-trash icon-hover"
            onMouseEnter={() => setIsHovered(true)}
          ></i>
        )}
      </div>
    </div>
  );
}
