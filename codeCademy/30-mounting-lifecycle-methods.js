// Without Lifecycle Method  - this will show the pop up "for the first time ever" twice:

import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  render() {

  	alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');

    alert('Flashy is rendering!');
    
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);

// With Lifecycle Method: 

import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  // This method will make sure that we will only see "for the first time ever" message once:
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }
  
  render() {
    alert('Flashy is rendering!');
    
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);