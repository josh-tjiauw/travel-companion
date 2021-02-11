import React from "react";

function ToVisit(props) {
  const { toVisitId, cityName, isCompleted } = props.toVisit;
  const idAttr = `toVisit-city-${toVisitId}`;
  const taskClass = isCompleted
    ? "form-check-label is-completed"
    : "form-check-label";
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          id={idAttr}
          type="checkbox"
          checked={isCompleted}
          className="form-check-input mr-2"
          onChange={() => props.toggleCompleted(toVisitId)}
        />
        <label className={taskClass} htmlFor={idAttr}>
          {cityName}
        </label>
      </div>
    </li>
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
