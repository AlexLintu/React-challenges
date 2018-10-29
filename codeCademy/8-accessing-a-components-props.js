import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
    // Component's `props` is an object that holds information about that component:
  	const stringProps = JSON.stringify(this.props); // `JSON.stringify()` method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify 

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

ReactDOM.render(
	<PropsDisplayer myProp="Hello"/>, // If the `prop` isn't a string, it needs to be wrapped into {}
	document.getElementById('app')
);