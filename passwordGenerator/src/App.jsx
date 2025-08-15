import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*_+-=~`"

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(() =>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 font-serif">
        <div className="w-full max-w-md shadow-md rounded-lg px-10 py-4 bg-gray-800 text-orange-300 ">
          <h1 className="text-white text-center my-3 text-2xl font-serif">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
            <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className=' bg-blue-500 hover:bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>

          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type='range'
                class="accent-blue-500"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label>Length: {length}</label>
              <div className="flex items-center gap-x-1">
                <input
                  type='checkbox'
                  id='numberInput'
                  class="accent-blue-500" 
                  onChange={(e) => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />

                <label htmlFor='numberInput'>Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  class="accent-blue-500" 
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor="characterInput">Characters</label>
              </div>

            </div>

          </div>
        </div>
      </div>
    </> 
  )
}

export default App
