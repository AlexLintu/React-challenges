//Talker.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() { // talk() method that we are passing to Button component
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talkMethod={this.talk} />; // Adding talk() method as a prop to Button component
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Button.js

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talkMethod}> {/* Receiving talk method */}
        Click me!
      </button>
    );
  }
}