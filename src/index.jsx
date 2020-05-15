import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './home.jsx';

const App = () => {
  return (
    <HomePage />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))