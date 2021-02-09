import React from "react";

export default class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      placeId: null,
      description: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

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
        </form>
      </div>
    );
  }
}
