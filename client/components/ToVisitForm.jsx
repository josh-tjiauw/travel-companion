import React, { useState } from "react";

export default function ToVisitForm({ addToVisit }) {
  const [toVisit, setToVisit] = useState({
    id: "",
    cityName: "",
    isCompleted: false,
  });

  function handleInputChange(e) {
    setToVisit({ ...toVisit, cityName: e.target.value });
  }

  function handleAdd(e) {
    e.preventDefault();
    if (toVisit.cityName.trim()) {
      addToVisit({ ...toVisit, id: null });
      setToVisit({ ...toVisit, cityName: "" });
    }
  }

  return (
    <form onSubmit={handleAdd}>
      <input
        label="city"
        type="text"
        value={toVisit.cityName}
        onChange={handleInputChange}
        placeholder="Enter a city name"
      />
      <button type="submit">Add</button>
    </form>
  );
}
