import { useState } from "react";

export default function TodoTask({ task, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) {
      onUpdate(task.id, value.trim());
      setIsEditing(false);
    }
    if (e.key === "Escape") {
      setValue(task.text);
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <div style={{ flex: 1 }}>
        {isEditing ? (
          <input
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => setIsEditing(false)}
          />
        ) : (
          <>
            <span
              style={{
                display: "block",
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onDoubleClick={() => setIsEditing(true)}
            >
              {task.text}
            </span>

            {}
            <small style={{ color: "#6b7280", fontSize: "12px" }}>
              {formatDate(task.createdAt)}
            </small>
          </>
        )}
      </div>

      <span
        onClick={() => onDelete(task.id)}
        style={{ cursor: "pointer", marginRight: "12px" }}
      >
        ×
      </span>
    </li>
  );
}
