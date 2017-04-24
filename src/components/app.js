import React, { Component } from 'react';
import Header from './header';
import HomePage from './home_page';
import GamePage from './game_page';

const HOME_PAGE_DOWN = 'home-page home-page--menu-down';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showHomePage:HOME_PAGE_DOWN,
      startGame: false
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(){
    let showHomePage = this.state.showHomePage === HOME_PAGE_DOWN ? 'home-page' : HOME_PAGE_DOWN;
    this.setState({
      startGame: !this.state.startGame,
      showHomePage
    });
  }

  render() {
    return (
      <div className="app">
          <Header/>
          <HomePage homePageStyles={this.state.showHomePage} onStartClick={this.showMenu}/>
          <GamePage onStartClick={this.showMenu} startGame={this.state.startGame}/>
      </div>
    );
  }
}
export default App;
