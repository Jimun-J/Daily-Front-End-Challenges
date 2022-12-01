import React, { useContext } from 'react'
import './Keypad.css'
import { ThemeContext } from '../ThemeContext/Theme'

const Keypad = ({ numKeyPressed, operatorKeyPressed, delKeyPressed, resultKeyPressed, resetKeyPressed }) => {
  const [{ theme }] = useContext(ThemeContext);
  const numKey = {
    background: theme.num_key_bg, color: theme.num_key_color, borderBottom: `5px solid ${theme.num_key_shadow}`
  }
  const resetKey = {
    background: theme.reset_key_bg, color: theme.reset_key_color, borderBottom: `5px solid ${theme.reset_key_shadow}`
  }
  const resultKey = {
    background: theme.result_key_bg, color: theme.result_key_color, borderBottom: `5px solid ${theme.result_key_shadow}`
  }
  
  return (
    <div className="keypad" style={{ background: theme.keypad_bg }}>
      <button style={numKey} onClick={numKeyPressed}>7</button>
      <button style={numKey} onClick={numKeyPressed}>8</button>
      <button style={numKey} onClick={numKeyPressed}>9</button>
      <button style={resetKey} onClick={delKeyPressed}>DEL</button>
      <button style={numKey} onClick={numKeyPressed}>4</button>
      <button style={numKey} onClick={numKeyPressed}>5</button>
      <button style={numKey} onClick={numKeyPressed}>6</button>
      <button style={numKey} onClick={operatorKeyPressed}>+</button>
      <button style={numKey} onClick={numKeyPressed}>1</button>
      <button style={numKey} onClick={numKeyPressed}>2</button>
      <button style={numKey} onClick={numKeyPressed}>3</button>
      <button style={numKey} onClick={operatorKeyPressed}>-</button>
      <button style={numKey} onClick={numKeyPressed}>.</button>
      <button style={numKey} onClick={numKeyPressed}>0</button>
      <button style={numKey} onClick={operatorKeyPressed}>/</button>
      <button style={numKey} onClick={operatorKeyPressed}>&times;</button>
      <button style={resetKey} onClick={resetKeyPressed}>RESET</button>
      <button style={resultKey} onClick={resultKeyPressed}>=</button>
    </div>
  )
}

export default Keypad