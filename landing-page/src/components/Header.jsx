import { navigationLinks, brand } from '../data/siteContent'

export function Header() {
  return (
    <header className="sticky top-6 z-50 mx-auto w-full max-w-5xl px-4">
      <nav className="glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-2xl transition-all duration-300 hover:bg-white/[0.05]">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white shadow-lg transition-transform group-hover:rotate-12">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-black tracking-tighter text-white uppercase">{brand.name}</div>
            <div className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">{brand.subtitle}</div>
          </div>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-xs font-bold text-slate-400 transition-all hover:bg-white/5 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-2.5 text-xs font-black text-slate-950 transition-all hover:scale-105"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-200 to-white transition-transform group-hover:translate-x-0" />
        </a>
      </nav>
    </header>
  )
}
