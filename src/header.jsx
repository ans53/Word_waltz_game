import { clsx } from 'clsx';
import { useState } from 'react';
import Confetti from 'react-confetti';
import './header.css';
import { languages } from './languages.js';
import { getFarewell } from './messages.js';
import { getSuccess } from './sucess.js';
import { randomWords } from './words.js';
function App() {
  //statevalues

  const [word, setword] = useState(() => randomWords()); 
  const [guessletter, setGuessedletter] = useState([])
  const [hasStarted, setHasStarted] = useState(false);
   
   
  //countvalues
  const WrongGuessCount = guessletter.filter(
  letter => !word.toUpperCase().includes(letter)
).length;

  let isGameWon = word.split("").every(letter => guessletter.includes(letter.toUpperCase()))
  let isGameLost = WrongGuessCount > languages.length - 2
  let isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter=guessletter[guessletter.length-1]
const isLastGuessInCorrect =
  lastGuessedLetter && !word.toUpperCase().includes(lastGuessedLetter.toUpperCase());


  //Language List
  const languageList = languages.map((language, index) => {
    const isLanguageLost = index < WrongGuessCount
    return (<div
      className={`chip ${isLanguageLost ? "lost" : ""}`}
      key={language.name}
      style={{
        backgroundColor: language.backgroundColor,
        color: language.color,
        position: 'relative',
        padding: '10px',
        borderRadius: '10px',
        margin: '20px 10px 0px 0px',
      }}
    >
      {language.name}
    </div>
    )
  });


  function addGuessletter(letter) {
   
     setHasStarted(true);
    setGuessedletter(prevletter => {
      return prevletter.includes(letter) ? prevletter : [...prevletter, letter];
    })
  }


  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const keyboard_keys = alphabets.split("").map((keys) => {
    const isGuessed = guessletter.includes(keys)
    const isCorrect = isGuessed && word.toUpperCase().includes(keys)
    const isWrong = isGuessed && !word.toUpperCase().includes(keys)
    const classNamebutton = clsx({
      correct: isCorrect,
      wrong: isWrong
    })
    return (
      <button
        className={classNamebutton}
        disabled={isGameOver}
        aria-disabled={guessletter.includes(keys)}
        key={keys}
        onClick={() => (
          addGuessletter(keys)
        )}
      >{keys.toUpperCase()}</button>
    )
  });

  const wordletter = word.split("").map((w,index) => {
     const ShouldRevealLetter=isGameLost||guessletter.includes(w.toUpperCase());
    const letterClassName=clsx(
      isGameLost&&!guessletter.includes(w.toUpperCase())&&"missed-letter"
    )
    return (<span key={index} className={letterClassName}>{
      ShouldRevealLetter ? w.toUpperCase() : " "}</span>
    )
  })
  const WinorLose = clsx({
    Win: isGameWon,
    Lost: isGameOver
  })
  const gameStatusclass = clsx("game-status", {
    statusWon: isGameWon,
    statusLost: isGameLost
  })

  function startNewGame(){
    setword(randomWords())
    setGuessedletter([])
  }

  return (
    <main>
      {isGameWon &&<section className='confetti'><Confetti
        recycle={false}
        numberOfPieces={1000}/></section>}
      <header>
        
        <h1>EndGame: World Waltz</h1>
        <p>Guess the word within 8 Attempt
          to save Programming Languages from Elemination</p>
      </header>
     <section className={gameStatusclass}>
  {isGameOver ? (
    !isGameLost ? (
      <h2>🏆 Victory! 🎯 Well Played! 👏🔥</h2>
    ) : (
      <>
        <h2>⚠️☠️ Game Over: You Lose ☠️⚠️</h2>
        <br />
        <p> 😢 Go Code in Assembly 😢</p>
      </>
    )
  ) : (
    hasStarted && (   // ✅ only one set of braces
      isLastGuessInCorrect ? (
        <p className="Farewell-message">
          {getFarewell(languages[WrongGuessCount - 1])}
        </p>
      ) : (
        <p className="Success-message">
          {getSuccess(languages[WrongGuessCount])}
        </p>
      )
    )
  )}
</section>

      <section className='languages'>
        {languageList}
      </section>
      <section className='letters'

      >
        {wordletter}
      </section>
      <section className='keyboard'>
        {keyboard_keys}
      </section>
      {isGameOver && <button className='new-game' onClick={startNewGame}>New Game</button>}
    </main>

  );
}
export default App;