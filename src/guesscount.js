import React, { Component } from 'react';
import './guesscount.css';

export default function GuessCount(props){

	return(
		<h3>Guess # <span className={"counter"}>{props.count}</span>!</h3>
		)
}