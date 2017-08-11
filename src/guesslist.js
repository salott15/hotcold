import React, { Component } from 'react';
import './guesslist.css';

export default function GuessList(props) {
	const guesses = props.guesses.map((guess,index) => (
		<li key={index}>
			{guess}
		</li>
	));

	return (
		<ul className={"guesses"}>
			{guesses}
		</ul>
		);
	};