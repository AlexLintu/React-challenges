import React from 'react';
import ReactDOM from 'react-dom';

// Outer {} inject JS into JSX, inner {} create a JS object literal:
const styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);