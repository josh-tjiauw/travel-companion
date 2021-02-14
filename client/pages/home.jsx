import React from "react";

export default function Home(props) {
  const style = { display: "flex", justifyContent: "center", color: "black" };
  return (
    <div className="container">
      <h1 className="hdr-text" style={{ position: "relative", top: "10%" }}>
        Travel Companion
      </h1>
      <a href="#search" className="nav-btn" style={style}>
        SEARCH A CITY
      </a>
      <a href="#tovisit" className="nav-btn" style={style}>
        VISIT WISHLIST
      </a>
    </div>
  );
}
