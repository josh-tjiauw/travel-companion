import React, { useState } from "react";
import App from "../app";
import PageTitle from "../components/PageTitle";
import ToVisitForm from "../components/ToVisitForm";
import ToVisitList from "../components/ToVisitList";

export default function ToVisitPage() {
  const [toVisit, setToVisit] = useState([]);

  function addToVisit(cityName) {
    setToVisit([cityName, ...toVisit]);
  }

  function toggleComplete(id) {
    setToVisit(
      toVisit.map((cityName) => {
        if (cityName.id === id) {
          return {
            ...cityName,
            isCompleted: !cityName.isCompleted,
          };
        }
        return cityName;
      })
    );
  }

  function removeToVisit(id) {
    setToVisit(toVisit.filter((cityName) => cityName.id !== id));
  }

  return (
    <div className="container">
      <div style={{ position: "absolute", top: "15%", left: "5%" }}>
        <PageTitle value="Your Future Visits" />
      </div>
      <ToVisitForm addToVisit={addToVisit} />
      <div style={{ position: "absolute", top: "35%" }}>
        <ToVisitList
          toVisit={toVisit}
          toggleComplete={toggleComplete}
          removeToVisit={removeToVisit}
        />
      </div>
    </div>
  );
}
