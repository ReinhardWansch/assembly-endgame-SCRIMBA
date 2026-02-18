import { useState, useEffect } from "react";
import { getWord, getAlphabetChars, getWordLetters } from "./script";
import { languages as codingLanguages } from "./script";
import GameInfo from "./components/GameInfo";
import SecretWord from "./components/SecretWord";
import Languages from "./components/Languages";
import CharacterTable from "./components/CharacterTable";

function App() {
  const [languages, setLanguages] = useState(codingLanguages);
  const [secretWord, setSecretWord] = useState([]);
  const [characters, setCharacters] = useState(getAlphabetChars);
  const [attempts, setAttempts] = useState(8);
  
  const isWordDiscovered = secretWord.every(letter => letter.discovered);
  const isWon = (attempts > 0) && isWordDiscovered;
  const isLost = (attempts === 0) && !isWordDiscovered;
  const isGameOver = isWon || isLost;

  useEffect(() => {
    getWord().then((word) => {
      console.log(word); ///DEBUG
      setSecretWord(getWordLetters(word));
    });
  }, []);

  function attempt(char, charId) {
    setAttempts(prev => prev - 1);
    let isHit = updateSecretWord(char);
    updateCharacters(charId, isHit);
  }

  function updateSecretWord(char) {
    let isHit= false;
    const currentSecretWord = secretWord.map(letter => {
      if (letter.char === char) {
        isHit = true;
        return { ...letter, discovered: true };
      }
      else return letter;
    });
    isHit && setSecretWord(currentSecretWord);
    return isHit;
  }

  function updateCharacters(charId, isHit) {
    let charStatus = "";
    charStatus = isHit ? "hit" : "fail";
    setCharacters(prev => prev.map(charI =>
      charI.id === charId ? { ...charI, status: charStatus } : charI
    ));
  }

  return (
    <div className="h-screen bg-bg pt-15 flex flex-col items-center gap-5">
      <h1 className="text-headline text-2xl">Assembly: Endgame</h1>
      <p className="text-paragraph text-center">
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>
      <Languages languages={languages} />
      <GameInfo isWon={isWon} isLost={isLost} languages={languages} />
      <SecretWord letters={secretWord} />
      <CharacterTable characters={characters} handleClick={attempt} />

      <p className="text-white">{isWon ? "gewonnen" : isLost ? "verloren" : "läuft"}</p>
      <p className="text-white">{attempts}</p>
    </div>
  )
}

export default App







/*###########*/
/*## DEBUG ##*/
/*###########*/

const testWord = [
  {
    id: 1,
    char: "H",
    discovered: false
  },
  {
    id: 2,
    char: "A",
    discovered: false
  },
  {
    id: 3,
    char: "L",
    discovered: false
  },
  {
    id: 4,
    char: "L",
    discovered: false
  },
  {
    id: 5,
    char: "O",
    discovered: false
  }
];
