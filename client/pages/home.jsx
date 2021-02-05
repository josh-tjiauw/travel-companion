import React from "react";

export default function Home(props) {
  return (
    <div className="container">
      <h1 className="hdr-text">Travel Companion</h1>
      <a href="#search">
        <button className="nav-btn">SEARCH A CITY</button>
      </a>
      <a href="#tovisit">
        <button className="nav-btn">VISIT WISHLIST</button>
      </a>
    </div>
  );
}
