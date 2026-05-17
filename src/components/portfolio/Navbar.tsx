import { useState, useEffect } from 'react'
import { NAV_LINKS } from './data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 backdrop-blur-md transition-all duration-300 ${scrolled || menuOpen ? 'bg-[#FAFAFA]/95 border-b border-[#E0DDD6] shadow-sm' : 'bg-transparent'}`}>
        <span className="text-2xl font-semibold tracking-widest text-[#0D0D0D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          F · O
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-[#6B6B6B] hover:text-[#0D0D0D] no-underline transition-colors duration-300">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-none p-0"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-[#0D0D0D] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0D0D0D] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0D0D0D] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed top-[57px] left-0 right-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E0DDD6] transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col list-none px-6 py-5 gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={handleLinkClick} className="text-[0.75rem] font-medium tracking-[0.22em] uppercase text-[#6B6B6B] hover:text-[#0D0D0D] no-underline transition-colors duration-300 block py-1">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
