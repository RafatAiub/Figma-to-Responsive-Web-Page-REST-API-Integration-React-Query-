import { navigationLinks, brand } from '../data/siteContent'

export function Header() {
  return (
    <header className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.32)] backdrop-blur md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="flex items-center gap-3 self-start">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/15 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-300/20">
            Logo
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-[0.24em] text-white uppercase">
              {brand.name}
            </span>
            <span className="text-sm text-slate-400">{brand.subtitle}</span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-2 text-sm text-slate-300 md:justify-center"
        >
          {navigationLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-3 py-2 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          Get Started
        </a>
      </div>
    </header>
  )
}
