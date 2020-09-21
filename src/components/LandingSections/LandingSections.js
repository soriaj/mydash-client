import React, { Component } from 'react';

export default class LandingSections extends Component {
  render() {
    const { icon, name, description } = this.props
    return (
      <>
      <div className="landing-content-card">                
          {icon}
          <h3 className="landing-title">{name}</h3>
          <p>{description}</p>
      </div>
      <hr className='landing-hr-divider'></hr>
      </>
    )
  }
}