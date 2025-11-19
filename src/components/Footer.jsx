import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-medium">robots hate monkeys</h3>
            <p className="text-sm text-white/60">Barcelona • Mexico • Serving everywhere</p>
          </div>
          <div className="text-sm text-white/60">
            Radical transparency • Continuous communication
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} robots hate monkeys. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
