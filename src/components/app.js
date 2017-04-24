import React, { Component } from 'react';
import Header from './header';
import HomePage from './home_page';

const HOME_PAGE_DOWN = 'home-page home-page--menu-down';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showHomePage:HOME_PAGE_DOWN
    }

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(){
    let showHomePage = this.state.showHomePage === HOME_PAGE_DOWN ? 'home-page' : HOME_PAGE_DOWN;
    this.setState({
      showHomePage
    });
  }

  render() {
    return (
      <div className="app">
          <Header/>
          <HomePage homePageStyles={this.state.showHomePage} onStartClick={this.showMenu}/>
      </div>
    );
  }
}

export default App;
