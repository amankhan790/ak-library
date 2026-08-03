import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Facilities from './components/Facilities'
import Plans from './components/Plans'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Facilities />
      <Plans />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

export default App