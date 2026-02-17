import { useState, useEffect } from 'react';
import { getWord, getAlphabetChars, getWordLetters } from './script';
import SecretWord from './components/SecretWord';
import CharacterTable from './components/CharacterTable';

function App() {
  const [secretWord, setSecretWord] = useState('');
  const [characters, setCharacters] = useState(getAlphabetChars);

  useEffect(() => {
    getWord().then(word => setSecretWord(word));
  }, []);

  function checkCharacter(id) {
    setCharacters(prev=>prev.map((char)=> char.id===id ? {...char, status: "fail"} : char))
  }

  return (
    <div className="h-screen bg-bg pt-15 flex flex-col items-center gap-5">
      <h1 className="text-headline text-2xl">Assembly: Endgame</h1>
      <p className="text-paragraph">
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>
      <SecretWord letters={getWordLetters(secretWord)} />
      <CharacterTable characters={characters} handleClick={checkCharacter}/>
    </div>
  )
}

export default App
