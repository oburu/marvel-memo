import React, {Component} from 'react';

class InfoMessage extends Component{
  constructor(props){
    super(props);

    this.state ={
      messageStyle: "bubble-side bubble-side-down"
    }
  }
  componentWillReceiveProps(){
    setTimeout(()=>{
      this.setState({
        messageStyle: "bubble-side"

      });
    },1000);

  }
  render(){
    return(
      <div className="game-page-top">
        <div className="container">
          <div className={this.state.messageStyle}>
            <h1 className="bubble__title bubble-side__title">{this.props.message}</h1>
          </div>
          <img alt="heroe-img" className="bubble-side-heroe-img" src={require('../images/wolverine-head.svg')}/>
        </div>
      </div>
    );
  }
}

export default InfoMessage;
