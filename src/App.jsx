import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for(let i=1; i<=length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }

    setPassword(pass)
  },[length, numAllowed, charAllowed, setPassword])  

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
      
      <h1 className="text-2xl font-semibold text-white text-center mb-6">
        Password Generator
      </h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Generated Password"
          value={password}
          readOnly
          className="w-full px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={passwordGenerator}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition"
        >
          Generate
        </button>
      </div>

      <div className="flex flex-col gap-3 text-white">
        
        <div className="flex items-center justify-between">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label>Include Numbers</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Include Special Characters</label>
        </div>

      </div>
    </div>
  </div>
)

}

export default App
