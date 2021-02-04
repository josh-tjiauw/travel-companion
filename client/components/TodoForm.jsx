import React, { useState } from "react";

export default function TodoForm() {
  const [todoCity, settodoCity] = useState({
    id: "",
    cityName: "",
  });

  const handleInputChange = (e) => {
    settodoCity({ ...todoCity, cityName: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (todoCity.cityName.trim()) {
      add;
    }
  };

  return (
    <form>
      <input
        type="text"
        value={todoCity.cityName}
        onChange={handleInputChange}
        placeholder="Enter a city name"
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
