import { forwardRef, useEffect, useRef, useState } from "react";
import "../EditDialog/EditDialog.css";

const EditDialog = forwardRef(function ({ initialValue, onSave }, ref) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = initialValue;
    }
  }, [initialValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <dialog className="EditDialog" ref={ref}>
      <input
        type="text"
        id="edit-input"
        onChange={handleInputChange}
        value={inputValue}
        ref={inputRef}
      />
      <div className="edit-buttons">
        <form method="dialog">
          <button className="btn-cancel">Cancel</button>
        </form>
        <form method="dialog" onSubmit={() => onSave(inputRef.current.value)}>
          <button className="btn-ok" type="submit">
            OK
          </button>
        </form>
      </div>
    </dialog>
  );
});

export default EditDialog;
