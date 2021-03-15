import React from 'react';
import AppIcon from '../components/appicon';
import PageTitle from '../components/PageTitle';

export default function NotFound(props) {
  return (
    <div className="container-fluid">
      <AppIcon />
      <div className="not-found">
        <h1 className='text d-flex'>Sorry! That City Name is Invalid.</h1>
        <button className='btn-primary' onClick={e => {
          e.preventDefault();
          window.location.href = '#search';
        }}>Search Another City</button>
      </div>
    </div>
  );
}
