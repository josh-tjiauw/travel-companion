import React from 'react';
import AppIcon from '../appicon';


export default function SearchPage(props) {
  return (
    <div className="container">
      <AppIcon />
      <form>
        <h1 className="hdr-text">Enter a City Name</h1>
        <input type="text" name="findCity" id="findCity"/>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
