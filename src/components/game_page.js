import React, {Component} from 'react';
import Card from './card';

const COMICS = [
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'},
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'},
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'}
];

class GamePage extends Component {
  constructor(props){
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){
    this.props.onStartClick();
  }

  render(){
    let renderCards = COMICS.map((item, key) => {
      return (
        <Card key={key}/>
      );
    });
    return(
      <div className="game-page">
        <div className="game-page-top">
          <div className="container">
            <div className="bubble-side">
              <h1 className="bubble__title bubble-side__title">Hello there!</h1>
            </div>
            <img alt="heroe-img" className="bubble-side-heroe-img" src={require('../images/wolverine-head.svg')}/>
          </div>
        </div>
        <div className="game-page-middle">
          <div className="container">
            <div className="counter">
              <h2>PLAYER 1 - POINTS: 0</h2>
            </div>
            <div className="cards">
              {renderCards}
            </div>
            <div className="buttons-section">
              <button className="btn btn--main" onClick={this.onClickHandler}>quit game</button>
            </div>
          </div>
        </div>
        <div className="home-page-footer">
          <div className="container">
            <p className="home-page-footer--p">Rebus.io 2017 ©</p>
          </div>
        </div>
      </div>
    );
  }
}
export default GamePage;
