import { useState, useEffect } from "react";
import { getWord, getAlphabetChars, getWordLetters } from "./script";
import { codingLanguages } from "./script";
import GameInfo from "./components/GameInfo";
import SecretWord from "./components/SecretWord";
import Languages from "./components/Languages";
import CharacterTable from "./components/CharacterTable";
import ResetButton from "./components/ResetButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [languages, setLanguages] = useState(codingLanguages);
  const [secretWord, setSecretWord] = useState([]);
  const [characters, setCharacters] = useState(getAlphabetChars);

  const attempts = languages.filter(lang => !lang.isDead).length - 1;
  const isWordDiscovered = secretWord.every(letter => letter.discovered);
  const isWon = (attempts > 0) && isWordDiscovered;
  const isLost = (attempts === 0) && !isWordDiscovered;
  const isGameOver = isWon || isLost;

  useEffect(resetGame, []);

  function attempt(char, charId) {
    let isHit = updateSecretWord(char);
    updateCharacters(charId, isHit);
    if (!isHit) killLanguage();
  }

  function updateSecretWord(char) {
    let isHit = false;
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

  function killLanguage() {
    const killThisRef = languages.find(lang => !lang.isDead);
    const killThis = {...killThisRef, isDead: true};
    setLanguages(prev => prev.map(lang => killThis.id == lang.id ? killThis : lang));
  }

  function resetGame() {
    setIsLoading(true);
    getWord().then((word) => {
      console.log(word); ///DEBUG
      setSecretWord(getWordLetters(word));
      setLanguages(codingLanguages);
      setCharacters(getAlphabetChars);
      setIsLoading(false);
    });
  }



  return (
    <div className="h-screen bg-bg pt-15 flex flex-col items-center gap-5">
      <h1 className="text-headline text-2xl">Assembly: Endgame</h1>
      <p className="text-paragraph text-center">
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>
      <GameInfo
        isWon={isWon}
        isLost={isLost}
        isGameOver={isGameOver}
        isLoading={isLoading}
        languages={languages}
      />
      <Languages languages={languages} />
      <SecretWord letters={secretWord} isGameOver={isGameOver} />
      <CharacterTable
        characters={characters}
        handleClick={attempt}
        isGameOver={isGameOver}
        isLoading={isLoading}
      />
      {!isLoading && isGameOver && <ResetButton onClick={resetGame}/>}
    </div>
  )
}

export default App

