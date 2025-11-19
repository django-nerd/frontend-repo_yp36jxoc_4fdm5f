import React from 'react'
import { User } from 'lucide-react'

const team = [
  {
    name: 'Federico Crivellaro',
    role: 'E‑commerce management, Development',
  },
  {
    name: 'Dave Moore',
    role: 'Business development, Customer success',
  },
  {
    name: 'Andrea Simon',
    role: 'Branding & design, Storytelling',
  },
]

function Team() {
  return (
    <section className="w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">The core trio</h2>
          <span className="text-sm text-white/60">30+ years combined expertise</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-orange-400">
                <User size={22} />
              </div>
              <h3 className="text-lg font-medium">{m.name}</h3>
              <p className="text-sm text-white/70">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
