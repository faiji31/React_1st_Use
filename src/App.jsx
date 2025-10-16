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


export default App
