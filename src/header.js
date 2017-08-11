import React, { Component } from 'react';
import './header.css';

import Title from './title.js';

export default class Header extends React.Component {
	onNewGame(event){
		event.preventDefault();
		if (this.props.onNewGame) {
			this.props.onNewGame();
		}
	}

	onInfo(event){
		event.preventDefault();
		if(this.props.onInfo){
			this.props.onInfo();
		}
	}

	render(){

		return (
			<nav>
                <a className="gameinfo" href="#" onClick={e => this.onInfo(e)}>
                    What?
                </a>
                <a className="newgame" href="#" onClick={e => this.onNewGame(e)}>
                    + New Game
                </a>

				<Title />
			</nav>
		)
	}
}