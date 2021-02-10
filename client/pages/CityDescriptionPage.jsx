import React from "react";
import PageTitle from "../components/PageTitle";
import fixCityName from "../lib/fixCityName";

export default class CityDescriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: null,
      img: null,
    };
  }

  async componentDidMount() {
    const request = new Request(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${fixCityName(
        this.props.cityName
      )}&key=AIzaSyBgLIChRAK9VHmUXgVqv-9MSkbafjhjZXM&inputtype=textquery&fields=photos`
    );
    const response = await fetch(request);
    const data = await response.json();
    const img_link = await `https://maps.googleapis.com/maps/api/place/photo?photoreference=${data.candidates[0].photos[0].photo_reference}&key=AIzaSyBgLIChRAK9VHmUXgVqv-9MSkbafjhjZXM&maxwidth=320&maxheight=400`;
    this.setState({ img: img_link });
  }
  render() {
    console.log(this.state);
    return (
      <>
        <div className="container">
          <img src={this.state.img} alt="City" />
          <div>
            <PageTitle value={this.props.cityName} />
          </div>
          <h2 className="text" style={{ height: "50px" }}>
            Have you been here?
          </h2>
          <button className="nav-btn">Create a Review!</button>
          <button className="nav-btn">View Other Reviews</button>
        </div>
      </>
    );
  }
}
