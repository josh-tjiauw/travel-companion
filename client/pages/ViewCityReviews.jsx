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
    return (
      <div className="container">
        <div style={{ position: "absolute", top: "10%", left: "5%" }}>
          <PageTitle value={`All Reviews for ${this.props.cityName}`} />
        </div>
        <div style={{ position: "absolute", top: "25%", color: "white" }}>
          {this.state.reviews.length == 0 ? (
            <div>
              <h5>There are no reviews yet, be the first one to review!</h5>
              <a
                href={`#city?cityName=${this.props.cityName}&placeId=${this.props.placeId}`}
              >
                <button
                  className="btn btn-primary"
                  style={{ position: "absolute", bottom: "-200%", left: "30%" }}
                >
                  Submit a Review!
                </button>
              </a>
            </div>
          ) : (
            this.state.reviews.map((rev) => {
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
                  <div>
                    <i className="fas fa-dice"></i>
                    Activities: {rev.recActivities}
                  </div>
                  <div>
                    <i className="fas fa-utensils"></i>
                    Food: {rev.recRestaurants}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
