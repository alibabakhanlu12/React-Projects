import React from "react";
import { FaTimes } from "react-icons/fa";
function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task + ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={onToggle}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onDelete}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
