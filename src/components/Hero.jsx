import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient + noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pt-24 sm:px-10 md:px-12 lg:px-16 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-orange-400" />
          Sustainable e‑commerce growth • Barcelona • Mexico • Worldwide
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          robots hate monkeys
          <span className="block text-lg font-normal text-white/70 sm:text-xl">Boutique partners for sustainable e‑commerce growth</span>
        </h1>

        <p className="max-w-2xl text-white/80">
          A small, senior trio blending development, marketing, branding, and customer success to scale stores with radical transparency and continuous communication.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#services" className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-orange-400">Explore services</a>
          <a href="#models" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Partnership models</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
