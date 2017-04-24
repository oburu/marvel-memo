import React, {Component} from 'react';

class Card extends Component{
  render(){
    return(
      <div className="card">
        <div className="card__back"><img alt="card" src={require('../images/card_bg.svg')}/></div>
        <div className="card__front"></div>
      </div>
    );
  }
}

export default Card;
