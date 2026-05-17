import { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Certifications from './Certifications'
import Contact from './Contact'
import Footer from './Footer'

export default function FavourPortfolio() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Outfit:wght@300;400;500&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  return (
    <div className="bg-[#FAFAFA] text-[#0D0D0D] scroll-smooth" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
      <style>{`
        @keyframes fo-fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fo-growX  { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes fo-tick   { 0%, 100% { opacity: 0.7; transform: scaleY(1); } 50% { opacity: 0.3; transform: scaleY(0.4); } }
        .fo-a1   { animation: fo-fadeUp 0.7s 0.10s both; }
        .fo-a2   { animation: fo-fadeUp 0.7s 0.30s both; }
        .fo-a3   { animation: fo-fadeUp 0.7s 0.70s both; }
        .fo-rule { animation: fo-growX  1.0s 0.80s both; transform-origin: left; }
        .fo-tick { animation: fo-tick   1.8s ease-in-out infinite; }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}
