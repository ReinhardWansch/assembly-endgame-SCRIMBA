import { useState, useEffect } from 'react'
import { getWord } from './script'

function App() {
  const [secretWord, setSecretWord] = useState('');
  useEffect(() => {
    getWord().then(word => setSecretWord(word));
  }, []);

  return (
    <div className="h-screen bg-bg pt-15 flex flex-col items-center">
      <h1 className="text-headline">Assembly: Endgame</h1>
      <p className="text-paragraph">
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>
    </div>
  )
}

export default App
