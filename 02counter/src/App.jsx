import { useState } from 'react';
import './App.css'

function App() {
 let [counter, myCounter] =  useState(5)
  // let counter = 5
  const addValue = () =>{
    // console.log("added value:" , counter);
    
    if(counter<20){
      counter++
      myCounter(counter)
    }
    
  }
  const removeValue = () =>{
    // console.log("removed value:", counter);
   
    if(counter>0){
      counter--;
      myCounter(counter)
    }
  }
  return (
    <> 
     <h1>Hello world!</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br /> <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
