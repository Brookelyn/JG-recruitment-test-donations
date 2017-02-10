import React, { Component } from 'react';
import './css/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityId: '183560'
    }
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


  render() {

    return (
      <div className="App">
        {this.state.charity && this.state.donations &&
          <h1>All data arrived</h1>
        }
      </div>
    );
  }
}

export default App;
