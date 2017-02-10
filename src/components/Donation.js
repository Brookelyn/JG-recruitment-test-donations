import React, { Component } from 'react';

class Donation extends Component {


  render() {
    return (
      <article className="donation">
        <figure className="img-wrapper">
          <img 
            className="avatar"
            src={this.props.imageUrl}
            alt={this.props.donorDisplayName}
          />
        </figure>
        <div className="donor-details">
          <h1>{this.props.donorDisplayName}</h1>
          <p>{this.props.amount ? `£${this.props.amount}` : null}</p>
          <p>{this.props.message}</p>
        </div>
      </article>
    );
  }
}

export default Donation;