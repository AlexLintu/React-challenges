import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component { // Componenet class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes & https://hacks.mozilla.org/2015/07/es6-in-depth-classes/ 
  render() {
    return <h1>Hello world</h1>; // JSX expression
  }
}

ReactDOM.render(
	<MyComponentClass />, // Component
	document.getElementById('app')
);