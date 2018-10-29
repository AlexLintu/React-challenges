import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    let plan;
    if (fiftyFifty) {
      plan = "Tonight I'm going out WOOO"
    } else {
      plan = "Tonight I'm going to bed WOOO"
    }
    
    return <h1>{plan}</h1>;
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);

// Second solution:

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>
    }
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);