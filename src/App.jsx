import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'

const App = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
    </main>
  )
}

export default App