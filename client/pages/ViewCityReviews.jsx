import React from 'react';
import AppIcon from '../components/appicon';
import PageTitle from '../components/PageTitle';
import * as ReactBootstrap from 'react-bootstrap';

export default class ViewCityReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isLoading: true
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  getAllReviews() {
    this.setState({ isLoading: true });
    fetch(`/api/city/${this.props.placeId}/posts`)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data, isLoading: false }));
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
          {this.state.isLoading === true
            ? (<div className='col-12 d-flex justify-content-center'>
              <ReactBootstrap.Spinner animation='border' />
              Loading
            </div>)
            : (
                this.state.reviews.length === 0
                  ? (
            <div className='row'
              style={{
                marginTop: '50px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <div className="col-12 d-flex justify-content-center text">There are no reviews yet.<br/>
                Be the first one to review!
              </div>
              <div className="col-12 d-flex justify-content-center" style={{ marginTop: '40px' }}>
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
                      <i className='fas fa-user'></i>{`${rev.username} (${rev.firstName} ${rev.lastName})`}
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
                    <span className="reviewText"> {rev.recActivities}</span>
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
                    )
              )}
        </div>
      </div>
    );
  }
}

/* {this.state.reviews.length === 0
            ? (
            <div className='row'
              style={{
                marginTop: '50px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <div className="col-12 d-flex justify-content-center text">There are no reviews yet.<br/>
                Be the first one to review!
              </div>
              <div className="col-12 d-flex justify-content-center" style={{ marginTop: '40px' }}>
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
                    <span className="reviewText"> {rev.recActivities}</span>
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
*/
