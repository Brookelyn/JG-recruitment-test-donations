import React, { Component } from 'react';
import './css/app.css';

import Charity from './components/Charity';
import Donations from './components/Donations';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charityId: '18570'
    }

    this.updateView = this.updateView.bind(this);
  }

  componentWillMount() {
    const appId = '3c847946';
    const options = { headers: {"Content-Type": "application/json"} };

    fetch(`https://api.justgiving.com/${appId}/v1/charity/${this.state.charityId}`, options)
    .then((res) => {
      if (res.status !== 200) {
        console.log('Oops! Looks like there\'s something wrong. Error code: ' +  
          res.status);  
        return;  
      }
      return res.json();
    }).then((res) => {
      this.setState({
        charity: res
      });
    }).catch((error) => {
      this.setState({
        error: true
      });
    });

    fetch(`https://api.justgiving.com/${appId}/v1/charity/${this.state.charityId}/donations`, options)
    .then((res) => {
      if (res.status !== 200) {
        console.log('Oops! Looks like there\'s something wrong. Error code: ' +  
          res.status);  
        return;  
      }
      return res.json();
    }).then((res) => {
      this.setState({
        donations: res
      });
    }).catch((error) => {
      this.setState({
        loading: false
      });
    });
  }

  componentWillReceiveProps() {

  }

  updateView(input) {
    // console.log(input);
    this.setState({
      charityId: input
    });
  }


  render() {
    console.log(this.state.charityId);
    return (
      <div className="App">
        {this.state.charity && this.state.donations &&
          <div>
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
