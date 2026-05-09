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
      className="relative grid min-h-[80vh] flex-1 items-center gap-16 px-2 py-20 md:px-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12"
    >
      <div className="z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-[10px] font-bold tracking-[0.4em] text-cyan-400 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
          </span>
          {heroLabel}
        </div>
        
        <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {heroHeading.split(' ').map((word, i) => (
            <span key={i} className={i > 5 ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          {heroBody}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          {heroActions.map(({ label, href, primary }) => (
            <a
              key={label}
              href={href}
              className={`group relative overflow-hidden rounded-full px-8 py-4 text-sm font-bold tracking-wide transition-all ${
                primary
                  ? 'bg-white text-slate-950 hover:bg-cyan-50'
                  : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10">{label}</span>
              {primary && (
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-200 to-white transition-transform group-hover:translate-x-0" />
              )}
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-12 border-t border-white/10 pt-10">
          {heroStats.map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="mt-1 text-xs font-medium tracking-widest text-slate-500 uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative lg:mt-0">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl" aria-hidden="true" />
        
        <div className="relative space-y-6">
          <div className="glass rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Network_Optimizer.sh</div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              {heroFeatureCards.map(({ title, copy }, i) => (
                <div key={title} className={`rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] ${i === 0 ? 'ring-1 ring-cyan-500/30' : ''}`}>
                  <div className="text-xs font-bold text-white uppercase tracking-tighter">{title}</div>
                  <div className="mt-2 text-[11px] leading-relaxed text-slate-400">{copy}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass flex items-center justify-between rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 ring-1 ring-fuchsia-500/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Edge Deployment</div>
                <div className="text-[10px] text-slate-400">Deployed globally in 142ms</div>
              </div>
            </div>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
