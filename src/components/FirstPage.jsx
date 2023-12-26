import React from 'react';
import './Home.css';

const FirstPage = ({ incrementNumber }) => {
  return (
    <div className="first">
      <h1>Quiz Game</h1>
      <button onClick={incrementNumber}>Play</button>
    </div>
  );
}

export default FirstPage;


