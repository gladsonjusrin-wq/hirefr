import { content } from '../content'
import Reveal from './Reveal'

export default function PracticeArena() {
  const { practiceArena } = content
  return (
    <section id="practice-arena" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-hover">{practiceArena.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{practiceArena.title}</h2>
            <p className="mt-4 text-lg text-navy-soft/80">{practiceArena.description}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceArena.items.map((item, i) => {
            const Icon = item.icon
            const featured = item.featured
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className={`relative h-full rounded-2xl border p-6 shadow-card transition-transform duration-200 hover:-translate-y-1 ${featured ? 'border-navy bg-navy text-white' : 'border-border bg-white'}`}>
                  {item.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-green px-2.5 py-1 text-xs font-semibold text-navy">{item.tag}</span>
                  )}
                  <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${featured ? 'bg-white/10 text-green' : 'bg-green-tint text-green-hover'}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className={`text-lg font-semibold ${featured ? 'text-white' : 'text-navy'}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${featured ? 'text-slate-300' : 'text-navy-soft/75'}`}>{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
