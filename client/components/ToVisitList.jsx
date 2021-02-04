import React from "react";
import ToVisit from "./ToVisit";

export default function ToVisitList({
  toVisit,
  toggleComplete,
  removeToVisit,
}) {
  return (
    <div>
      {toVisit.map((cityName) => {
        return (
          <ToVisit
            key={cityName.id}
            toVisit={cityName}
            removeToVisit={removeToVisit}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </div>
  );
}
