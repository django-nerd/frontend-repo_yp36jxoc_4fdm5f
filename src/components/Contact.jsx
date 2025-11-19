import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we will reach out shortly!')
  }

  return (
    <section id="contact" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 sm:px-10 md:px-12 lg:px-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s talk</h2>
        <p className="mt-2 text-white/70">Free consultation. Radical transparency from day one.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40" placeholder="Your name" required />
          <input type="email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40" placeholder="Email" required />
          <textarea rows={4} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40" placeholder="Tell us briefly about your needs" required />
          <button className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-orange-400">Request consultation</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
