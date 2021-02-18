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
      },
      row: {
        marginTop: '20px'
      },
      form: { width: '245px', height: '325px' }
    };
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={this.handleSubmit} style={style.form}>
          <div>
            <label htmlFor='body' style={style.text}>
              Enter your review here!
            </label>
            <textarea
              rows='3'
              cols='33'
              required
              type='text'
              id='body'
              value={this.state.body}
              onChange={this.handleChange}
              placeholder='Enter Review'
            />
          </div>

          <div style={style.row}>
            <label htmlFor='recRestaurants' style={style.text}>
              Any recommended restaurants?
            </label>
            <input
              type='text'
              id='recRestaurants'
              value={this.state.recRestaurants}
              onChange={this.handleChange}
              placeholder='Recommended restaurants'
            />
          </div>

          <div style={style.row}>
            <label htmlFor='recActivities' style={style.text}>
              Any recommended activities?
            </label>
            <input
              type='text'
              id='recActivities'
              value={this.state.recActivities}
              onChange={this.handleChange}
              placeholder='Recommended activities'
            />
          </div>

          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
