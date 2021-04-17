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
      hornedBeasts: null
    };
  }
uiUpdate = (hornedBeast) =>{
  console.log(hornedBeast);
  this.setState({hornedBeast});
} 

  render() {
    return (
      <>

      {this.state.hornedBeast && <SelectedBeast /> }

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
      React Bootstrap
    </Navbar.Brand>
      </Navbar>
    </>
    );
  }

}

export default App;
