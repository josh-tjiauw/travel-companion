import React from 'react';
import Home from './pages/home';
import SearchPage from './pages/searchpage';
import ToVisitPage from './pages/ToVisitPage';
import { parseRoute } from './lib';
import CityDescriptionPage from './pages/CityDescriptionPage';
import ViewCityReviews from './pages/ViewCityReviews';
import NotFound from './pages/NotFound';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      info: null,
      photo: null,
      isLoggedIn: false,
      username: null
    };
    this.getCityName = this.getCityName.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  getCityName(data) {
    this.setState({ info: data });
  }

  getUser(user) {
    this.setState({ isLoggedIn: true, username: user });

  }

  renderPage() {
    console.log(this.state.username);
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'search') {
      return <SearchPage getCityName={this.getCityName} />;
    }
    if (route.path === 'tovisit') {
      return <ToVisitPage />;
    }
    if (route.path === 'city') {
      const placeId = route.params.get('placeId');
      const cityName = route.params.get('cityName');
      if (cityName === 'NotFound') {
        return <NotFound />;
      } else {
        return <CityDescriptionPage cityName={cityName} placeId={placeId} />;
      }
    }
    if (route.path === 'cityReviews') {
      const placeId = route.params.get('placeId');
      const cityName = route.params.get('cityName');
      return <ViewCityReviews cityName={cityName} placeId={placeId} />;
    }
    if (route.path === 'signup') {
      return <SignUpPage />;
    }
    if (route.path === 'sign-in') {
      return <SignInPage getUser={this.getUser} />;
    }
    if (route.path === '#city?NotFound') {
      return <NotFound />;
    }
    return null;
  }

  render() {
    return <>{this.renderPage()}</>;
  }
}

/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/#' exact component={Home}/>
        <Route path='/#tovisit' component={ToVisitPage}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
    </>
  );
}
*/
