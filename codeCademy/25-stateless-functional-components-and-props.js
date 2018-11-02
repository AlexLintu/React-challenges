import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

// OR

import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  
  return (
      <div>
          <h1>Cute Guinea Pigs</h1>
          <img src={src} />
      </div>
  )
}

// Example:

// Normal way to display a prop:
export class MyComponentClass extends React.Component {
    render() {
      return <h1>{this.props.title}</h1>;
    }
  }
  
  // Stateless functional component way to display a prop:
  export const MyComponentClass = (props) => {
    return <h1>{props.title}</h1>;
  }
  
  // Normal way to display a prop using a variable:
  export class MyComponentClass extends React.component {
    render() {
        let title = this.props.title;
      return <h1>{title}</h1>;
    }
  }
  
  // Stateless functional component way to display a prop using a variable:
  export const MyComponentClass = (props) => {
      let title = props.title;
    return <h1>{title}</h1>;
  }