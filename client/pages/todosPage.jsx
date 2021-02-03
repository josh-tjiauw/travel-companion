import React from "react";
import AppIcon from "../components/appicon";

export default function TodosPage() {
  const handleAdd = (e) => {
    console.log(e);
  };
  return (
    <div className="container">
      <AppIcon />
      <h1 className="hdr-text">To-dos Page</h1>
      <form>
        <input type="text" placeholder="Enter a To-do" />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}
