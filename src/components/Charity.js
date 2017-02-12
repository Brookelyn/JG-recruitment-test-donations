import React, { Component } from 'react';

class Charity extends Component {

  render() {
    return (
      <header>
        <div className="header-wrapper">
          <div className="img-wrapper">
            <img src={this.props.logoAbsoluteUrl} alt={this.props.name} />
          </div>
          <a href={this.props.profilePageUrl}
            className="charity-details">
            <h1 className="charity-name">{this.props.name}</h1>
            <p>{this.props.description}</p>
          </a>
        </div>
      </header>
    );
  }
}

export default Charity;