import React from 'react';

export default function Home(props) {
  return (
    <div className='container-fluid home'>
      <div className='home-title'>
        <h1 className='hdr-text'>Travel Companion</h1>
      </div>

      <div className="home-btn">
        <div>
          <button
            className='nav-btn'
            onClick={e => {
              e.preventDefault();
              window.location.href = '#search';
            }}
          >
            Search a City
          </button>
        </div>

      <div>
        <button
          className='nav-btn'
          onClick={e => {
            e.preventDefault();
            window.location.href = '#tovisit';
          }}
        >
          Visit Wishlist
        </button>
      </div>

      <div>
        <button className="nav-btn"
        onClick={e => {
          e.preventDefault();
          window.location.href = '#sign-in';
        }}>
          Sign In
        </button>
      </div>

      <div>
        <button className="nav-btn"
        onClick={e => {
          e.preventDefault();
          window.location.href = '#signup';
        }}>
          Register
        </button>
        </div>
      </div>
    </div>
  );
}
