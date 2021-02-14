import React from "react";
import PageTitle from "../components/PageTitle";
import ReviewList from "../components/ReviewList";

export default class ViewCityReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  getAllReviews() {
    fetch(`/api/city/${this.props.placeId}/posts`)
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data }));
  }

  getUserName() {
    fetch(`/api/get`);
  }
  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    console.log(this.state.reviews);
    return (
      <div className="container">
        <div style={{ position: "relative", top: "5%" }}>
          <PageTitle value={`All Reviews for ${this.props.cityName}`} />
        </div>
        <div>
          {this.state.reviews.map((rev) => {
            return (
              <div
                key={rev.postId}
                style={{
                  color: "white",
                  border: "solid white",
                  borderRadius: "5px",
                  width: "300px",
                  margin: "10px auto",
                }}
              >
                <div
                  style={{ textDecoration: "underline" }}
                >{`${rev.firstName} ${rev.lastName}'s review`}</div>
                <div>{rev.body}</div>
                <div>{rev.recActivities}</div>
                <div>{rev.recRestaurants}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
