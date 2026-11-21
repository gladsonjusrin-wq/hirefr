import { content } from '../content'

export default function Footer() {
  const { footer } = content
  return (
    <footer className="bg-navy-soft text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img src="/logo.jpeg" alt="HiredFr logo" className="h-9 w-auto rounded-sm" width="36" height="36" />
          <p className="text-sm text-slate-300">{footer.site}</p>
          <a href={`mailto:${footer.email}`} className="text-sm text-green transition-colors hover:text-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy-soft">
            {footer.email}
          </a>
        </div>
        <p className="text-sm text-slate-400">{footer.copyright}</p>
      </div>
    </footer>
  )
}
