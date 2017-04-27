import React, {Component} from 'react';
import classnames from 'classnames';

class Card extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.flipped) {
      this.props.checkMatch(this.props.value, this.props.id);
    }
  }

  render(){
    var classes = classnames(
      'card',
      {'card flip': this.props.flipped},
      {'card matched': this.props.matched}
    );
    return(
      <div className="flip-container" onClick={this.handleClick}>
        <div className={classes}>
          <div className="card__back"><img alt="card_back" src={require('../images/card_bg.svg')}/></div>
          <div className="card__front">
            <img alt="card_front" src={this.props.img}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
