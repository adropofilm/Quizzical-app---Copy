import { useState } from "react";
import topShape from "./assets/smileLarge.png";
import bottomShape from "./assets/skull-1.png";
import Question from "./Components/Questions/fetchQuestions";
import "./App.css";
import useSound from "use-sound";
import transitionSfx from "./assets/sounds/transition_up.wav";
import handleButton from "./Components/handleButton";

function App() {
  const [gameBegan, setGameBegan] = useState(false);
  const [play] = useSound(transitionSfx);
  function handleClick() {
    play();
    setGameBegan(true);
  }

  return (
    <main>
      <div className="background"> </div>
      <section>
        <img className="topShape" src={topShape} alt="" />
        {gameBegan ? (
          <section className="question-container">
            <Question />
          </section>
        ) : (
          <section className="welcome-container">
            <h1>
              Welcome to Quizzical by {""}
              <a href="https://github.com/rcmtcristian">rcmtcristian</a>
            </h1>
            <button className="startGame--button" onClick={handleClick}>
              Start Game
            </button>
            <handleButton />
          </section>
        )}
        <img className="bottomShape" src={bottomShape} alt="" />
      </section>
    </main>
  );
}

export default App;
