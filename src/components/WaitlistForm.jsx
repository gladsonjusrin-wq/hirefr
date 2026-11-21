import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { content } from '../content'
import Reveal from './Reveal'

const initialValues = {
  fullName: '',
  email: '',
  college: '',
  year: '',
  major: '',
  help: '',
  botcheck: false,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function FieldError({ id, message }) {
  if (!message) return null
  return <p id={id} className="mt-2 text-sm text-red-600" role="status">{message}</p>
}

export default function WaitlistForm() {
  const { waitlist, vision } = content
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  const validate = () => {
    const next = {}
    const f = waitlist.fields
    if (!values.fullName.trim()) next.fullName = f.fullName.required
    if (!values.email.trim()) next.email = f.email.required
    else if (!emailPattern.test(values.email.trim())) next.email = f.email.invalid
    if (!values.college.trim()) next.college = f.college.required
    if (!values.year) next.year = f.year.required
    if (!values.help) next.help = f.help.required
    return next
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return
    setSubmitError('')
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus('loading')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: waitlist.subject,
          botcheck: values.botcheck,
          full_name: values.fullName.trim(),
          email: values.email.trim(),
          college: values.college.trim(),
          year_of_study: values.year,
          field_major: values.major.trim(),
          help_with: values.help,
        }),
      })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'Submission failed')
      setValues(initialValues)
      setErrors({})
      setStatus('success')
    } catch {
      setSubmitError(waitlist.errorMessage)
      setStatus('error')
    }
  }

  const inputClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-navy-soft/45 min-h-11 focus:outline-none focus:ring-2 focus:ring-green/30 ${
      hasError ? 'border-red-300 focus:border-red-400' : 'border-border focus:border-green'
    }`
  const labelClass = 'mb-2 block text-sm font-semibold text-navy'

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{vision.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">{vision.text}</p>
            <a
              href="#waitlist"
              onClick={(e) => { e.preventDefault(); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {vision.button}
            </a>
          </Reveal>
        </div>
      </section>

      <section id="waitlist" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-hover">{waitlist.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{waitlist.title}</h2>
              <p className="mt-4 text-lg text-navy-soft/80">{waitlist.description}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
              {status === 'success' ? (
                <div className="py-8 text-center" role="status" aria-live="polite">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-tint text-green-hover">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-navy">{waitlist.successTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy-soft/75">{waitlist.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <input type="checkbox" name="botcheck" checked={values.botcheck} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <input type="hidden" name="subject" value={waitlist.subject} />

                  <div>
                    <label htmlFor="fullName" className={labelClass}>{waitlist.fields.fullName.label}</label>
                    <input id="fullName" name="fullName" type="text" autoComplete="name" required value={values.fullName} onChange={handleChange} placeholder={waitlist.fields.fullName.placeholder} className={inputClass(errors.fullName)} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? 'fullName-error' : undefined} />
                    <FieldError id="fullName-error" message={errors.fullName} />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>{waitlist.fields.email.label}</label>
                    <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required value={values.email} onChange={handleChange} placeholder={waitlist.fields.email.placeholder} className={inputClass(errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
                    <FieldError id="email-error" message={errors.email} />
                  </div>

                  <div>
                    <label htmlFor="college" className={labelClass}>{waitlist.fields.college.label}</label>
                    <input id="college" name="college" type="text" autoComplete="organization" required value={values.college} onChange={handleChange} placeholder={waitlist.fields.college.placeholder} className={inputClass(errors.college)} aria-invalid={!!errors.college} aria-describedby={errors.college ? 'college-error' : undefined} />
                    <FieldError id="college-error" message={errors.college} />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="year" className={labelClass}>{waitlist.fields.year.label}</label>
                      <select id="year" name="year" required value={values.year} onChange={handleChange} className={inputClass(errors.year)} aria-invalid={!!errors.year} aria-describedby={errors.year ? 'year-error' : undefined}>
                        <option value="">{waitlist.fields.year.placeholder}</option>
                        {waitlist.fields.year.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <FieldError id="year-error" message={errors.year} />
                    </div>
                    <div>
                      <label htmlFor="major" className={labelClass}>
                        {waitlist.fields.major.label} <span className="font-normal text-navy-soft/65">{waitlist.fields.major.optional}</span>
                      </label>
                      <input id="major" name="major" type="text" value={values.major} onChange={handleChange} placeholder={waitlist.fields.major.placeholder} className={inputClass(false)} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="help" className={labelClass}>{waitlist.fields.help.label}</label>
                    <select id="help" name="help" required value={values.help} onChange={handleChange} className={inputClass(errors.help)} aria-invalid={!!errors.help} aria-describedby={errors.help ? 'help-error' : undefined}>
                      <option value="">{waitlist.fields.help.placeholder}</option>
                      {waitlist.fields.help.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <FieldError id="help-error" message={errors.help} />
                  </div>

                  {submitError && (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-green-hover disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
                  >
                    {status === 'loading' ? waitlist.submitting : waitlist.submit}
                  </button>
                  <p className="text-center text-xs text-navy-soft/70">{waitlist.consent}</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
