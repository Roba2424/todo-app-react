import "../TodoItem/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function TodoItem({ task, toggleComplete, removeTodo }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="TodoItem">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "complete" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div className="todo-icons">
        <FontAwesomeIcon icon={faPenToSquare} />
        {isHovered ? (
          <i
            class="fa-solid fa-trash-list fa-shake"
            onMouseLeave={handleMouseLeave}
            onClick={() => removeTodo(task.id)}
          ></i>
        ) : (
          <i className="fa-solid fa-trash" onMouseEnter={handleMouseEnter}></i>
        )}
      </div>
    </div>
  );
}
