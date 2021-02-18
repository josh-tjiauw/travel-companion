import React from 'react';

export default function Home(props) {
  return (
    <div className='container'>
      <h1 className='hdr-text'>Travel Companion</h1>
      <a href='#search' className='nav-btn'>
        SEARCH A CITY
      </a>
      <a href='#tovisit' className='nav-btn'>
        VISIT WISHLIST
      </a>
    </div>
  );
}
