import React, {Component} from 'react';

class InfoMessage extends Component{
  render(){
    return(
      <div className="game-page-top">
        <div className="container">
          <div className="bubble-side">
            <h1 className="bubble__title bubble-side__title">Hello there!</h1>
          </div>
          <img alt="heroe-img" className="bubble-side-heroe-img" src={require('../images/wolverine-head.svg')}/>
        </div>
      </div>
    );
  }
}

export default InfoMessage;
