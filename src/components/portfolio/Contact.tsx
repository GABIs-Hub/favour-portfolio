import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24 bg-[#1A1A1A] text-center">
      <Reveal>
        <p className="text-[0.62rem] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">06 — Get In Touch</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-light text-[#FAFAFA] leading-[1.05] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 6vw, 5.5rem)' }}>
          Let&apos;s Build<br /><em>Together</em>
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="text-[0.9rem] text-[#AAAAAA] mb-8 font-light">
          Open to new projects, collaborations &amp; conversations.
        </p>

        <a
          href="mailto:ogabifavour11@email.com"
          className="no-underline border-b border-[#444] pb-1.5 text-[#E8E5DF] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-all duration-300 inline-block"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}
        >
          SEND A MAIL
        </a>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-10">
          <a
            href="https://www.linkedin.com/in/favour-ogabi-382500114/"
            target="_blank"
            rel="noreferrer"
            className="text-[0.65rem] tracking-[0.2em] uppercase text-[#888] no-underline hover:text-[#C8A96E] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#888]">Lagos, Nigeria</span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#888]">BSc Architecture · Covenant University</span>
        </div>
      </Reveal>
    </section>
  )
}
