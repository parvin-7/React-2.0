import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumber] = useState(false)
  const [charAllow,setChar] = useState(false)
  const [password,setPassword] = useState("")


  //useRef hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) str+= "0123456789"
    if (charAllow) str+= "!@#$%^&*-_=+[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length,numberAllow,charAllow]) 

const copypassword = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,8)
  window.navigator.clipboard.writeText(password)
},
[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllow,charAllow,passwordGenerator])


  return (
    <>
      <h1 className='text-4xl text-center text-amber-200'>Password generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-amber-200 bg-gray-500">
        <input type="text" value={password} className='text-black outline-none py-1 px-3 my-1'placeholder='Password' readOnly ref={passwordRef} />
        <button onClick={copypassword} className='mx-10 py-0.5'>Copy</button>
      </div>
      <div className="text-center">
        <input onChange={(e) => {setLength(e.target.value)}} className='mx-2' type='range' value={length} min={8} max={16}/> <span className="text-amber-200">Length:{length}</span>
        <input defaultChecked={numberAllow} onChange={()=>{
          setNumber((prev) => !prev)
        }} className='mx-2' type="checkbox" value={numberAllow}/> <span className="text-amber-200">Numbers</span>
        <input defaultChecked={charAllow} onChange={()=>{
          setChar((prev) => !prev)
        }} className='mx-2' type="checkbox" value={charAllow}/> <span className="text-amber-200">characters</span>
      </div>
    </>
  )
}

export default App
