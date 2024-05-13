import "../TodoItem/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ task, toggleComplete }) {
  return (
    <div className="TodoItem">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "complete" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div className="todo-icons">
        <FontAwesomeIcon icon={faPenToSquare} />{" "}
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
