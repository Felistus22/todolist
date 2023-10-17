import React, { useState } from "react";

function InputModal({ isOpen, onClose, onSave }) {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    onSave(inputValue);
    setInputValue("");
  };

  return (
    <div className={`modal ${isOpen ? "open" : "hidden"}`}>
      <div className="modal-content">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default InputModal;
