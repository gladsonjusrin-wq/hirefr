import { content } from '../content'
import Reveal from './Reveal'

export default function Hero() {
  const { hero } = content
  const scrollToWaitlist = (e) => {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.18),_transparent_65%)]" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-green-tint/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <Reveal>
          <div>
            <p className="inline-flex rounded-full bg-green-tint px-4 py-1.5 text-sm font-semibold text-navy">
              {hero.badge}
            </p>
            <h1 className="mt-6 max-w-xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-navy-soft/80">{hero.subheadline}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                onClick={scrollToWaitlist}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              >
                {hero.cta}
              </a>
            </div>
            <p className="mt-4 text-sm text-navy-soft/70">{hero.note}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-green-hover">{hero.scorecard.title}</p>
                <p className="mt-1 text-sm text-navy-soft/70">{hero.scorecard.subtitle}</p>
              </div>
              <div className="rounded-full bg-green-tint px-3 py-1 text-sm font-bold text-navy">
                {hero.scorecard.overall}
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {hero.scorecard.items.map((item) => (
                <div key={item.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-navy">{item.label}</span>
                    <span className="text-navy-soft/70">{item.score}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-background">
                    <div
                      className="h-2.5 rounded-full bg-green"
                      style={{ width: `${item.score}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
