import {
  heroActions,
  heroBody,
  heroFeatureCards,
  heroHeading,
  heroLabel,
  heroStats,
} from '../data/siteContent'

export function Hero() {
  return (
    <section
      id="home"
      className="grid flex-1 items-center gap-14 px-2 py-16 md:px-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-20"
    >
      <div className="max-w-2xl">
        <p className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
          {heroLabel}
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {heroHeading}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          {heroBody}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {heroActions.map(({ label, href, primary }) => (
            <a
              key={label}
              href={href}
              className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                primary
                  ? 'bg-white text-slate-950 hover:bg-slate-200'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {heroStats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="mt-1 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-fuchsia-400/15 blur-3xl" aria-hidden="true" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(14,165,233,0.18),_rgba(15,23,42,0.95))] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/70">Launch preview</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">A polished hero area</h2>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Live
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {heroFeatureCards.map(({ title, copy }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{copy}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Reading flow</span>
                <span>Optimized</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
