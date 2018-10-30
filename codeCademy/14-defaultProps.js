import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps:
Button.defaultProps = {
  text: 'I am a button' // This text will show up if there is no `text` prop/attribute added to the `Button`
}


ReactDOM.render(
  <Button text="" />,  // Empty string will override the default prop value we provided above
  document.getElementById('app')
);