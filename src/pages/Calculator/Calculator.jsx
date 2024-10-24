import { useState } from "react";

import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) => {
      if (prevValue === "Error") {
        return value;
      } else if (prevValue === "0") {
        return value;
      } else {
        return prevValue + value;
      }
    });
  };

  const deleteLast = () => {
    setDisplayValue((prevValue) => {
      if (prevValue.length === 1) {
        return "0";
      } else {
        return prevValue.slice(0, -1);
      }
    });
  };

  const clearDisplay = () => {
    setDisplayValue("0");
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      setDisplayValue(eval(displayValue).toString());
    } catch {
      setDisplayValue("Error");
    }
  };
  return (
    <div className="calculator-container">
    <div className="calculator">
      <input type="text" id="display" value={displayValue} disabled />
      <div className="buttons">
        <button className="buttonn" onClick={clearDisplay}>C</button>
        <button className="buttonn" onClick={deleteLast}>DEL</button>
        <button className="buttonn" onClick={() => appendToDisplay("%")} disabled>
          %
        </button>
        <button className="buttonn" onClick={() => appendToDisplay("/")} disabled>
          /
        </button>
        <button className="buttonn" onClick={() => appendToDisplay("7")}>7</button>
        <button className="buttonn" onClick={() => appendToDisplay("8")}>8</button>
        <button className="buttonn" onClick={() => appendToDisplay("9")}>9</button>
        <button className="buttonn" onClick={() => appendToDisplay("*")} disabled>
          *
        </button>
        <button className="buttonn" onClick={() => appendToDisplay("4")}>4</button>
        <button className="buttonn" onClick={() => appendToDisplay("5")}>5</button>
        <button className="buttonn" onClick={() => appendToDisplay("6")}>6</button>
        <button className="buttonn" onClick={() => appendToDisplay("-")}>-</button>
        <button className="buttonn" onClick={() => appendToDisplay("1")}>1</button>
        <button className="buttonn" onClick={() => appendToDisplay("2")}>2</button>
        <button className="buttonn" onClick={() => appendToDisplay("3")}>3</button>
        <button className="buttonn" onClick={() => appendToDisplay("+")}>+</button>
        <button className="buttonn" onClick={() => appendToDisplay("0")}>0</button>
        <button className="buttonn" onClick={() => appendToDisplay(".")}>.</button>
        <button className="buttonn" onClick={calculateResult}>=</button>
      </div>
    </div>
    </div>
  );
}

export default Calculator;
