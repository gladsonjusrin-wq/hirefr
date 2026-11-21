import { ArrowRight } from 'lucide-react'
import { content } from '../content'
import Reveal from './Reveal'

export default function HowItWorks() {
  const { howItWorks } = content
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-hover">{howItWorks.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{howItWorks.title}</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {howItWorks.steps.map((item, i) => (
            <Reveal key={item.number} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-border bg-background p-6 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green text-sm font-bold text-navy shadow-sm">
                    {item.number}
                  </span>
                  {i < howItWorks.steps.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 text-green-hover md:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-soft/75">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
