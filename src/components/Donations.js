import React, { Component } from 'react';

import Donation from './Donation';


class Donations extends Component {
  render() {
    return (
      <section className="donations">
        <h2>The latest donations</h2>
        <div className="donations-list">
          {this.props.donations.map((donation, i) => {
            return (
              <Donation key={i} {...donation} />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Donations;