import React from "react";

export default function ToVisit({ toVisit, toggleComplete, removeToVisit }) {
  function handleCheckboxClick() {
    toggleComplete(toVisit.id);
  }

  function handleRemoveClick() {
    removeToVisit(toVisit.id);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <ul
        style={{
          color: "white",
          textDecoration: toVisit.isCompleted ? "line-through" : null,
        }}
      >
        {toVisit.cityName}
      </ul>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}
