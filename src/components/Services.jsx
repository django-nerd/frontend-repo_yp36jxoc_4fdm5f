import React from 'react'
import { Code, Rocket, Palette, Wrench, Mail, RefreshCcw } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Full Shopify Development',
    desc: 'Shopify Plus experts building fully custom themes, headless commerce, custom apps, and integrations.'
  },
  {
    icon: Rocket,
    title: 'Digital Marketing & Advertising',
    desc: 'Strategic campaigning with a unique organic approach to growth and ROI.'
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Brand identity, storytelling, design systems, and creative direction that convert.'
  },
  {
    icon: RefreshCcw,
    title: 'E‑commerce Management Fundamentals',
    desc: 'Performance, SEO, PPC, UX, analytics, and product development foundations.'
  },
  {
    icon: Wrench,
    title: 'Ongoing Support',
    desc: 'Hands-on iteration, optimization, and continuous improvement.'
  },
  {
    icon: Mail,
    title: 'Email Marketing (Klaviyo)',
    desc: 'Klaviyo Master Silver Partner—segmented flows, data-driven automations, and high-ROI campaigns.'
  }
]

function Services() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sustainable e‑commerce growth</h2>
          <span className="text-sm text-white/60">Shopify • Marketing • Branding • Ops</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-orange-400">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-medium">{title}</h3>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
