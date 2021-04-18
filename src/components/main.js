import React from 'react';
import HornedBeasts from "./HornedBeasts.js";
import Images from '../assets/data.json';
import { Card, CardColumns } from 'react-bootstrap';
import Forms from './forms.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: Images,
      numberofHorns: null,
    };
  }

  getFilteredList = (filteredArray) =>{
    this.setState({pics: filteredArray});
  } 

  render() {
    console.log(this.state);
    return (
      <>
        <Forms array={this.state.pics} getFilter={this.getFilteredList}/>
        {
          this.state.pics.map((pic, index) => {
            return (
              <Card key={index} onClick={() => { this.props.uiUpdate(pic) }}>
                <HornedBeasts img={pic.image_url} />
              </Card>
            )
          })
        }
      </>
    );
  }
}




export default Main;
