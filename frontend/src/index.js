import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // only do this for default function


// App is a component function, <App /> is an element created
ReactDOM.hydrate(<App />, document.getElementById('root'));