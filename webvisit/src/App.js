import night from "./images/night.jpg";
import me from "./images/owlMe.png";
import owl from "./images/owlIt.png";
import "./App.css";
import {useEffect, useState} from "react";
import {throttle} from "lodash";

function App() {
  const [mouseX, changeMouseX] = useState(0);
  const throttledHandleMouseMove = throttle(handleMouseMove, 250);
  function handleMouseMove(event) {
    changeMouseX(event.screenX);
  }
useEffect(() => {
  document.addEventListener('mousemove', throttledHandleMouseMove);
})
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__headBackground"></div>
        <div className="App__headIcons">
          <img
            className="App__icon"
            src="https://img.icons8.com/clouds/100/000000/up.png"
          />
          <img
            className="App__icon"
            src="https://img.icons8.com/clouds/100/000000/cat.png"
          />
          <img
            className="App__icon"
            src="https://img.icons8.com/clouds/100/000000/business.png"
          />
          <img
            className="App__icon"
            src="https://img.icons8.com/clouds/100/000000/programming-flag.png"
          />
          <img
            className="App__icon"
            src="https://img.icons8.com/clouds/100/000000/chat.png"
          />
        </div>
      </header>
      <main className="App__main">
        <img className="App__background" src={night} />
        <img className="App__me" src={me} style={{left: `calc(50vw - (594px / 2) - ${mouseX/2}px)`}}/>
        <img className="App__owl" src={owl} style={{left: `${mouseX/2}px`}}/>
      </main>
    </div>
  );
}

export default App;
