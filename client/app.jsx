import React from "react";
import Home from "./pages/home";
import SearchPage from "./pages/searchPage";
import CityDescription from "./pages/citydescpage";
import ToVisitPage from "./pages/toVisitPage";
import { parseRoute } from "./lib";
import AppIcon from "./components/appicon";
import GetPhoto from "./components/GetPhoto";

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
      return (
        <>
          <GetPhoto cityName={this.state.info[0].formatted_address} />
          <CityDescription
            name={this.state.info[0].formatted_address}
            placeId={this.state.info[0].place_id}
          />
        </>
      );
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
