import { useState, useEffect } from 'react'
import { getWord, getAlphabetChars } from './script'
import CharacterTable from './components/CharacterTable';

function App() {
  const [secretWord, setSecretWord] = useState('');
  const [characters, setCharacters] = useState(getAlphabetChars);

  useEffect(() => {
    getWord().then(word => setSecretWord(word));
  }, []);

  function checkCharacter(id) {
    console.log(`checkCharacter(${id})`); ///DEBUG
    setCharacters(prev=>prev.map((char)=> char.id===id ? {...char, status: "fail"} : char))
  }

  return (
    <div className="h-screen bg-bg pt-15 flex flex-col items-center">
      <h1 className="text-headline">Assembly: Endgame</h1>
      <p className="text-paragraph">
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>
      <CharacterTable characters={characters} handleClick={checkCharacter}/>
    </div>
  )
}

export default App
