import React, { useState } from 'react'
import Keypad from '../Keypad/Keypad'
import Menu from '../Menu/Menu'
import Result from '../Result/Result'
import './Calculator.css'

const Calculator = () => {
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [operator, setOperator] = useState(null);

  const numKeyPressed = (e) => {
    if (firstNum === null && operator === null && secondNum === null) {
      setFirstNum(e.target.innerText);
    }

    if (firstNum !== null && operator === null && secondNum === null) {
      setFirstNum(firstNum + e.target.innerText);
    }

    if (firstNum !== null && operator !== null && secondNum === null) {
      setSecondNum(e.target.innerText);
    }

    if (firstNum !== null && operator !== null && secondNum !== null) {
      setSecondNum(secondNum + e.target.innerText);
    }
  }

  const addition = () => {
    return Number(firstNum) + Number(secondNum);
  }

  const subtraction = () => {
    return Number(firstNum) - Number(secondNum);
  }

  const multiplication = () => {
    return Number(firstNum) * Number(secondNum);
  }

  const division = () => {
    if (Number(secondNum) === 0) {
      return 0;
    }
    return Number(firstNum) / Number(secondNum);
  }

  const calculation = () => {
    switch (operator) {
      case '+': 
        setFirstNum(addition().toString());
        setSecondNum(null);
        break;
      case '-':
        setFirstNum(subtraction().toString());
        setSecondNum(null);
        break;
      case '×':
        setFirstNum(multiplication().toString());
        setSecondNum(null);
        break;
      case '/':
        setFirstNum(division().toString());
        setSecondNum(null);
        break;
      default: 
        setFirstNum(null);
        secondNum(null);
    }
  }

  const operatorKeyPressed = (e) => {
    if (operator === null) {
      setOperator(e.target.innerText);
    }

    if (operator !== null) {
      calculation();
      setOperator(e.target.innerText);
    }
  }

  const delKeyPressed = () => {
    if (operator === null && firstNum.length !== 0) {
      setFirstNum(firstNum.slice(0, -1));
    }

    if (operator !== null && secondNum.length !== 0) {
      setSecondNum(secondNum.slice(0, -1));
    }
  }

  const resetKeyPressed = () => {
    setFirstNum(null);
    setSecondNum(null);
    setOperator(null);
  }

  const resultKeyPressed = () => {
    calculation();
    setOperator(null);
  }

  return (
    <div className="calculator-container">
        <div className="calculator">
            <Menu />
            <Result firstNum={firstNum} secondNum={secondNum} operator={operator} />
            <Keypad 
              numKeyPressed={numKeyPressed} 
              operatorKeyPressed={operatorKeyPressed} 
              delKeyPressed={delKeyPressed} 
              resetKeyPressed={resetKeyPressed}
              resultKeyPressed={resultKeyPressed}
            />
        </div>
    </div>
  )
}

export default Calculator