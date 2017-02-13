import React, { Component } from 'react';
import './css/app.css';

import Charity from './components/Charity';
import Donations from './components/Donations';
import Footer from './components/Footer';

import { getCharityData, getDonationData } from './dataService';


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

    getCharityData(charityId).then(res => {
      this.setState({
        charity: res,
        isCharityDataLoading: false
      });
    });
  }

  loadDonationData(charityId) {
    const appId = '3c847946';
    const options = { headers: {"Content-Type": "application/json"} };

    this.setState({
      isDonationDataLoading: true
    });

    getDonationData(charityId).then((res) => {
      this.setState({
        donations: res,
        isDonationDataLoading: true
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
