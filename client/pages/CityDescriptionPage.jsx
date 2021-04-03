import React, { useEffect } from 'react';
import AppIcon from '../components/appicon';
import ReviewForm from '../components/ReviewForm';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';

export default function CityDescriptionPage(props) {
  const [cityDesc, setCityDesc] = React.useState({
    img: null,
    isLoading: true,
    error: false,
    errorMessage: null,
    reviews: []
  });

  useEffect(() => {
    axios.get(`/api/getImageData/${props.cityName}`)
      .then(res => {
        setCityDesc({ img: res.data.imageData, isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });

  });

  const addReview = review => {
    fetch(`/api/city/${props.placeId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => {
        if (!res.ok) {
          setCityDesc({ error: true, errorMessage: res.statusText });
          return null;
        }
        res.json();
      })
      .then(data => {
        setCityDesc({ reviews: [data, ...cityDesc.reviews] });
      });
  };

  return (
    cityDesc.isLoading === true
      ? (<div className='col-12 d-flex justify-content-center'>
              <ReactBootstrap.Spinner animation='border' />
              Loading
            </div>)
      : (<>
        <div className='container-fluid'>
          <div style={{ position: 'absolute' }}>
            <AppIcon />
          </div>
          <div className='row'>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img
                src={cityDesc.img}
                alt={`Photograph of ${props.cityName}`}
                style={{ width: '100%', maxWidth: '768px', height: 'auto' }}
              />
            </div>
          </div>

          <div
            className='row'
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <div className='col-12' style={{ margin: '5%' }}>
              <h1 className='desc-hdr'>{props.cityName}</h1>
            </div>

            <div className='col-12' style={{ marginBottom: '5%' }}>
              <h1 className='desc-hdr'>Have you been here?</h1>
            </div>
          </div>

          <div
            className='row'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ReviewForm
                placeId={props.placeId}
                onSubmit={addReview}
              />
            </div>
          </div>

          <div
            className='row'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div>
              {cityDesc.error === true ? (`${cityDesc.errorMessage}`) : (null)}
              <button
                className='cityDesc-btn'
                onClick={e => {
                  e.preventDefault();
                  window.location.href = `#cityReviews?cityName=${props.cityName}&placeId=${props.placeId}`;
                }}
              >
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </>)
  );
}
