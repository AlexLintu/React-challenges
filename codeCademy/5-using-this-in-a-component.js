import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
    // Getter method of `MyName`:
    get name() {
        return 'Alex :)';
    }
	// `this` refers to an instance of `MyName`
    // Render method of `MyName`:
    render() {
        return <h1>My name is {this.name}.</h1>; // `this` explained: https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
    }
}

ReactDOM.render(
    <MyName />, 
    document.getElementById('app')
);