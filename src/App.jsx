//CSS
import './App.css';

//React (hooks)
import { useCallback, useEffect, useState } from 'react';

//Dados - data
import {wordsList} from "./data/words"

//components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App() {

    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    const [pickedWord, setPickedWord] = useState("")
    const [pickedCategory, setPickedCategory] = useState("")
    const [letters, setLetters] = useState([])

    const [guessedLetters, setGuessedLetters] = useState([])
    const [wrongLetters, setWrongLetters ] = useState([])
    const [guesses, setGuesses] = useState([4])
    const [score, setScore ] = useState(0)


    const pickWordAndCategory = () => {
      //pick a random category
      const categories = Object.keys(words);
      const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

      console.log(category);

      //pick a random word
      const word = words[category][Math.floor(Math.random() * words[category].length)];

      console.log(category, word);
      return { category, word };
    };

    //starts the scret word game
    const startGame = () => {
      //pik word and pick category
      const {word, category} = pickWordAndCategory();

      // create an array of letters

      let wordLetters = word.split("");

      wordLetters = wordLetters.map((letters) => letters.toLowerCase());

      console.log(word, category);
      console.log(wordLetters);

      //fill state
      setPickedWord(word);
      setPickedCategory(category);
      setLetters(wordLetters);
      setGameStage(stages[1].name);
    };

    //processi the letter input 
    const verifyLetter = (letter) => {
     console.log(letter)

     
    };

    //restarts the game
    const retry = () => {
      setGameStage(stages[0].name)
    };

  return (
    <div className="App">
    {gameStage === 'start' && <StartScreen startGame = {startGame} />}
    {gameStage === 'game' && <Game verifyLetter = {verifyLetter} pickedWord={pickedWord} 
    pickedCategory={pickedCategory} 
    letters={letters} 
    guessedLetters={guessedLetters}
    wrongLetters={wrongLetters}
    guesses={guesses}
    score={score}
    />}
    {gameStage === 'end' && <GameOver retry={retry}/> }
    </div>
  )
}

export default App
