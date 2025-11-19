import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Partners from './components/Partners'
import Team from './components/Team'
import Models from './components/Models'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <section id="partners"><Partners /></section>
      <section id="team"><Team /></section>
      <Models />
      <Contact />
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} robots hate monkeys — Radical transparency. Continuous communication.
      </footer>
    </div>
  )
}

export default App
