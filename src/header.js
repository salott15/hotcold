import React, { Component } from 'react';
import './header.css';

import Title from './title.js'

export default class Header extends React.Component {
	onNewGame(event){
		event.preventDefault();
		if (this.props.onNewGame) {
			this.props.onNewGame();
		}
	}

	render(){

		return (
			<nav>
                <a className="newgame" href="#" onClick={e => this.onNewGame(e)}>
                    + New Game
                </a>

                <Title />
			</nav>
		);
	}
}