import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => setDisplay(display + value);
  const handleClear = () => {
    setDisplay('');
    setResult('');
  };
  const handleCalculate = () => {
    try {
      setResult(eval(display) || 'Error');
    } catch {
      setResult('Error');
    }
  };
  const handleSquareRoot = () => setResult(Math.sqrt(eval(display) || 0));
  const handleCubeRoot = () => setResult(Math.cbrt(eval(display) || 0));
  const handleSquare = () => setResult(Math.pow(eval(display) || 0, 2));
  const handleCube = () => setResult(Math.pow(eval(display) || 0, 3));

  return (
    <div className="calculator">
      <Display display={display} result={result} />
      <div className="buttons">
        <Button label="C" onClick={handleClear} />
        <Button label="/" onClick={() => handleClick('/')} />
        <Button label="*" onClick={() => handleClick('*')} />
        <Button label="-" onClick={() => handleClick('-')} />
        <Button label="+" onClick={() => handleClick('+')} />
        <Button label="7" onClick={() => handleClick('7')} />
        <Button label="8" onClick={() => handleClick('8')} />
        <Button label="9" onClick={() => handleClick('9')} />
        <Button label="4" onClick={() => handleClick('4')} />
        <Button label="5" onClick={() => handleClick('5')} />
        <Button label="6" onClick={() => handleClick('6')} />
        <Button label="1" onClick={() => handleClick('1')} />
        <Button label="2" onClick={() => handleClick('2')} />
        <Button label="3" onClick={() => handleClick('3')} />
        <Button label="0" onClick={() => handleClick('0')} />
        <Button label="." onClick={() => handleClick('.')} />
        <Button label="=" onClick={handleCalculate} />
        <Button label="√" onClick={handleSquareRoot} />
        <Button label="∛" onClick={handleCubeRoot} />
        <Button label="x²" onClick={handleSquare} />
        <Button label="x³" onClick={handleCube} />
      </div>
    </div>
  );
};

export default Calculator;
