import React from "react";
import PageTitle from "../components/PageTitle";
import ToVisitForm from "../components/ToVisitForm";
import ToVisitList from "../components/ToVisitList";

export default class ToVisitPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toVisit: [],
    };
    this.addToVisit = this.addToVisit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllToVisits();
  }

  getAllToVisits() {
    fetch("/api/toVisit")
      .then((res) => res.json())
      .then((data) => this.setState({ toVisit: data }));
  }

  addToVisit(newToVisit) {
    fetch("/api/toVisit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToVisit),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ toVisit: [data, ...this.state.toVisit] });
      });
  }

  toggleCompleted(toVisitId) {
    let match = this.state.toVisit.find(
      (element) => element.toVisitId === toVisitId
    );
    match.isCompleted = !match.isCompleted;
    fetch(`/api/toVisit/${toVisitId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match),
    })
      .then((res) => res.json())
      .then((data) => {
        const map = this.state.toVisit.map((index) => {
          if (index.toVisitId === toVisitId) {
            return data;
          } else return index;
        });
        this.setState({ toVisit: map });
      });
  }

  render() {
    return (
      <div className="container">
        <PageTitle value="Your Future Visits" />
        <div
          style={{
            position: "absolute",
            top: "20%",
            width: "95vw",
            left: "15px",
            margin: "0px auto",
          }}
        >
          <ToVisitForm onSubmit={this.addToVisit} />
        </div>
        <div style={{ width: "315px" }}>
          <ToVisitList
            toVisit={this.state.toVisit}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
      </div>
    );
  }
}
