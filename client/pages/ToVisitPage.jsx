import React, { useState } from "react";
import App from "../app";
import AppIcon from "../components/appicon";
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
      <AppIcon />
      <PageTitle value="Your Places to Visit" />
      <ToVisitForm addToVisit={addToVisit} />
      <ToVisitList
        toVisit={toVisit}
        toggleComplete={toggleComplete}
        removeToVisit={removeToVisit}
      />
    </div>
  );
}
