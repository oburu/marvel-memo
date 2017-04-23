import React, { Component } from 'react';
import Header from './header';
import HomePage from './home_page';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header/>
          <HomePage/>
      </div>
    );
  }
}

export default App;
