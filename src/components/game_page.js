import React, {Component} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Card from './card';
import Modal from './modal';

const COMICS = [
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'},
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'},
  {name:'wolverine'},{name:'spiderman'},{name:'daredevil'},{name:'x-men'}
];
const PRIV_KEY = "c489aff329d83d09815b554f38d843ba42a5061a";
const PUBLIC_KEY = "2a7fca050595ffa66aaf74e2b1bae70f";
const URL = 'https://gateway.marvel.com/v1/public/comics';

class GamePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      comics:[],
      showModal: false
    }
    this.onQuit = this.onQuit.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    let comic8 = comics.slice(0, 8);//pick eight first
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
    this.setState({ showModal:false });
  }

  onQuit(){
    this.setState({ showModal:true });
  }

  render(){
    const cards = COMICS.map((item, key) => <Card key={key}/>);
    const renderCards = this.state.comics.length > 0 ? cards : <h1 className="bubble__title">Loading...</h1>;

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
            <p className="home-page-footer--p">Data provided by Marvel. © 2017 MARVEL | Rebus.io </p>
          </div>
        </div>
        {renderModal()}
      </div>
    );
  }
}
export default GamePage;
