import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value // `e.target.value` will equal to the text in the input field
    });
  }
  
  render() {
    return (
      <div>
        {/*onChange is event listener that waits for a change and calls event handler `this.handleUserInput`, which updates state
        `value` makes sure that <input /> and `userInput` are linked together and responsive/ same on each change */}
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1> 
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);