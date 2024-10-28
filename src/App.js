import { useState } from "react";
import './App.css';
import Input from './components/Input';
import Keypad from './components/Keypad';

const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  // Function to handle backspace
  const backspace = () => {
    setText((prevText) => {
      const newText = prevText.join("").trim().slice(0, -1); // Remove last character
      return newText.split("");  // Return as array
    });
  };

  const calculateResult = () => {
    try {
      const input = text.join("").replace(/ +/g, "");  // Removing extra spaces
      setResult(eval(input));  // Using eval() to calculate
    } catch (error) {
      setResult("Error");  // In case of invalid expression
    }
  };

  const resetText = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Keypad symbol="7" handleClick={addToText} />
          <Keypad symbol="8" handleClick={addToText} />
          <Keypad symbol="9" handleClick={addToText} />
          <Keypad symbol="/" color="#f2a33c" handleClick={addToText} />
        </div>
        <div className="row">
          <Keypad symbol="4" handleClick={addToText} />
          <Keypad symbol="5" handleClick={addToText} />
          <Keypad symbol="6" handleClick={addToText} />
          <Keypad symbol="*" color="#f2a33c" handleClick={addToText} />
        </div>
        <div className="row">
          <Keypad symbol="3" handleClick={addToText} />
          <Keypad symbol="2" handleClick={addToText} />
          <Keypad symbol="1" handleClick={addToText} />
          <Keypad symbol="+" color="#f2a33c" handleClick={addToText} />
        </div>
        <div className="row">
          <Keypad symbol="." handleClick={addToText} />
          <Keypad symbol="0" handleClick={addToText} />
          <Keypad symbol="=" color="green" handleClick={calculateResult} />
          <Keypad symbol="-" color="#f2a33c" handleClick={addToText} />
        </div>
        <div className="row">
          <Keypad symbol="Clear" color="red" handleClick={resetText} />
          <Keypad symbol="Backspace" color="orange" handleClick={backspace} />
        </div>
      </div>
    </div>
  );
}

export default App;
