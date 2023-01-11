import { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery"
import Description from "./components/Description/Description"

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <div className={ active ? "overlay active" : "overlay"}></div>
      <Navbar active={active} setActive={setActive} />
      <div className="board">
        <Gallery />
        <Description />  
      </div>
    </div>
  );
}

export default App;
