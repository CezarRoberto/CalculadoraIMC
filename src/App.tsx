import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [weight, setWeight]: any = useState("");
  const [height, setHeight]: any = useState("");
  const [message, setMessage] = useState("");

  function result() {
    const alt = height / 100;
    const imc = weight / (alt * alt);

    if(imc < 18.5) {
      setMessage("You're too thin, IMC: " + imc.toFixed(2))
    } else if(imc < 18.5 && imc < 24.9) {
      setMessage("You're Normal, IMC: " + imc.toFixed(2))
    } else if(imc < 24.9 && imc < 30.0) {
      setMessage("You're overweight, IMC: " + imc.toFixed(2))
    } else if(imc > 30) {
      setMessage("Waring! Obesity, IMC: " + imc.toFixed(2))
    }
  }
  return (
    <div className="App">
      <div>
        <h1>Calculador IMC</h1>
        <p>Let's find out your IMC 🌳</p>
      </div>
      <div className="box-container">
        <input
          type="text"
          placeholder="Weight (KG) "
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Height (M) "
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></input>
        <button onClick={result}>Find out</button>
      </div>
      <div className="message">
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default App;
