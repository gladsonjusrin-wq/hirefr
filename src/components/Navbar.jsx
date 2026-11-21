import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { content } from '../content'

export default function Navbar() {
  const { nav } = content
  const [open, setOpen] = useState(false)

  const scrollToWaitlist = (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#" className="flex items-center gap-3" aria-label="HiredFr home">
          <img src="/logo.jpeg" alt="HiredFr logo" className="h-10 w-auto" width="40" height="40" />
        </a>

        <div className="hidden sm:block">
          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="inline-flex min-h-11 items-center rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
          >
            {nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-navy sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-white px-6 py-4 sm:hidden">
          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-green-hover"
          >
            {nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}
