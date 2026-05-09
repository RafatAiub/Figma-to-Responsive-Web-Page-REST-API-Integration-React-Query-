import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Services } from './components/Services.jsx'
import { About } from './components/About.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="animate-mesh absolute left-[-10%] top-[-10%] h-[120%] w-[120%] bg-[radial-gradient(circle_at_20%_30%,_rgba(56,189,248,0.15)_0%,_transparent_50%),radial-gradient(circle_at_80%_70%,_rgba(168,85,247,0.1)_0%,_transparent_50%)] opacity-70" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />
      </div>

      <div className="relative z-10 flex flex-col pt-6">
        <Header />
        
        <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
