import night from "./images/night.jpg";
import me from "./images/owlMe.png";
import owl from "./images/owlIt.png";
import "./App.css";
import {useEffect, useState} from "react";
import {throttle} from "lodash";

function getLeftMe(mouseX) {
  const multiplier = (mouseX - 100) / (window.innerWidth - 200);
  // if(mouseX>window.innerWidth-100){
  //   return "calc(50vw - (594px / 2))";
  // }
  //return `calc(${mouseX}px / 3.1)`;
  const resultMe = 100 + (window.innerWidth/2 - 297 - 100) * multiplier;
  return `${resultMe}px`;
}

function getLeftOwl(mouseX) {
  const multiplier = (mouseX - 100) / (window.innerWidth - 200);
  // if (mouseX>window.innerWidth-100){
  //   return "calc(50vw - (594px / 2))";
  // }
  //return `calc(100vw - (${mouseX}px / 3.1) - 594px)`;
  const resultOwl = window.innerWidth - 644 + (window.innerWidth/2 - 297 - (window.innerWidth - 644)) * multiplier;
  return `${resultOwl}px`;
}

function App() {
  const [mouseX, changeMouseX] = useState(0);
  const throttledHandleMouseMove = throttle(handleMouseMove, 250); //ограничение частоты перерисовки картинок
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
        <div className="App__opaGradient"></div>
        <img className="App__me" src={me} style={{left: getLeftMe(mouseX)}}/>
        <img className="App__owl" src={owl} style={{left: getLeftOwl(mouseX)}}/>
      </main>
    </div>
  );
}

export default App;
