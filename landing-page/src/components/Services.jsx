import { services } from '../data/siteContent'

export function Services() {
  return (
    <section id="services" className="px-2 py-24 md:px-4">
      <div className="flex flex-col items-center text-center">
        <span className="inline-block rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-fuchsia-400 uppercase">
          Solutions
        </span>
        <h2 className="mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          High-performance services for the digital age.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-slate-400">
          We don't just build websites. We engineer digital assets that scale with your ambitions.
        </p>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon, tag }, i) => (
          <article
            key={title}
            className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] ${
              i === 0 ? 'lg:col-span-2 lg:flex-row lg:items-center lg:gap-12' : ''
            }`}
          >
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 text-white ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:ring-white/20 ${
              i === 0 ? 'lg:h-24 lg:w-24' : ''
            }`}>
              <Icon />
            </div>
            
            <div className={i === 0 ? 'mt-8 lg:mt-0' : 'mt-8'}>
              <div className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">{tag}</div>
              <h3 className={`mt-4 font-bold text-white transition-colors group-hover:text-cyan-300 ${
                i === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'
              }`}>
                {title}
              </h3>
              <p className={`mt-4 leading-relaxed text-slate-400 group-hover:text-slate-300 ${
                i === 0 ? 'text-lg' : 'text-sm'
              }`}>
                {description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-white">
                <span>Learn more</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl transition-all group-hover:bg-cyan-500/10" />
          </article>
        ))}
      </div>
    </section>
  )
}
