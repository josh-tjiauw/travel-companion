import React from "react";
import PageTitle from "../components/PageTitle";

export default function CityDescription(props) {
  return (
    <div className="container">
      <div>
        <PageTitle value={props.name} />
      </div>
      <h2 className="text" style={{ height: "50px" }}>
        Have you been here?
      </h2>
      <button className="nav-btn">Create a Review!</button>
      <button className="nav-btn">View Other Reviews</button>
    </div>
  );
}
