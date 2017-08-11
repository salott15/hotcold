import React, { Component } from 'react';

import Header from './header.js';
import GuessBox from './guessbox.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      results: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
    };
  }

  newGame() {
    this.setState({
      guesses:[],
      results: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() *100) +1,
    })
  }

  guess(guess){

    const difference = Math.abs(guess - this.state.correctAnswer);

    let results;
    if (difference >= 50) {
      results = 'You\'re ice cold.';
    }
    else if (difference >=30) {
      results = 'You\'re cold.'; 
    }
    else if (difference >= 10) {
      results = "You\'re warm!";
    }
    else if (difference >= 1) {
      results = "You\'re Hot!";
    }
    else {
      results = 'You\'re right!'
    }

    this.setState({
      results,
      guesses: [...this.state.guesses, guess]
    });
  }

  render(){
  	return(
  		<div className={"board"}>
  			<Header onNewGame={() => this.newGame()}/>
  			<GuessBox results={this.state.results}
          onGuess={(guess) => this.guess(guess)}/>
  		</div>)
  }
}