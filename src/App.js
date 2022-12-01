import Calculator from './components/Calculator/Calculator';
import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './components/ThemeContext/Theme'


function App() {
  const [{theme}] = useContext(ThemeContext);
  return (
    <div className="App" style={{ background: theme.main_bg }}>
      <Calculator />
    </div>
  );
}

export default App;
