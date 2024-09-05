import React, { useState, useCallback, useEffect, useRef } from 'react'
function App() {

    const [length, setLength] = useState(8)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (includeNumbers) str += "0123456789"
      if (includeSymbols) str += "!@#$%^&*-_+=[]{}~`"

      for(let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
        setPassword(pass)

    }, [length, includeNumbers, includeSymbols, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 100);
      window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
      passwordGenerator()
    }, [length, includeNumbers, includeSymbols, passwordGenerator])

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-5 py-4 pb-10 align-middle mt-60 bg-gray-800 text-white ">
      <h1 className=' text-2xl text-white text-center py-5'>Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0 hover:opacity-80'
        >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={includeNumbers}
          id="numberInput"
          onChange={() => {
              setIncludeNumbers((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={includeSymbols}
              id="characterInput"
              onChange={() => {
                  setIncludeSymbols((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  )

}

export default App
