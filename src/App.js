import React from 'react';
import './App.css';
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/foot.js'


class App extends React.Component{
  render() {
    return (
      <>
    <Header />
    <Main />
    <Footer />
    </>
    );
  }
 
}

export default App;
