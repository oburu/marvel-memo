import React, {Component} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Card from './card';

const PRIV_KEY = "c489aff329d83d09815b554f38d843ba42a5061a";
const PUBLIC_KEY = "2a7fca050595ffa66aaf74e2b1bae70f";
const URL = 'https://gateway.marvel.com/v1/public/comics';

function generateArray(rawData){
  return rawData.map((item, index) =>{
    return {
      image: item.thumbnail.path+"."+item.thumbnail.extension,
      value: item.id,
      matched: false,
      flipped: false
    };
  });
}

class AllCards extends Component{
  constructor(props){
    super(props);

    this.state = {
      comics:[],
      lastCard: null,
      locked: false,
      matches: 0
    }
    this.renderCards = this.renderCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }

  fetchComics(){
    const TS = new Date().getTime();
    const HASH = CryptoJS.MD5(TS + PRIV_KEY + PUBLIC_KEY).toString();
    axios.get( URL, {
      params: {
        ts: TS,
        apikey: PUBLIC_KEY,
        limit: 100,
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
    let comics = allComics.filter((item) => {
      return item.thumbnail.path.split('_')[1] !== "not"
    })
    comics.sort(() =>  0.5 - Math.random());
    let comic6 = comics.slice(0, 6);//pick eight first
    let comicDuplicate = comic6.concat(comic6);
    generateArray(comicDuplicate.sort(() =>  0.5 - Math.random()));
    this.setState({comics: generateArray(comicDuplicate)});// set state
    this.props.message('Ok, pick a card');
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.startGame && this.state.comics.length === 0){
      this.fetchComics();
    }
    if(!nextProps.startGame){
      this.setState({comics:[]});
    }
  }
    // console.log(this.state.matches)
    // if (this.state.matches === this.state.comics.length / 2) {
    //   this.props.message('You Win! Play Again?');
    //
    // }


  checkMatch(value, id) {
    if (this.state.locked) {
      return;
    }
    let comics = this.state.comics;
    comics[id].flipped = true;
    this.setState({comics, locked: true});

    if (this.state.lastCard) {
      if (value === this.state.lastCard.value) {
        let matches = this.state.matches;
        comics[id].matched = true;
        comics[this.state.lastCard.id].matched = true;
        this.setState({comics, lastCard: null, locked: false, matches: matches + 1});
      } else {
        setTimeout(() => {
          comics[id].flipped = false;
          comics[this.state.lastCard.id].flipped = false;
          this.setState({comics, lastCard: null, locked: false});
        }, 1000);
      }

    } else {
      this.setState({
        lastCard: {id, value},
        locked: false
      });
    }
  }

  renderCards(comics) {
    return comics.map((comic, index) => {
      return (
        <Card
          key={index}
          img={comic.image}
          id={index}
          value={comic.value}
          matched={comic.matched}
          flipped={comic.flipped}
          checkMatch={this.checkMatch} />
      );
    });
  }

  render(){
    const renderComics = this.state.comics.length > 0 ? this.renderCards(this.state.comics) : <h1 className="bubble__title">Loading...</h1>
    return(
      <div className="cards">
        {renderComics}
      </div>
    );
  }
}

export default AllCards;
