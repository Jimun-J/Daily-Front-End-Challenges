import React, { useContext } from 'react'
import './Result.css'
import { ThemeContext } from '../ThemeContext/Theme'

const Result = ({ firstNum, secondNum, operator }) => {
  const [{ theme }] = useContext(ThemeContext);

  return (
    <div className="result" style={{ background: theme.screen_bg, color: theme.header_color }}>
      { firstNum === null || firstNum.length === 0 ? <div>0</div> : null }
      <div className="first-num">{firstNum}</div>
      <div>{operator}</div>
      <div className="second-num"> {secondNum}</div>
    </div>
  )
}

export default Result