// Parent.js file - stateful component

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    
    this.changeName = this.changeName.bind(this);
  }
  
  // `changeName(newName)` function needs to be passed a new name as an argument, in order to work properly.
  // When a user selects a new dropdown item, it will invoke changeName, but it won't pass the correct argument! Instead of passing a new name, it will pass an event object, as all event listeners do:
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    // `Child` component has a `prop` called `name`, which equals to the value of the state and `prop` called `onChange` that passes the `changeName` function/method/event handler to the `Child` component, where it acts as `event handler`:
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);



// Child.js file - stateless component

import React from 'react';

export class Child extends React.Component {
  // Constructor is needed to make sure `handleChange` will work:
  constructor(props) {
  super(props);  
  this.handleChange = this.handleChange.bind(this);
}
  
  // `handleChange(e)` function should take an event object as an argument, extract the name that we want from that event object, and then call the event handler, passing in the extracted name:
  handleChange(e) { 
    const name = e.target.value; 
    this.props.onChange(name); 
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}