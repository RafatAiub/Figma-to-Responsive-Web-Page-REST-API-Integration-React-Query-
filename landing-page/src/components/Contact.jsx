export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-2 py-32 md:px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.1),_transparent_70%)]" />
      
      <div className="relative mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-white/[0.02] p-8 md:p-16 lg:p-24 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
        
        <div className="relative flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
            Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">future</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            We're currently selecting high-impact projects for Q3. If you have a vision that requires precision engineering and elite design, we should talk.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:hello@lumina.agency"
              className="group relative flex h-16 items-center justify-center gap-4 rounded-3xl bg-white px-10 text-sm font-black text-slate-950 transition-all hover:scale-105 active:scale-95"
            >
              Start Your Journey
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="flex h-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-10 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              View Pricing Guide
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-10 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
            <span>Availability: Limited</span>
            <div className="h-1 w-1 rounded-full bg-slate-700" />
            <span>Response Time: &lt; 12h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
