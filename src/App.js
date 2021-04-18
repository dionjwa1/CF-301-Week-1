import React from 'react';
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import SelectedBeast from './components/SelectedBeast.js';
import Footer from './components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardColumns, Card, Navbar } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornedBeasts: null,
      showModal: false
    };
  }

uiUpdate = (hornedBeast) =>{
  console.log(hornedBeast);
  this.setState({hornedBeast,showModal:true});
} 
  
onHide = () => {this.setState({showModal:false});
console.log("onHide");
}

  render() {
    return (
      <>

      {this.state.showModal && <SelectedBeast title={this.state.hornedBeast.title} description={this.state.hornedBeast.description} imgUrl={this.state.hornedBeast.image_url} showModal={this.state.showModal} onHide={this.onHide}/> }

        <Header />
        <Main uiUpdate= {this.uiUpdate}/>
        <Footer />

        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
    </Navbar.Brand>
      </Navbar>
    </>
    );
  }

}

export default App;
