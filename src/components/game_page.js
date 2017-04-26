import React, {Component} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Card from './card';
import Modal from './modal';
import InfoMessage from './info_message';

const PRIV_KEY = "c489aff329d83d09815b554f38d843ba42a5061a";
const PUBLIC_KEY = "2a7fca050595ffa66aaf74e2b1bae70f";
const URL = 'https://gateway.marvel.com/v1/public/comics';

class GamePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      flipAllCards: 'card',
      firstComic: 123,
      secondComic:456,
      flippedCards:0,
      comics:[],
      message: 'Hello, pick one card',
      showModal: false
    }
    this.onQuit = this.onQuit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleTurn = this.handleTurn.bind(this);
  }

  fetchComics(){
    const TS = new Date().getTime();
    const HASH = CryptoJS.MD5(TS + PRIV_KEY + PUBLIC_KEY).toString();
    axios.get( URL, {
      params: {
        ts: TS,
        apikey: PUBLIC_KEY,
        limit: 50,
        hash: HASH
      }
    })
    .then((response) => {
      this.setComicsList(response.data.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  setComicsList(allComics){
    let comics = allComics.filter((item) => item.thumbnail.path.split('_')[1] !== "not");
    let comic8 = comics.slice(0, 6);//pick eight first
    let comicGrid = [...comic8, ...comic8];// duplicate the 8 first (needed 16 in total)
    comicGrid.sort(() =>  0.5 - Math.random());//randomize order
    this.setState({comics: comicGrid});// set state
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.startGame){
      this.fetchComics();
    }
  }

  closeModal(){
    this.props.onStartClick();
    this.setState({
      comics:[],
      showModal:false
    });
  }
  onCancel(){
    this.setState({ showModal:false });
  }

  handleTurn(comic){
    if(this.state.firstComic === this.state.secondComic){
      console.log('estos putos comics son iguales');
    }
    switch (this.state.flippedCards){
      case 0:
        this.setState({
          firstComic: comic.id,
          message: "good, Choose another one",
          flippedCards: this.state.flippedCards + 1
        });
        break;
      case 1:
        this.setState({
          secondComic: comic.id,
          message: "let see",
          flippedCards: this.state.flippedCards + 1
        });
        break;
      case 2:
        this.setState({
          firstComic: '',
          secondComic:'',
          message: "you are the best",
          flippedCards: 0,
          flipAllCards: 'card'
        });
        break;
      default:
        this.setState({
          firstComic: '',
          secondComic:'',
          message: "holla back young'n uh uh",
          flippedCards: 0
        });
    }
  }

  onQuit(){
    this.setState({ showModal:true });
  }

  render(){
    const cards = this.state.comics.map((item, key) => <Card key={key} comic={this.state.comics[key]} turn={this.handleTurn} cardStyle={this.state.flipAllCards}/>);
    const renderCards = this.state.comics.length > 0 ? cards : <h1 className="bubble__title">Loading...</h1>;

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
            <p className="home-page-footer--p">Data provided by Marvel. © 2017 MARVEL | Rebus.io </p>
          </div>
        </div>
        {renderModal()}
      </div>
    );
  }
}
export default GamePage;
