import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'A', age: 20, belt: 'balck', id: 1},
      {name: 'B', age: 35, belt: 'green', id: 2},
      {name: 'C', age: 45, belt: 'pink', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome! :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;