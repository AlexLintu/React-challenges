import React from 'react';
import ReactDOM from 'react-dom';

// Adding all of the style properties to a variable:
const styles = {
  background: 'lightblue', 
  color: 'darkred'
}
// Using that variable in JSX:
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);