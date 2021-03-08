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
        <div>
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
              <div className="col-12 d-flex justify-content-center text">
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

                    <div className="text">
                      <i className='fas fa-user'></i>{`${rev.firstName} ${rev.lastName}'s Review`}
                      </div>
                    <div>
                      <i className='fas fa-comment-dots text'></i>
                      <span className="reviewText"> {rev.body}</span>
                    </div>
                  </div>

                  <div className='reviewRow'>
                    <span className="text">
                      <i className='fas fa-dice'></i>Activities:
                    </span>
                    <span className="reviewText">{rev.recActivities}</span>
                  </div>
                  <div className='reviewRow'>
                    <span className="text">
                      <i className='fas fa-utensils'></i>Food:
                    </span>
                    <span className='reviewText'> {rev.recRestaurants}</span>
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
