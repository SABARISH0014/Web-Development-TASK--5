import React from 'react';

const Display = ({ display, result }) => (
  <>
    <input type="text" value={display} disabled className="display" />
    <div className="result">Result: {result}</div>
  </>
);

export default Display;
