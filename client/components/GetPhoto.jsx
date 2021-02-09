import React, { setstate } from "react";
import { render } from "react-dom";
import fixCityName from "../lib/fixCityName";

export default class GetPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const img_link = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${data.candidates[0].photos[0].photo_reference}&key=AIzaSyBgLIChRAK9VHmUXgVqv-9MSkbafjhjZXM&maxwidth=320&maxheight=400`;
    this.setState({ img: img_link });
  }
  render() {
    return <img src={this.state.img} alt="City" />;
  }
}
