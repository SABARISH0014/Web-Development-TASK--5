import React from 'react';
import Calculator from './components/Calculator/Calculator';
import './components/styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;

