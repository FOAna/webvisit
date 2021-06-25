import night from "./images/night.jpg";
import me from "./images/owlMe.png";
import owl from "./images/owlIt.png";
import "./App.css";
import {useEffect, useState} from "react";
import {throttle} from "lodash";
//import Button from "./components/Button/Button.js";
import Button from "./components/Button2/Button.js";

function getLeftMe(mouseX) {
  const multiplier = (mouseX - 100) / (window.innerWidth - 200);
  const resultMe = 100 + (window.innerWidth/2 - 297 - 100) * multiplier;
  return `${resultMe}px`;
}

function getLeftOwl(mouseX) {
  const multiplier = (mouseX - 100) / (window.innerWidth - 200);
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
        <div className="App__checkColor">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur, magna scelerisque pulvinar fringilla, 
            enim orci tristique quam, volutpat fringilla quam urna at sapien. Vivamus orci sem, lacinia in aliquam non, porta eget 
            ante. Cras malesuada feugiat felis, quis malesuada lacus varius quis. Nullam urna diam, gravida a velit eget, faucibus 
            congue ex. Duis facilisis est nec semper vulputate. Nam eu rutrum purus, vel facilisis odio. Sed cursus massa a orci 
            volutpat facilisis. Curabitur dolor leo, sodales quis rutrum non, mollis eu ipsum. Ut molestie semper lacus. Donec vel 
            aliquet orci.</p>
            <button className="App__light button">Light</button>
            <button className="App__dark button">Dark</button>
            <button className="App__yellow button">Yellow</button>
            <button className="App__orange button">Orange</button>
            <button className="App__red button">Red</button>
            <button className="App__green button">Green</button>
            {/* <Button content="Check" color="accent" onClick={() => {
              alert("Это кажется невозможным, но оно сработало!");
            }}/> */}
            <Button/>
        </div>
      </main>
    </div>
  );
}

export default App;
