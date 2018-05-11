import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage.js';

import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
        Test
        <Footer />
      </div>
    );
  }
}

export default App;
