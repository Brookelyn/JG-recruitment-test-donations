import React, { Component } from 'react';
import './css/app.css';

import Charity from './components/Charity';
import Donations from './components/Donations';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charityId: '183560'
    }

    this.updateView = this.updateView.bind(this);
  }

  loadCharityData(charityId) {
    const appId = '3c847946';
    const options = { headers: {"Content-Type": "application/json"} };

    this.setState({
      isCharityDataLoading: true
    });

    fetch(`https://api.justgiving.com/${appId}/v1/charity/${charityId}`, options)
    .then((res) => {
      if (res.status !== 200) {
        console.log('Oops! Looks like there\'s something wrong. Error code: ' +  
          res.status);  
        return;  
      }
      return res.json();
    }).then((res) => {
      this.setState({
        charity: res,
        isCharityDataLoading: false
      });
    }).catch((error) => {
      console.log('There has been an error');
      this.setState({
        error: true
      });
    });
  }

  loadDonationData(charityId) {
    const appId = '3c847946';
    const options = { headers: {"Content-Type": "application/json"} };

    this.setState({
      isDonationDataLoading: true
    });

    fetch(`https://api.justgiving.com/${appId}/v1/charity/${charityId}/donations`, options)
    .then((res) => {
      if (res.status !== 200) {
        console.log('Oops! Looks like there\'s something wrong. Error code: ' +  
          res.status);  
        return;  
      }
      return res.json();
    }).then((res) => {
      this.setState({
        donations: res,
        isDonationDataLoading: true
      });
    }).catch((error) => {
      console.log('There has been an error');
      this.setState({
        isDonationDataLoading: false
      });
    });
  }

  componentWillMount() {
    this.loadCharityData(this.state.charityId);
    this.loadDonationData(this.state.charityId);
  }


  updateView(input) {
    this.setState({
      charityId: input
    });
    this.loadCharityData(input);
    this.loadDonationData(input);
  }


  render() {
    return (
      <div className="App">
        {this.state.charity && this.state.donations &&
          <div className={`content d-o0-to-o100 ${this.state.isCharityDataLoading && this.state.isDonationDataLoading ? '' : '_show'}`}>
            <Charity {...this.state.charity} />
            <Donations {...this.state.donations} />
          </div>
        }

        <Footer updateView={this.updateView}/>
      </div>
    );
  }
}

export default App;
