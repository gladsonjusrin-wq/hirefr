import { content } from '../content'
import Reveal from './Reveal'

export default function Gamification() {
  const { gamification } = content
  return (
    <section id="gamification" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-hover">{gamification.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{gamification.title}</h2>
            <p className="mt-4 text-lg text-navy-soft/80">{gamification.description}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gamification.items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-background p-5 transition-transform duration-200 hover:-translate-y-1">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green-hover">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-navy-soft/75">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
