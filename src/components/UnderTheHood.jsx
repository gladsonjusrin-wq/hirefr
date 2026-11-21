import { content } from '../content'
import Reveal from './Reveal'

export default function UnderTheHood() {
  const { underTheHood } = content
  return (
    <section id="under-the-hood" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-hover">{underTheHood.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{underTheHood.title}</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            {underTheHood.items.map((item, i) => (
              <div key={item.term} className={`grid gap-2 px-6 py-5 sm:grid-cols-[220px_1fr] sm:gap-6 ${i !== 0 ? 'border-t border-border' : ''}`}>
                <p className="text-sm font-semibold text-navy">{item.term}</p>
                <p className="text-sm leading-6 text-navy-soft/75">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
