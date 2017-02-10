import React, { Component } from 'react';

import Donation from './Donation';


class Donations extends Component {
  render() {
    console.log(this.props)
    return (
      <section className="donations">
        {this.props.donations.map((donation, i) => {
          return (
            <Donation key={i} {...donation} />
          );
        })}
      </section>
    );
  }
}

export default Donations;