import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>; // 2. Rendering the prop
  }
}

ReactDOM.render(
  <Greeting firstName='Alex' />, // 1. `firstName='Alex'` is a prop of Greeting component
  document.getElementById('app')
);