import React from 'react'
import LightSwitch from './components/LightSwitch';
import './App.css';

// Display component only
const App = () => {
  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <h2>Turn the lights on or off, by clicking any of the lightswitces.</h2>
      <br></br>
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
    </>
  )
}

export default App

