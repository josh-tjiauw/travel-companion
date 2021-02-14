import React from "react";

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }

  componentDidMount() {
    this.getAllToVisits();
  }

  getAllReviews() {
    fetch(`/api/city/${this.props.placeId}/posts`)
      .then((res) => res.json())
      .then((data) => this.setState({ state: data }));
  }

  render() {
    const { postId, isCompleted } = this.props.reviews;
    const idAttr = `toVisit-city-${postId}`;
    return <div>{this.state.reviews[0]}</div>;
  }
}
