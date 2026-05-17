import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-24 bg-[#1A1A1A]">
      <Reveal>
        <p className="text-[0.62rem] tracking-[0.3em] uppercase text-[#C8A96E] mb-3 text-center">01 — About</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mt-2">
        <Reveal delay={100}>
          <blockquote
            className="font-light italic leading-[1.45] text-[#E8E5DF] border-l-2 border-[#C8A96E] pl-7"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.2rem, 2.8vw, 2.1rem)' }}
          >
            "My objective is simple — to be the best at what I do, while making the world a better place for humanity to live in."
          </blockquote>
        </Reveal>

        <div>
          <Reveal delay={150}>
            <p className="text-[0.9rem] leading-[1.85] text-[#AAAAAA] font-light mb-4">
              Favour Ogabi is a Lagos-based architect with nearly a decade of experience spanning formative internships to full professional practice. Currently at Advanced Engineering Consultants, he brings meticulous attention to detail, collaborative energy, and an unwavering commitment to quality without compromise.
            </p>
            <p className="text-[0.9rem] leading-[1.85] text-[#AAAAAA] font-light">
              A Covenant University graduate in Architecture, Favour believes that great architecture is not simply built — it is{' '}
              <em className="text-[1.05em] text-[#D8D5CE]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>felt</em>.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { n: '6+', l: 'Years Practice' },
                { n: '5',  l: 'Firms Contributed To' },
                { n: '3',  l: 'Certifications' },
                { n: '1',  l: 'Vision — Excellence' },
              ].map(({ n, l }) => (
                <div key={l} className="border-t border-[#2A2A2A] pt-3">
                  <div className="text-[2.4rem] font-light text-[#FAFAFA] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{n}</div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-[#777] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
