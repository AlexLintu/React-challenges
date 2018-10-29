// Talker.js file

import React from 'react';
import ReactDOM from 'react-dom';
// Importing Button
import { Button } from './Button';

class Talker extends React.Component {
  // `handleClick` is an event handler/method:
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    // 'onClick' here is an attribute name, which is its `prop` name that we use to pass the event handler to a different component
    // `on` + event type = onClick:
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);





// Button.js file

import React from 'react';

// exporting Button
export class Button extends React.Component {
  render() {
    return (
      // First occurance of `onClick` is an attribute that creates a special `event listener`, listening for clicks on the <button></button> (JSX element)
      // Second occurance of `onClick` is an arbitrary attribute name, which does NOT create the `event listener on the <Button /> (component instance)
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}