import Reveal from './Reveal'
import { PROJECTS } from './data'

function PlaceholderImage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-[#FAFAFA] gap-2">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M9 21V9" />
      </svg>
      <span className="text-[0.6rem] tracking-[0.2em] uppercase opacity-70 text-center">Images Coming Soon</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-16 md:py-24 bg-[#F0EEE9]">
      <Reveal>
        <p className="text-[0.62rem] tracking-[0.3em] uppercase text-[#C8A96E] mb-3 text-center">03 — Work</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-light leading-[1.05] mb-10 md:mb-12 text-[#0D0D0D] text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}>
          Selected<br /><em className="text-[#6B6B6B]">Projects</em>
        </h2>
      </Reveal>

      {/* Mobile: single column | Desktop: 3-col grid */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {PROJECTS.map((project, i) => (
          <Reveal key={i} delay={i * 100} className={project.featured ? 'md:col-span-2' : ''}>
            <div className="bg-[#FAFAFA] overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className={`relative overflow-hidden bg-gradient-to-br from-[#E8E5DF] to-[#D8D4CC] ${project.featured ? 'h-56 md:h-80' : 'h-48 md:h-56'}`}>
                <PlaceholderImage />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-4 md:p-5">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#C8A96E] mb-1">{project.tag}</p>
                <h3 className="text-[1.15rem] md:text-[1.25rem] font-normal text-[#0D0D0D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{project.name}</h3>
                <p className="text-[0.78rem] text-[#555] mt-1">{project.location}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
