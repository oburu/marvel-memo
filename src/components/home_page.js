import React, {Component} from 'react';

const notYet = {
  textDecoration: 'line-through',
  cursor: 'not-allowed'
}
class HomePage extends Component {
  constructor(props){
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){
    this.props.onStartClick();
  }

  render(){
    return(
      <div className={this.props.homePageStyles}>
        <div className="home-page-top">
          <div className="container">
            <div className="bubble">
              <h1 className="bubble__title">WELCOME!</h1>
              <p className="bubble__p">Please, Please, choose one of the options below.</p>
            </div>
          </div>
        </div>
        <div className="home-page-middle">
          <div className="container">
            <div className="super-heroe-section">
              <div className="super-heroe">
                <img alt="super-heroe-img" src={require('../images/wolverine.svg')}/>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-bottom">
          <div className="container">
            <button className="btn btn--main" onClick={this.onClickHandler}>Single player game</button>
            <button className="btn btn--main" style={notYet}>Multi player game</button>
            <button className="btn btn--main"style={notYet}>Join game</button>
          </div>
        </div>
        <div className="home-page-footer">
          <div className="container">
            <p className="home-page-footer--p"><a href="https://github.com/oburu/marvel-memo" target="_blank">Rebus.io 2017 © ✌</a></p>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
