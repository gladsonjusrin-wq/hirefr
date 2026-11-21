import { Check } from 'lucide-react'
import { content } from '../content'
import Reveal from './Reveal'

function ListCard({ title, items }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-2xl font-bold text-navy">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-navy-soft/80">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-tint text-green-hover">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function WhoWhy() {
  const { whoWhy } = content
  return (
    <section id="who-why" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        <Reveal><ListCard title={whoWhy.who.title} items={whoWhy.who.items} /></Reveal>
        <Reveal delay={80}><ListCard title={whoWhy.why.title} items={whoWhy.why.items} /></Reveal>
      </div>
    </section>
  )
}
