import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    </>
  )
}

export default App
