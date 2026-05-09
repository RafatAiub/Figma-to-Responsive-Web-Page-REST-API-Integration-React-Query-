import { socialLinks } from '../data/siteContent'

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-8 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-slate-400 backdrop-blur md:flex-row md:items-center md:justify-between md:px-6"
    >
      <p>Copyright (c) {new Date().getFullYear()} Northstar Studio. All rights reserved.</p>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/40 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  )
}
