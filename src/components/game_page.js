import React, {Component} from 'react';
import AllCards from './all_cards';
import Modal from './modal';
import InfoMessage from './info_message';

class GamePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: 'Wait a sec...',
      showModal: false
    }
    this.onQuit = this.onQuit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
  }
  closeModal(){
    this.props.onStartClick();
    this.setState({
      showModal:false
    });
  }
  onCancel(){
    this.setState({ showModal:false });
  }

  onQuit(){
    this.setState({ showModal:true });
  }
  changeMessage(message){
    this.setState({message});
  }


  render(){
    const renderModal = () =>{
      if(this.state.showModal){
        return (
          <Modal>
            <h1 className="bubble__title">Are you sure?</h1>
            <button className="btn btn--main" onClick={this.closeModal}>YES, QUIT</button>
            <button className="btn btn--main" onClick={this.onCancel}>cancel</button>
          </Modal>
        );
      }
    }
    return(
      <div className="game-page">
        <InfoMessage message={this.state.message}/>
        <div className="game-page-middle">
          <div className="container">
            {/*<div className="counter">
              <h2>PLAYER 1 - POINTS: 0</h2>
            </div>*/}
            <AllCards startGame={this.props.startGame} message={this.changeMessage}/>
            <div className="buttons-section">
              <button className="btn btn--main" onClick={this.onQuit}>quit game</button>
            </div>
          </div>
        </div>
        <div className="home-page-footer">
          <div className="container">
            <p className="home-page-footer--p">Data provided by Marvel. © 2017 MARVEL | Rebus.io </p>
          </div>
        </div>
        {renderModal()}
      </div>
    );
  }
}
export default GamePage;
