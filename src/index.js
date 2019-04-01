import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(App)
console.log(typeof App)
console.log(<App />)

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

