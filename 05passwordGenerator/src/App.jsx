
import { useState, useCallback, useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumber] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState("")


  // useRef Hook

  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += " !@#$%^&*()_+{}[]'="
    }

    for (let i = 1; i <= length; i++) {
      let char = (Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed])
  

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])



  const copyPasswordTOClipBoard = useCallback(()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  
  }, [password])


  return (
    <>


      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-700'>
        <h1  className=" text-center text-white">Password Generastor</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          
          <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' ref={passwordRef}  readOnly />
          
          <button onClick={copyPasswordTOClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> {setlength(e.target.value)}} />
            <label className="text-white">Length: {length} </label>
          </div>
          <div className='items-center flex gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} onChange={() => { setChar((prev) => !prev) }} />
            <label className='text-white' htmlFor='charInput'>Charecters</label>
          </div>
          <div className='items-center flex gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} onChange={() => { setNumber((prev) => !prev) }} />
            <label  className='text-white' htmlFor='charInput'>Number</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App



