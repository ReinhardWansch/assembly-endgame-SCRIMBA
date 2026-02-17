import { useState, useEffect } from 'react';
import { getWord, getAlphabetChars, getWordLetters } from './script';
import { languages as codingLanguages } from './script';
import SecretWord from './components/SecretWord';
import CharacterTable from './components/CharacterTable';
import Languages from './components/Languages';

function App() {
  const [languages, setLanguages] = useState(codingLanguages);
  const [secretWord, setSecretWord] = useState('');
  const [characters, setCharacters] = useState(getAlphabetChars);

  useEffect(() => {
    getWord().then(word => setSecretWord(word));
  }, []);

  function checkCharacter(id) {
    setCharacters(prev => prev.map((char) => char.id === id ? { ...char, status: "fail" } : char))
  }

  return (
    <div className="h-screen bg-bg pt-15 flex flex-col items-center gap-5">
      <h1 className="text-headline text-2xl">Assembly: Endgame</h1>
      <p className="text-paragraph text-center">
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>
      <Languages languages={languages} />
      <SecretWord letters={getWordLetters(secretWord)} />
      <CharacterTable characters={characters} handleClick={checkCharacter} />
      {/* <div className="text-xl p-3 text-[#FFD742]">testen</div>  */}
    </div>
  )
}

export default App
