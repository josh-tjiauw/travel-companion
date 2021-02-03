import React from 'react';
import AppIcon from '../components/appicon';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userInput: null,
      cityResults: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    this.setState({ userInput: e.target.value })
  }

  async componentDidMount() {
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${this.state.userInput}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${config.apiKey}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({ cityResults:data, isLoading: false })
  }

  render() {
    return (
    <div className="container">
      <AppIcon />
      <form>
        <h1 className="hdr-text">Enter a City Name</h1>
        <input type="text" name="findCity" id="findCity"/>
        <button type="submit" onSubmit={this.handleSubmit}>SUBMIT</button>
      </form>
    </div>
  );
  }

}
