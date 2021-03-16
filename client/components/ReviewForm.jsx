import React from 'react';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      recRestaurants: '',
      recActivities: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'body') {
      this.setState({ body: e.target.value });
    } else if (e.target.id === 'recRestaurants') {
      this.setState({ recRestaurants: e.target.value });
    } else if (e.target.id === 'recActivities') {
      this.setState({ recActivities: e.target.value });
    } else return null;
  }

  handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      body: this.state.body,
      recRestaurants: this.state.recRestaurants,
      recActivities: this.state.recActivities,
      placeId: this.props.placeId
    };
    this.props.onSubmit(newReview);
    this.setState({ body: '', recRestaurants: '', recActivities: '', submitted: true });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='body' className='form-text'>
              Enter your review here!
            </label>
            <br />
            <textarea
              required
              id='body'
              rows='4'
              cols='40'
              type='text'
              value={this.state.body}
              onChange={this.handleChange}
              placeholder='Enter Review'
            />
          </div>

          <div>
            <label htmlFor='recActivities' className='form-text'>
              Any recommended activities?
            </label>
            <br />
            <input
              required
              className='cityDescInput'
              type='text'
              id='recActivities'
              value={this.state.recActivities}
              onChange={this.handleChange}
              placeholder='Recommended activities'
            />
          </div>

          <div>
            <label htmlFor='recRestaurants' className='form-text'>
              Any recommended restaurants?
            </label>
            <br />
            <input
              required
              className='cityDescInput'
              type='text'
              id='recRestaurants'
              value={this.state.recRestaurants}
              onChange={this.handleChange}
              placeholder='Recommended restaurants'
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {this.state.submitted === true
              ? (<button className='cityDesc-btn submitted'>
              Your Review was Submitted!
            </button>)
              : <button className='cityDesc-btn' type='submit'>
              Submit
            </button>}
          </div>
        </form>
      </div>
    );
  }
}
