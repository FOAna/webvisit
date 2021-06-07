import night from "./images/night.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App__header"></header>
      <main className="App__main">
        <img className="App__background" src={night} />
      </main>
    </div>
  );
}

export default App;
