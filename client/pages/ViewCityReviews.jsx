import React from "react";
import PageTitle from "../components/PageTitle";

export default class ViewCityReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.addReview = this.addReview.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    fetch(`/api/city/${this.props.placeId}/posts`)
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data }));
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

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div style={{ position: "absolute", top: "15%", left: "5%" }}>
          <PageTitle value={`All Reviews for ${this.props.cityName}`} />
        </div>
      </div>
    );
  }
}
