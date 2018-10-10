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
      <div className="calculator">
        <div className="calculator-display">{displayValue}</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
                <button className="calculator-key key-clear">AC</button>
                <button className="calculator-key key-sign">+</button>
                <button className="calculator-key key-percent">%</button>
            </div>
            <div className="digit-keys">
                <button className="calculator-key key-0">0</button>
                <button className="calculator-key key-1">1</button>
                <button className="calculator-key key-2">2</button>
                <button className="calculator-key key-3">3</button>
                <button className="calculator-key key-4">4</button>
                <button className="calculator-key key-5">5</button>
                <button className="calculator-key key-6">6</button>
                <button className="calculator-key key-7">7</button>
                <button className="calculator-key key-8">8</button>
                <button className="calculator-key key-9">9</button>
            </div>
            <div className="operator-keys">
                <button className="calculator-key key-divide">+</button>
                <button className="calculator-key key-multiply">x</button>
                <button className="calculator-key key-subtract">-</button>
                <button className="calculator-key key-add">+</button>
                <button className="calculator-key key-equal">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;