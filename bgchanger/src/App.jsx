import { useState } from 'react'

function App() {
 
  let [color, setColor] = useState("olive")

  const changeColor = () => {
    let colors = ['white','black','blue','red','green','purple']
    let randomColor = Math.floor(Math.random() * colors.length)
    console.log(colors[randomColor]);
    
    color = setColor(colors[randomColor])

    document.body.style.backgroundColor = colors[randomColor]
  }
  return (
    <>
      <div className='body w-full h-screen duration-200' 
      style={{backgroundColor: color}}
      ></div>
      <button onClick={changeColor}>Change color</button>
    </>
  )
}

export default App
