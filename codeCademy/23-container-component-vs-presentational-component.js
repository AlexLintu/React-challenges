// Container component file (app's logic):

import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../components/GuineaPigs'

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

// Container component class, which figures out what to display:
class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);





// Presentational component file (app's display):

import React from 'react';

// Presentational component class, which only job is to render HTML-like JSX/ display:
export class GuineaPigs extends React.Component {

  render() {
  	const src = this.props.src;
    
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
