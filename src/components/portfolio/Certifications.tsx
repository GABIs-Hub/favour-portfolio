import Reveal from './Reveal'
import { CERTIFICATIONS } from './data'

export default function Certifications() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 bg-[#F0EEE9]">
      <Reveal>
        <p className="text-[0.62rem] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">05 — Recognition</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-light leading-[1.05] mb-10 md:mb-12 text-[#0D0D0D]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}>
          Certifications &amp;<br /><em className="text-[#6B6B6B]">Achievements</em>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="p-6 md:p-7 border border-[#E0DDD6] bg-[#FAFAFA] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A96E] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              <div className="text-[2.8rem] font-light text-[#E0DDD6] leading-none mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{cert.number}</div>
              <p className="text-[0.82rem] font-medium text-[#0D0D0D] mb-1">{cert.name}</p>
              <p className="text-[0.75rem] text-[#555]">{cert.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
