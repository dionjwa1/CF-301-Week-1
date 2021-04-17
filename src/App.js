import React from 'react';
import './App.css';
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardColumns, Card, Navbar } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
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
