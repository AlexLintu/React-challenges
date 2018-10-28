import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component { // Component class
  scream() { // Method #1 of the component class and at the same time our event handler
    alert('AAAAAAAAHHH!!!!!');
  }

  render() { // Method #2 of the component class
    return <button onClick={this.scream}>AAAAAH!</button>; // `onClick` is event listener, `scream` is event handler
  }
}

ReactDOM.render(
	<Button />,
  document.getElementById('app')
);