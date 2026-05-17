import Reveal from './Reveal'
import { SKILLS } from './data'

export default function Skills() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 bg-[#FAFAFA]">
      <Reveal>
        <p className="text-[0.62rem] tracking-[0.3em] uppercase text-[#C8A96E] mb-3 text-center">04 — Expertise</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-light leading-[1.05] mb-8 md:mb-10 text-[#0D0D0D] text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}>
          Skills &amp;<br /><em className="text-[#6B6B6B]">Strengths</em>
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span key={skill} className="text-[0.72rem] tracking-widest px-4 py-2 border border-[#E0DDD6] text-[#444] bg-[#FAFAFA] hover:border-[#C8A96E] hover:text-[#0D0D0D] transition-all duration-300 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
