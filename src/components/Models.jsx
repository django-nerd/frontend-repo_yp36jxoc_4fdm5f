import React from 'react'

const models = [
  {
    title: 'E‑commerce Partner Service',
    price: 'Monthly fixed + variable %',
    desc: 'End‑to‑end partner service with a joint success percentage.'
  },
  {
    title: 'Monthly Retainer / Pre‑paid Credits',
    price: 'From 1800€ / 1200€',
    desc: 'Task‑based development, digital activities, mentoring, and training.'
  },
  {
    title: 'Custom Projects',
    price: 'Free consultation + delivery fee',
    desc: 'CRM integrations, custom apps, migrations, and more—tailored pricing.'
  },
  {
    title: 'Shopify Store Setup Package',
    price: 'Starting at 4500€',
    desc: 'Core pages, inventory data strategy, payment services, and 101 sessions.'
  }
]

function Models() {
  return (
    <section id="models" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Partnership models</h2>
          <p className="mt-2 text-white/70">Flexible structures designed for long‑term, sustainable collaboration.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((m) => (
            <div key={m.title} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6">
              <div>
                <h3 className="text-lg font-medium">{m.title}</h3>
                <p className="mt-1 text-sm text-white/70">{m.desc}</p>
              </div>
              <div className="mt-6 text-sm text-orange-400">{m.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Models
