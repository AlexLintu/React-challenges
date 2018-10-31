// Parent.js file - stateful component

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';


class Parent extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      name: 'Frarthur'
    }
  }
  
  render() {
        // `name` is an attribute which is adding a `prop` to the Child, in our case `prop` passes the current `state` of the Parent to the Child:
 		return <Child name={this.state.name}/>
	}
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);

// Child.js file - stateless component

import React from 'react';

export class Child extends React.Component {
  render() {
    // receiving `state` through the `prop`
  	return <h1>Hey, my name is {this.props.name}!</h1>;
	}
}