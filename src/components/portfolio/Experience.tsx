import Reveal from './Reveal'
import { EXPERIENCE } from './data'

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-16 md:py-24 bg-[#FAFAFA]">
      <Reveal>
        <p className="text-[0.62rem] tracking-[0.3em] uppercase text-[#C8A96E] mb-3 text-center">02 — Experience</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-light leading-[1.05] mb-10 md:mb-12 text-[#0D0D0D] text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}>
          The Journey<br /><em className="text-[#6B6B6B]">in Architecture</em>
        </h2>
      </Reveal>

      <div className="pl-5 md:pl-6 border-l border-[#E0DDD6]">
        {EXPERIENCE.map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="relative pl-6 md:pl-8 pb-8 md:pb-10 last:pb-0 text-center">
              <div className="absolute left-[1.85rem] md:left-[2.19rem] top-1.5 w-2 h-2 rounded-full bg-[#C8A96E] text-center" />
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#888] mb-1 text-center">{item.date}</p>
              <p className="text-[1.2rem] md:text-[1.45rem] font-normal text-[#0D0D0D] mb-0.5 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {item.role}
                {item.current && (
                  <span className="ml-2 md:ml-3 text-[0.58rem] tracking-[0.18em] uppercase bg-[#EAD9B8] text-[#7A5A20] px-2 py-0.5 rounded-sm align-middle">
                    Current
                  </span>
                )}
              </p>
              <p className="text-[0.82rem] text-[#555]">{item.company} · {item.location}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
