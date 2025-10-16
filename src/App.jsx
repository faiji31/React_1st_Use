import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      
      <h1>Vite + React</h1>
      <Student na="liam" dept=" CSE"></Student>
      <Student na="Aditto" dept="BBA" ></Student>
      <Student  na="aruf" dept="Marketing"></Student>
      <Player name1="Shakib" Runs="45"></Player>
      <Player name1="Tamim" Runs="15"></Player>
      <Player name1="Saif" Runs="51"></Player>
      <Salami event="Eid" Amount="1200"></Salami>
      <Salami event="JSC" Amount="1700"></Salami>
      
    </>
  )
}

function Student (props){
  console.log(props)
  return (
    <div className="student">
      <p>Name: {props.na}</p>
      <p>Dept: {props.dept}</p>
    </div>
  );
}
function Player(props){
  console.log(props)
  return(
    <div className='student'>
      <p>Name: {props.name1}</p>
      <p>Runs: {props.Runs}</p>
    </div>
  )
}

function Salami({event,Amount}){
  return(
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {Amount} </p>
    </div>
  )
}

export default App
