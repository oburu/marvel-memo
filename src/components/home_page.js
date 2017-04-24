import React, {Component} from 'react';

class HomePage extends Component {
  render(){
    return(
      <div className="home-page">
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
            <button className="btn btn--main">Single player game</button>
            <button className="btn btn--main">Multi player game</button>
            <button className="btn btn--main">Join game</button>
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
export default HomePage;
