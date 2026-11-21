import { content } from '../content'
import Reveal from './Reveal'

export default function Problem() {
  const { problem } = content
  return (
    <section id="problem" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-hover">{problem.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{problem.title}</h2>
            <p className="mt-4 text-lg text-navy-soft/80">{problem.description}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problem.items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-tint text-green-hover">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy-soft/75">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
