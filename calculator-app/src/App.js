import React, { Component } from 'react';
import './styles.css';

// 1. What state is there?
// 2. When does it change?

class AutoShrinkingText extends Component {
  componentDidUpdate() {
    const node = this.node;
    const { offsetWidth } = node;
    const parentWidth = node.offsetParent.offsetWidth;
    const scale = offsetWidth / parentWidth;
  }
  render() {
    return <div {...this.props} ref{node => this.node = node}/>
  }
}

class App extends Component {
  state = {
    value: null,
    displayValue: '0',
    waitingForOperand: false,
    operator: null
  }

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;
    
    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      });
    } else {this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      });
    }
  }

  inputDot() {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      });
    } else if (displayValue.indexOf('.') === -1) { // indexOf method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      });
    }
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
    });
  }

  toggleSign() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.charAt(0) === '-' ? displayValue.substring(1) : '-' + displayValue
    }); // charAt method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  } // substring method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

  inputPercent() {
    const { displayValue } = this.state;
    const value = parseFloat(displayValue); // parseFloat method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

    this.setState({
      displayValue: String(value / 100)
    });
  }

  performOperation(nextOperator) {
    const { displayValue, operator, value } = this.state;
    const newValue = parseFloat(displayValue);
    const operations = {
      '/' : (initialValue, newValue) => initialValue / newValue,
      '*' : (initialValue, newValue) => initialValue * newValue,
      '+' : (initialValue, newValue) => initialValue + newValue,
      '-' : (initialValue, newValue) => initialValue - newValue,
      '=' : (initialValue, newValue) => newValue
    };

    if (value == null) {
      this.setState({
        value: newValue
      });
    } else if (operator) {
      const initialValue = value || 0;
      const computedValue = operations[operator](initialValue, newValue);

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      });
    }
    
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    });
  }

  render() {
    const { displayValue } = this.state

    return (
        <div className="calculator">
          <AutoShrinkingText className="calculator-display">{displayValue}</AutoShrinkingText>
          <button className="calculator-key key-clear" onClick={() => this.clearDisplay()}>C</button>
          <button className="calculator-key key-sign" onClick={() => this.toggleSign()}>±</button>
          <button className="calculator-key key-percent" onClick={() => this.inputPercent()}>%</button>
          <button className="calculator-key key-divide" onClick={() => this.performOperation('/')}>÷</button>
          <button className="calculator-key key-7" onClick={() => this.inputDigit(7)}>7</button>
          <button className="calculator-key key-8" onClick={() => this.inputDigit(8)}>8</button>
          <button className="calculator-key key-9" onClick={() => this.inputDigit(9)}>9</button>
          <button className="calculator-key key-multiply" onClick={() => this.performOperation('*')}>x</button>
          <button className="calculator-key key-4" onClick={() => this.inputDigit(4)}>4</button>
          <button className="calculator-key key-5" onClick={() => this.inputDigit(5)}>5</button>
          <button className="calculator-key key-6" onClick={() => this.inputDigit(6)}>6</button>
          <button className="calculator-key key-subtract" onClick={() => this.performOperation('-')}>-</button>
          <button className="calculator-key key-1" onClick={() => this.inputDigit(1)}>1</button>
          <button className="calculator-key key-2" onClick={() => this.inputDigit(2)}>2</button>
          <button className="calculator-key key-3" onClick={() => this.inputDigit(3)}>3</button>
          <button className="calculator-key key-add" onClick={() => this.performOperation('+')}>+</button>
          <button className="calculator-key key-0" onClick={() => this.inputDigit(0)}>0</button>
          <button className="calculator-key key-dot" onClick={() => this.inputDot()}>.</button>
          <button className="calculator-key key-equal" onClick={() => this.performOperation('=')}>=</button> 
          <pre className="test">{JSON.stringify(this.state, null, 2)}</pre>             
        </div>
    );
  }
}

// stringify method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

export default App;