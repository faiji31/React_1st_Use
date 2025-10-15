import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
        <Person></Person>

        <Person></Person>
         <Games></Games>
      
    </>
  )
}

function Person(){
  const age=17;
  const name = 'faiji';
  return(

          <p>I am a person {name} {age}</p>

  )
}
function Games(){
  return(
     <h1>Playing Games</h1>
  )
}

export default App
