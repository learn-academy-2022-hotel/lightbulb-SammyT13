import React from 'react'
import LightSwitch from './components/LightSwitch';
import './App.css';

// Display component only
const App = () => {
  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <h2>Turn the lights on or off, by clicking any box.</h2>
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
    </>
  )
}

export default App
