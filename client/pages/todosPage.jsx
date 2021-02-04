import React, { useState } from "react";
import App from "../app";
import AppIcon from "../components/appicon";
import TodoForm from "../components/TodoForm";
import PageTitle from "../components/PageTitle";

export default function TodosPage() {
  const [todosCity, settodosCity] = useState([]);
  function addTodosCity(city) {
    settodosCity([city, ...todosCity]);
  }

  return (
    <div className="container">
      <AppIcon />
      <PageTitle value="Your To-dos" />
      <TodoForm />
    </div>
  );
}
