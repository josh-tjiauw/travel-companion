import React from "react";

export default function ToVisit({ toVisit, toggleComplete, removeToVisit }) {
  function handleCheckboxClick() {
    toggleComplete(toVisit.id);
  }

  function handleRemoveClick() {
    removeToVisit(toVisit.id);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
        width: "98vw",
        height: "10vw",
        border: "solid white",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          display: "flex",
          position: "absolute",
          left: "5px",
          top: "5px",
        }}
      >
        <input
          type="checkbox"
          onClick={handleCheckboxClick}
          style={{ WebkitTransform: "scale(3)" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          textDecoration: toVisit.isCompleted ? "line-through" : null,
          position: "absolute",
          top: "5px",
        }}
      >
        {toVisit.cityName}
      </div>
      <button
        style={{
          display: "flex",
          position: "absolute",
          right: "5px",
          top: "5px",
          border: "none",
          color: "red",
          backgroundColor: "transparent",
          fontSize: "18px",
        }}
        onClick={handleRemoveClick}
      >
        X
      </button>
    </div>
  );
}
