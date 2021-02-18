import React from 'react';
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
    const request = new Request(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${this.props.cityName}&key=${config.apiKey}&inputtype=textquery&fields=photos`
    );
    const response = await fetch(request);
    const data = await response.json();
    const imgLink = await `https://maps.googleapis.com/maps/api/place/photo?photoreference=${data.candidates[0].photos[0].photo_reference}&key=${config.apiKey}&maxwidth=320&maxheight=400`;
    this.setState({ img: imgLink });
  }

  render() {
    return (
      <>
        <div className='container'>
          <img src={this.state.img} alt='City' style={{ width: '100%' }} />
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
            <a
              href={`#cityReviews?cityName=${this.props.cityName}&placeId=${this.props.placeId}`}
            >
              <button className='cityDesc-btn'>View All Reviews</button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
