import React from 'react';
import AppIcon from '../components/appicon';
import PageTitle from '../components/PageTitle';
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
          <AppIcon />
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={this.state.img}
              alt='City'
              style={{ width: '100%', maxWidth: '768px', height: 'auto' }}
            />
          </div>
          <div>
            <PageTitle value={this.props.cityName} />
            <PageTitle value='Have you been here?' />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ReviewForm
              placeId={this.props.placeId}
              onSubmit={this.addReview}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
      </>
    );
  }
}
