import React, { useContext } from 'react'
import './Menu.css'
import { ThemeContext } from '../ThemeContext/Theme'

const Menu = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="menu">

      <div className="logo" style={{ color: theme.header_color }}>
        <h1>calc</h1>
      </div>

      <div className="buttons-container">
        <h5 style={{ color: theme.header_color }}>THEME</h5>

        <div className="buttons">
          <div className="buttons-numbers" style={{ color: theme.header_color }}>
            <div style={{ color: theme.header_color }}>1</div>
            <div style={{ color: theme.header_color }}>2</div>
            <div style={{ color: theme.header_color }}>3</div>
          </div>
          <div className="buttons-switches" style={{ background: theme.keypad_bg }}>
            <div className="button-one active" onClick={toggleTheme}></div>
            <div className="button-two" onClick={toggleTheme}></div>
            <div className="button-three" onClick={toggleTheme}></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Menu