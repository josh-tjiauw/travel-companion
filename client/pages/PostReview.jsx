import React from "react";
import axios from "axios";

export default class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      placeId: null,
      description: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { userId, placeId, description } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="placeId"
              value={placeId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
