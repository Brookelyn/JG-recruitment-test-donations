import React, { Component } from 'react';

class Charity extends Component {

  render() {
    console.log(this.props)
    return (
      <header>
        <div className="header-wrapper">
          <figure className="img-wrapper">
            <img src={this.props.logoAbsoluteUrl} alt={this.props.name} />
          </figure>
          <a href={this.props.profilePageUrl}>
            <h1 className="charity-name">{this.props.name}</h1>
            <p>{this.props.description}</p>
          </a>
        </div>
      </header>
    );
  }
}

export default Charity;