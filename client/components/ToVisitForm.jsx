import React from "react";

export default class ToVisitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ cityName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newToVisit = {
      cityName: this.state.cityName,
      isCompleted: false,
    };
    this.props.onSubmit(newToVisit);
    this.setState({ cityName: "" });
  }

  render() {
    const value = this.state.cityName;
    return (
      <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
        <input
          required
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder="Enter a city name"
          style={{ width: "100%" }}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
