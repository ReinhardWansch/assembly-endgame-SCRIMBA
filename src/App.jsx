import { useState, useEffect } from "react";
import { getWord, getAlphabetChars, getWordLetters } from "./script";
import { languages as codingLanguages } from "./script";
import GameInfo from "./components/GameInfo";
import SecretWord from "./components/SecretWord";
import Languages from "./components/Languages";
import CharacterTable from "./components/CharacterTable";

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    });
  }, []);

  function attempt(char, charId) {
    setAttempts(prev => prev - 1);
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
    const killThis = languages.find(lang => !lang.isDead);
    killThis.isDead = true;
    setLanguages(prev => prev.map(lang => killThis.id == lang.id ? killThis : lang));
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
      <SecretWord letters={secretWord} />
      <CharacterTable
        characters={characters}
        handleClick={attempt}
        isGameOver={isGameOver}
        isLoading={isLoading}
      />

      {/* DEBUG */}
      <p className="text-white">{isWon ? "gewonnen" : isLost ? "verloren" : "läuft"}</p>
      <p className="text-white">isGameOver: {isWon.toString()}</p>
      <p className="text-white">{attempts}</p>
    </div>
  )
}

export default App

