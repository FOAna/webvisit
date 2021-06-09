import night from "./images/night.jpg";
import "./App.css";

function App() {
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
      </main>
    </div>
  );
}

export default App;
