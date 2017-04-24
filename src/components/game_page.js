import React, {Component} from 'react';
import Card from './card';
import Modal from './modal';

const COMICS = [
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'},
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'},
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'}
];

class GamePage extends Component {
  constructor(props){
    super(props);

    this.state ={
      showModal: false
    }

    this.onQuit = this.onQuit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.setState({ showModal:false });
    this.props.onStartClick();
  }

  onQuit(){
    this.setState({ showModal:true });
  }

  render(){
    const cards = COMICS.map((item, key) => <Card key={key}/>);
    const renderCards = this.props.startGame ? cards : <h1 className="bubble__title">Loading...</h1>;

    const renderModal = () =>{
      if(this.state.showModal){
        return (
          <Modal>
            <h1 className="bubble__title">Are you sure?</h1>
            <button className="btn btn--main" onClick={this.closeModal}>YES, QUIT</button>
          </Modal>
        );
      }
    }

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
              <button className="btn btn--main" onClick={this.onQuit}>quit game</button>
            </div>
          </div>
        </div>
        <div className="home-page-footer">
          <div className="container">
            <p className="home-page-footer--p">Rebus.io 2017 ©</p>
          </div>
        </div>
        {renderModal()}
      </div>
    );
  }
}
export default GamePage;
