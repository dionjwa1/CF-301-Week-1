import React from 'react';
import HornedBeasts from "./HornedBeasts.js"
import Images from '../assets/data.json'
import { Card, CardColumns } from 'react-bootstrap';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: Images
    };
  }

  render() {
    // console.log(this.state.pics[0]);
    return (
      <>

        {
          this.state.pics.map((pic) => {
            return (
              <Card onClick={() => { this.props.uiUpdate(pic)}}>
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
