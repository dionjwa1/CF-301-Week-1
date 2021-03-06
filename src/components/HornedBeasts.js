import React from 'react';
import SelectedBeast from './SelectedBeast.js';

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

handleClick = () => {
  this.setState({clicks:this.state.clicks+1});
}

  render(){
  //  console.log(this.props);
    return (
      <>
      <SelectedBeast
      show={this.state.enlargeSelectedBeast}
      handleCloseBeast={this.handleCloseBeast}
      >
        
      </SelectedBeast>
      <h1>{this.props.title}</h1>
      <img onClick={this.handleClick} src={this.props.img} title={this.props.title} alt="Test" ></img>
      <p>{this.props.description}</p>
      <p>❣ {this.state.clicks}</p>
      </>
    );
  }
  
}

export default HornedBeasts;