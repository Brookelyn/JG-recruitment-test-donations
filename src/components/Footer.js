import React, { Component } from 'react';

class Donation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    charities: [
      {
        id: 183092,
        logo: 'http://images.justgiving.com/image/8d026099-7e28-4b39-ae86-330d7e471916.gif'
      },
      {
        id: 2357,
        logo: 'http://images.justgiving.com/image/b410179a-2042-4c6b-903b-df106b48fc3c.jpg'
      },
      {
        id: 2116,
        logo: 'http://images.justgiving.com/image/8c249c61-7994-4afe-8af0-d93c78a0bb5d.jpg'
      },
      {
        id: 183560,
        logo: 'http://images.justgiving.com/image/b5ba2882-3fda-41af-afd9-6a8a98a09e81.png'
      },
      {
        id: 13441,
        logo: 'http://images.justgiving.com/image/23cc9334-f803-43cb-897a-ace65b7d98d7.PNG'
      },
      {
        id: 18570,
        logo: 'http://images.justgiving.com/image/a2d03110-67aa-43da-aaec-56f842e7dc3e.png'
      }
    ]
  };
  }
  

  render() {
    return (
      <footer>
        {this.state.charities.map((charity, i) => {
          return (
            <figure className="footer-link" key={i}>
              <div className="img-wrapper">
                <img src={charity.logo} alt={charity.id} />
              </div>
            </figure>
          )
        })}
      </footer>
    );
  }
}

export default Donation;