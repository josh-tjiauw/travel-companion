import React from "react";
import Home from "./pages/home";
import SearchPage from "./pages/searchPage";
import CityDescription from "./pages/citydescpage";
import ToVisitPage from "./pages/toVisitPage";
import { parseRoute } from "./lib";

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
    /**
     * Listen for hash change events on the window object
     * Each time the window.location.hash changes, parse
     * it with the parseRoute() function and update state
     */
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === "") {
      return <Home />;
    }
    if (route.path === "products") {
      const productId = route.params.get("productId");
      return <ProductDetails productId={productId} />;
    }
    if (route.path === "search") {
      return <SearchPage />;
    }
    if (route.path === "tovisit") {
      return <ToVisitPage />;
    }
    if (route.path) return <NotFound />;
  }

  render() {
    return <>{this.renderPage()}</>;
  }
}
