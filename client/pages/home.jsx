import React from 'react';

export default function Home(props) {
  return (
    <div className='container'>
      <div style={{ marginBottom: '33%' }}>
        <h1 className='hdr-text'>Travel Companion</h1>
      </div>
      <div style={{ marginBottom: '33%' }}>
        <a href='#search' className='nav-btn'>
          SEARCH A CITY
        </a>
      </div>
      <div>
        <a href='#tovisit' className='nav-btn'>
          VISIT WISHLIST
        </a>
      </div>
    </div>
  );
}
