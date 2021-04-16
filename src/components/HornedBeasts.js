import React from 'react';

class HornedBeasts extends React.Component {
  render(){
   
    return (
      <>
      <h1>{this.props.title}</h1>
      <img src={this.props.img} title={this.props.title} alt="Test" ></img>
      <p>{this.props.description}</p>
      </>
    );
  }
  
}

export default HornedBeasts;