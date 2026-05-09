import { aboutHighlights } from '../data/siteContent'

export function About() {
  return (
    <section
      id="about"
      className="mt-8 grid gap-6 rounded-3xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur md:grid-cols-[1.35fr_0.65fr] md:items-center md:px-6"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">About</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">
          Built for teams that want a clean first impression without sacrificing speed.
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          This layout keeps the message focused, the hierarchy clear, and the implementation
          light enough to perform well on real devices and on PageSpeed checks.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
        {aboutHighlights.map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm font-medium text-slate-200"
          >
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}
