import React, { Component } from 'react';
import './guessform.css';

export default class GuessForm extends React.Component {
	onGuess(event){
		event.preventDefault();

		if (this.props.onGuess){
			const value = this.input.value;
			this.props.onGuess(value);
		}
		this.input.value = '';
	}

	render(){

		return(
			<form onSubmit={e => this.onGuess(e)}>
				<input type="text" name="userGuess" id="userGuess"
					className="text" maxLength="3" autoComplete='off'
					placeholder="Enter your guess!" required
					ref={input => this.input = input} />
				<br />
				<button type="submit" value="Guess">Guess</button>
			</form>
			)
	}
} 