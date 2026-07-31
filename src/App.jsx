import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'

const App = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <StatsBar />
    </main>
  )
}

export default App