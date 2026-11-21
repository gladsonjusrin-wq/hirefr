import { content } from '../content'
import Reveal from './Reveal'

export default function FAQ() {
  const { faq } = content
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-hover">{faq.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{faq.title}</h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-4">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 50}>
              <details className="group rounded-2xl border border-border bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2">
                  <span className="flex min-h-11 items-center justify-between gap-4">
                    {item.question}
                    <span className="text-green-hover transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-navy-soft/75">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
