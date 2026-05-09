export function Contact() {
  return (
    <section
      id="contact"
      className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/5 px-6 py-12 text-center backdrop-blur"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Ready to start your next project?
      </h2>
      <p className="mt-4 max-w-xl text-lg text-slate-300">
        We're currently accepting new clients for agency-grade web builds. Reach out today and let's create something exceptional together.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="mailto:hello@northstar.studio"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          Email Us
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Book a Call
        </a>
      </div>
    </section>
  )
}
