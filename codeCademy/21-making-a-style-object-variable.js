import React from 'react';
import ReactDOM from 'react-dom';

// Adding all of the style properties to a variable:
const styles = {
    background: 'lightblue', 
    color: 'darkred',
    // Using camelCase for style names in React - `marginTop` instead of `margin-top`:
    marginTop: '100px',
    // Also, values that are using `px` can be written without quotation marks - fontSize: 50, if the unit is other than `px` quotation marks are required - "2em":
    fontSize: 50
  }
// Using that variable in JSX:
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);