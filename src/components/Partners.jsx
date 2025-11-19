import React from 'react'

const partners = [
  'Bose',
  'Blakshop',
  'Brain Tumor Research',
  'CAT WWR',
  'ShoeAl by ShoeSize.Me',
  'Shapermint',
]

function Partners() {
  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected partners</h2>
          <span className="text-sm text-white/60">10+ years of trusted collaborations</span>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {partners.map((p) => (
            <div key={p} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/80">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
