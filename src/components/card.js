import React, {Component} from 'react';

const CARD_STYLES = "card";
class Card extends Component{
  constructor(props){
    super(props);

    this.state = {
      cardStyles: this.props.cardStyle,
      paired: false
    }
    this.flip = this.flip.bind(this);
  }

  flip(e){
    if(!this.state.paired){
      this.setState({
        cardStyles: this.state.cardStyles ===  CARD_STYLES ? 'card flip' : CARD_STYLES
      });
      this.props.turn(this.props.comic);
    }
  }
  render(){
    let cardStyles = this.state.cardStyles;
    return(
      <div className="flip-container" onClick={this.flip}>
        <div className={cardStyles}>
          <div className="card__back"><img alt="card_back" src={require('../images/card_bg.svg')}/></div>
          <div className="card__front">
            <img alt="card_front" src={this.props.comic.thumbnail.path+"."+this.props.comic.thumbnail.extension}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
