import React from 'react';
import AppIcon from '../components/appicon';
import ReviewForm from '../components/ReviewForm';
import config from '../config.json';

export default class CityDescriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      reviews: []
    };
    this.addReview = this.addReview.bind(this);
  }

  addReview(review) {
    fetch(`/api/city/${this.props.placeId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ reviews: [data, ...this.state.reviews] });
      });
  }

  async componentDidMount() {
    const response = await fetch(`/api/getImageData/${this.props.cityName}`);
    const data = await response.json();
    const imgLink = await `https://maps.googleapis.com/maps/api/place/photo?photoreference=${data.imageData}&key=${config.apiKey}&maxwidth=768`;
    this.setState({ img: imgLink });
  }

  render() {
    return (
      <>
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
                src={this.state.img}
                alt='City'
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
              <h1 className='desc-hdr'>{this.props.cityName}</h1>
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
                placeId={this.props.placeId}
                onSubmit={this.addReview}
              />
            </div>
          </div>

          <div
            className='row'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div>
              <button
                className='cityDesc-btn'
                onClick={e => {
                  e.preventDefault();
                  window.location.href = `#cityReviews?cityName=${this.props.cityName}&placeId=${this.props.placeId}`;
                }}
              >
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
