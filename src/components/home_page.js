import React, {Component} from 'react';

class HomePage extends Component {
  render(){
    return(
      <div className="home-page">
        <div className="home-page-top">
          <div className="container">
            <h1>Hello</h1>
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
          <div className="content">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
