import { useState, useEffect } from 'react'
import { getWord } from './script'

function App() {
  const [secretWord, setSecretWord]= useState('');
  useEffect(()=>{
    getWord().then(word=>setSecretWord(word));
  },[]);

  return (
    <>
      <h1>assembly-endgame</h1>
      <p>{secretWord}</p>
    </>
  )
}

export default App
