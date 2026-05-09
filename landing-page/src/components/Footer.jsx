import { socialLinks } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="px-2 py-12 md:px-4">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/5 bg-white/[0.01] px-8 py-10 md:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
              <span className="text-xl font-black tracking-tighter text-white uppercase">Lumina</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Defining the cutting edge of digital product design and engineering since 2024.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/5 pt-8 text-[10px] font-bold tracking-[0.1em] text-slate-600 uppercase md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Lumina Creative Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
