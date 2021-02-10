import React from "react";
import Home from "./pages/home";
import SearchPage from "./pages/searchPage";
import ToVisitPage from "./pages/toVisitPage";
import { parseRoute } from "./lib";
import AppIcon from "./components/appicon";
import CityDescriptionPage from "./pages/CityDescriptionPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      info: null,
      photo: null,
    };
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    window.addEventListener("hashchange", (event) => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  getInfo(data) {
    this.setState({ info: data });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === "") {
      return <Home />;
    }
    if (route.path === "search") {
      return <SearchPage getInfo={this.getInfo} />;
    }
    if (route.path === "tovisit") {
      return <ToVisitPage />;
    }
    if (route.path === "city") {
      const placeId = route.params.get("placeId");
      const cityName = route.params.get("cityName");
      console.log(cityName);
      return <CityDescriptionPage cityName={cityName} placeId={placeId} />;
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
