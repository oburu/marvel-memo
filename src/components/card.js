import React, {Component} from 'react';

class Card extends Component{
  constructor(props){
    super(props);

    this.state = {
      paired: false,
      discover: false,
      flipStyle: 'card'
    }
    this.flip = this.flip.bind(this);
  }

  flip(e){
    if(!this.state.paired && !this.state.discover){
      this.setState({
        discover: true,
        flipStyle: 'flip card'
      });
      this.props.selectComic(this.props.comic);
    }
  }
  render(){

    return(
      <div className="flip-container" onClick={this.flip}>
        <div className={this.props.cardStyle}>
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
