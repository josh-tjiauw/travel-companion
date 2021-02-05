import React from "react";
import Home from "./pages/home";
import SearchPage from "./pages/searchPage";
import CityDescription from "./pages/citydescpage";
import ToVisitPage from "./pages/toVisitPage";
import { parseRoute } from "./lib";
import AppIcon from "./components/appicon";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", (event) => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === "") {
      return <Home />;
    }
    if (route.path === "search") {
      return <SearchPage />;
    }
    if (route.path === "tovisit") {
      return <ToVisitPage />;
    }
    return <NotFound />;
  }

  render() {
    return (
      <>
        <AppIcon />
        {this.renderPage()}
      </>
    );
  }
}
