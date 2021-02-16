import React from "react";

function ToVisit(props) {
  const { toVisitId, cityName, isCompleted } = props.toVisit;
  const idAttr = `toVisit-city-${toVisitId}`;
  const taskClass = isCompleted
    ? "form-check-label is-completed"
    : "form-check-label";
  return (
    <div style={{ position: "relative", border: "solid gray", color: "white" }}>
      <label htmlFor={idAttr}>{cityName}</label>
      <div
        className="form-check"
        style={{
          position: "relative",
          top: "-37px",
          right: "-170px",
          width: "30px",
        }}
      >
        <input
          id={idAttr}
          type="checkbox"
          checked={isCompleted}
          className="form-check-input mr-2"
          onChange={() => props.toggleCompleted(toVisitId)}
        />
      </div>
    </div>
  );
}

export default function ToVisitList(props) {
  return (
    <div>
      {props.toVisit.map((cityName) => {
        return (
          <ToVisit
            key={cityName.toVisitId}
            toVisit={cityName}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
    </div>
  );
}
