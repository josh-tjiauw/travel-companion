import React from 'react';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      recRestaurants: '',
      recActivities: ''
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
    this.setState({ body: '', recRestaurants: '', recActivities: '' });
  }

  render() {
    const style = {
      text: {
        color: 'white',
        fontSize: '16px'
      }
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='body' style={style.text}>
              Enter your review here!
            </label>
            <br />
            <textarea
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
            <label htmlFor='recRestaurants' style={style.text}>
              Any recommended restaurants?
            </label>
            <br />
            <input
              className='cityDescInput'
              type='text'
              id='recRestaurants'
              value={this.state.recRestaurants}
              onChange={this.handleChange}
              placeholder='Recommended restaurants'
            />
          </div>

          <div>
            <label htmlFor='recActivities' style={style.text}>
              Any recommended activities?
            </label>
            <br />
            <input
              className='cityDescInput'
              type='text'
              id='recActivities'
              value={this.state.recActivities}
              onChange={this.handleChange}
              placeholder='Recommended activities'
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='form-btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
