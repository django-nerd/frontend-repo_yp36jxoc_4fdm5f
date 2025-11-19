import React from 'react'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10 md:px-12 lg:px-16">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white">
          robots <span className="text-orange-400">hate</span> monkeys
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#partners" className="hover:text-white">Partners</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#models" className="hover:text-white">Models</a>
          <a href="#contact" className="rounded-lg bg-orange-500 px-3 py-1.5 font-medium text-black hover:bg-orange-400">Get in touch</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
