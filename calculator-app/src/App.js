import React, { Component } from 'react';
import './index.css';

// 1. What state is there?
// 2. When does it change?

class App extends Component {
  state = {
    displayValue: '0'
  }
  render() {
    const { displayValue } = this.state

    return (
      <Display />
      <div className="digit-keys">

      </div>
    );
  }
}

export default App;