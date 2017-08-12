import React, { Component } from 'react';
import './guessbox.css';

import GuessForm from './guessform.js';
import GuessCount from './guesscount.js';
import GuessList from './guesslist.js';

export default class GuessBox extends React.Component {
	constructor(props){
		super(props);
	}

	render(){

	return(
			<div className={"box"}>
				<div className={"results"}>
					<br />
					<header>{this.props.results}</header>
				</div>
				<GuessForm onGuess={this.props.onGuess} />
				<GuessCount count={this.props.guesses.length} />
				<GuessList guesses={this.props.guesses}/>
			</div>
			)
}
}