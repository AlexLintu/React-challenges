import React from 'react';
import ReactDOM from 'react-dom';


const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    // First, some logic that must happen before rendering:
    const friend = friends[2];
    // Returning statement using that logic:
    return (
      <div>
        <h1>{friend.title}</h1>
        <img
          scr={friend.src}/>
      </div>
    );
  }
}

ReactDOM.render(
	<Friend />,
  document.getElementById('app')
);