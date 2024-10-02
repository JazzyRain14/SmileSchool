import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/HeroSection'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'

function App() {

  return (
    <>
      <HeroSection />
      <Section2 />
      <Section3/>
    </>
  )
}

export default App
