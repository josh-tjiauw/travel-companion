import React from 'react';
import AppIcon from '../components/appicon';
import PageTitle from '../components/PageTitle';
import ToVisitForm from '../components/ToVisitForm';
import ToVisitList from '../components/ToVisitList';
import * as ReactBootstrap from 'react-bootstrap';

export default class ToVisitPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toVisit: [],
      isLoading: true
    };
    this.addToVisit = this.addToVisit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllToVisits();
  }

  getAllToVisits() {
    fetch('/api/toVisit')
      .then(res => res.json())
      .then(data => this.setState({ toVisit: data, isLoading: false }));
  }

  addToVisit(newToVisit) {
    fetch('/api/toVisit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToVisit)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ toVisit: [data, ...this.state.toVisit] });
      });
  }

  toggleCompleted(toVisitId) {
    const match = this.state.toVisit.find(
      element => element.toVisitId === toVisitId
    );
    match.isCompleted = !match.isCompleted;
    fetch(`/api/toVisit/${toVisitId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(match)
    })
      .then(res => res.json())
      .then(data => {
        const map = this.state.toVisit.map(index => {
          if (index.toVisitId === toVisitId) {
            return data;
          } else return index;
        });
        this.setState({ toVisit: map });
      });
  }

  render() {
    return (
      <div className='container-fluid'>
        <AppIcon />
        <div>
          <PageTitle value='Your Future Visits' />
        </div>
        <div className="row">
          <div className='col-12 d-flex justify-content-center visitInputContainer' style={{ display: 'flex', justifyContent: 'center' }}>
          <ToVisitForm onSubmit={this.addToVisit} />
        </div>
        </div>
        <div className="row">
          <div className='col-12 d-flex justify-content-center'>
          {this.state.isLoading === true
            ? (
            <div className='col-12 d-flex justify-content-center'>
              <ReactBootstrap.Spinner animation='border' />
              Loading
            </div>
              )
            : (
            <ToVisitList
            toVisit={this.state.toVisit}
            toggleCompleted={this.toggleCompleted}
          />
              )}
          </div>
        </div>
      </div>
    );
  }
}
