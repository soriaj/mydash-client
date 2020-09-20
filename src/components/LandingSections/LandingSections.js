import React, { Component } from 'react';

export default class LandingSections extends Component {
  render() {
    const { name, src, alt, description } = this.props
    return (
      <>
      <div className="landing-container">                
          <div className="landing-thumb"><img className='img-holder' src={require(`../../img/${src.toLowerCase()}.jpeg`)} alt={alt} /></div>
          <div className="landing-content">
              <h3 className="landing-title">{name}</h3>
              <p>{description}</p>
          </div>
      </div>
      <hr className='landing-hr-divider'></hr>
      </>
    )
  }
}