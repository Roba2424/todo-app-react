import "../TodoItem/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ task }) {
  return (
    <div className="TodoItem">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />{" "}
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
