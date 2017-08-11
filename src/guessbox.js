import React, { Component } from 'react';
import './guessbox.css';

import GuessForm from './guessform.js';
import GuessCount from './guesscount.js';
import GuessList from './guesslist.js';

export default function GuessBox(props) {

	return(
			<div className={"box"}>
				<div className={"results"}>
					<br />
					<header>{props.results}</header>
				</div>
				<GuessForm onGuess={props.onGuess} />
				<GuessCount count={this.state.guesses.length} />
				<GuessList guesses={this.state.guesses}/>
			</div>
			)
}