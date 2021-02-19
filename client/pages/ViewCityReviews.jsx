import React from 'react';
import AppIcon from '../components/appicon';
import PageTitle from '../components/PageTitle';

export default class ViewCityReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  getAllReviews() {
    fetch(`/api/city/${this.props.placeId}/posts`)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data }));
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    return (
      <div className='container-fluid'>
        <AppIcon />
        <div>
          <PageTitle value='All Reviews for' />
          <PageTitle value={`${this.props.cityName}`} />
        </div>
        <div className='text'>
          {this.state.reviews.length === 0
            ? (
            <div className='row'
              style={{
                marginTop: '50px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <div className="col-12 d-flex justify-content-center">
                <h5>There are no reviews yet, be the first one to review!</h5>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button
                className='btn btn-primary'
                onClick={e => {
                  e.preventDefault();
                  window.location.href = `#city?cityName=${this.props.cityName}&placeId=${this.props.placeId}`;
                }}
              >
                Submit a Review!
              </button>
              </div>
            </div>
              )
            : (
                this.state.reviews.map(rev => {
                  return (
                <div key={rev.postId} className='reviewContainer'>
                  <div className='reviewRow'>
                    <i className='fas fa-user'></i>
                    {`${rev.firstName} ${rev.lastName}'s review:`}
                    <div>
                      <i className='fas fa-comment-dots'></i>
                      {rev.body}
                    </div>
                  </div>

                  <div className='reviewRow'>
                    <i className='fas fa-dice'></i>
                    Activities: {rev.recActivities}
                  </div>
                  <div className='reviewRow'>
                    <i className='fas fa-utensils'></i>
                    Food: {rev.recRestaurants}
                  </div>
                </div>
                  );
                })
              )}
        </div>
      </div>
    );
  }
}
