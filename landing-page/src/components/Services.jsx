import { services } from '../data/siteContent'

export function Services() {
  return (
    <section id="services" className="px-2 py-8 md:px-4">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Services</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Three focused services, packaged for clarity.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-300/15">
              <Icon />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
