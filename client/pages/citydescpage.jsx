import React from "react";
import AppIcon from "../components/appicon";
import PageTitle from "../components/PageTitle";

export default function CityDescription() {
  const style = { position: "relative", left: "10%" };
  return (
    <div className="container">
      <AppIcon />
      <div style={{ position: "relative", top: "10%", left: "10%" }}>
        <PageTitle value="City Name" />
      </div>
      <img src="" alt="" />
      <h2 className="text" style={style}>
        Have you been here?
      </h2>
      <button className="nav-btn">Create a Review!</button>
      <h2 className="text" style={style}>
        See Other Reviews
      </h2>
      <button className="nav-btn">All Reviews</button>
    </div>
  );
}
