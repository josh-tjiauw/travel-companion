import React from "react";
import Home from "./pages/home";
import SearchPage from "./pages/searchPage";
import CityDescription from "./pages/citydescpage";
import TodosPage from "./pages/todosPage";

export default class App extends React.Component {
  render() {
    return <TodosPage />;
  }
}
