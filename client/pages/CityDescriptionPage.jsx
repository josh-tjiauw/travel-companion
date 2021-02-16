import React from "react";
import PageTitle from "../components/PageTitle";
import ReviewForm from "../components/ReviewForm";
import fixCityName from "../lib/fixCityName";
import config from "../config.json";

export default class CityDescriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      reviews: [],
    };
    this.addReview = this.addReview.bind(this);
  }

  addReview(review) {
    fetch(`/api/city/${this.props.placeId}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ reviews: [data, ...this.state.reviews] });
      });
  }

  async componentDidMount() {
    const request = new Request(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${fixCityName(
        this.props.cityName
      )}&key=${config.apiKey}&inputtype=textquery&fields=photos`
    );
    const response = await fetch(request);
    const data = await response.json();
    const img_link = await `https://maps.googleapis.com/maps/api/place/photo?photoreference=${data.candidates[0].photos[0].photo_reference}&key=${config.apiKey}&maxwidth=320&maxheight=400`;
    this.setState({ img: img_link });
  }
  render() {
    const createReviewLink = `#cityReviews?cityName=${this.props.cityName}&placeId=${this.props.placeId}`;
    return (
      <>
        <div className="container">
          <img
            src={this.state.img}
            alt="City"
            style={{ width: "300px", height: "300px" }}
          />
          <div style={{ marginTop: "25px" }}>
            <PageTitle value={this.props.cityName} />
          </div>
          <div>
            <h2
              style={{
                marginTop: "25px",
                height: "50px",
                fontSize: "24px",
                color: "white",
              }}
            >
              Have you been here?
            </h2>
          </div>
          <div style={{ marginTop: "5px" }}>
            <ReviewForm
              placeId={this.props.placeId}
              onSubmit={this.addReview}
            />
          </div>
          <div>
            <a
              href={`#cityReviews?cityName=${this.props.cityName}&placeId=${this.props.placeId}`}
            >
              <button className="nav-btn">View All Reviews</button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
