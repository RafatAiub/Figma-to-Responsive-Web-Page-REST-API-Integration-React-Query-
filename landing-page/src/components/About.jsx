import { aboutHighlights } from '../data/siteContent'

export function About() {
  return (
    <section id="about" className="px-2 py-24 md:px-4">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">Process</span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Precision engineering meets creative vision.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-400">
            At Lumina, we don't follow trends—we set the standard. Our methodology is rooted in 
            mathematical precision and human-centric design. Every line of code is optimized 
            for speed, and every pixel is placed with intent.
          </p>
          
          <div className="mt-12 space-y-4">
            {aboutHighlights.map((label) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-[3rem] p-2">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              alt="Cybersecurity and Code" 
              className="rounded-[2.5rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-8 shadow-2xl">
            <svg className="h-full w-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l.707.707M6.364 17.636l-.707.707M12 21v-1m0-12a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
