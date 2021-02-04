import React from "react";
import AppIcon from "../components/appicon";
import PageTitle from "../components/PageTitle";

export default function CityDescription() {
  return (
    <div className="container">
      <AppIcon />
      <PageTitle value="City Name" />
      <img src="" alt="" />
      <h2 className="text">Have you been here?</h2>
      <button className="nav-btn">Create a Review!</button>
      <h2 className="text">See Other Reviews</h2>
      <button className="nav-btn">All Reviews</button>
    </div>
  );
}
