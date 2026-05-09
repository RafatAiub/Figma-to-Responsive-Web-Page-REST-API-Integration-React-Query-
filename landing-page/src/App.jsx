import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Services } from './components/Services.jsx'
import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(244,114,182,0.12),_transparent_24%),linear-gradient(180deg,_rgba(2,6,23,0.82),_rgba(2,6,23,1))]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Services />
        <About />
        <Footer />
      </main>
    </div>
  )
}

export default App
