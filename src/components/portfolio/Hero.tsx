export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pt-28 pb-10 md:pb-14 relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-[#FAFAFA] to-[#F0EEE9]">
      {/* Blueprint grid */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-50"
        style={{ backgroundImage: 'linear-gradient(#E0DDD6 0.5px, transparent 0.5px), linear-gradient(90deg, #E0DDD6 0.5px, transparent 0.5px)', backgroundSize: '52px 52px' }}
      />

      <span aria-hidden="true" className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 text-[0.6rem] tracking-[0.3em] uppercase text-[#B8B8B8]">
        Est. 2015
      </span>

      <p className="fo-a1 text-[0.65rem] tracking-[0.28em] uppercase text-[#C8A96E] mb-5">
        Architect · Lagos, Nigeria
      </p>

      <h1 className="fo-a2 font-light leading-[0.9] tracking-[-0.02em] text-[#0D0D0D]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3.5rem, 10vw, 10rem)' }}>
        Favour<br />
        <em className="text-[#6B6B6B]">Ogabi</em>
      </h1>

      <div className="fo-rule h-[0.5px] bg-[#E0DDD6] my-6 md:my-8" />

      <div className="fo-a3 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <p className="max-w-[38ch] text-[0.95rem] leading-[1.75] text-[#4A4A4A] font-light">
          Designing spaces that speak to the human experience — where structural precision meets purpose, and every building is a story told in form and light.
        </p>
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-4 md:gap-2 shrink-0">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6B6B6B]">📍 Lagos · Nigeria</span>
          <div className="hidden md:flex flex-col items-center gap-1">
            <div className="fo-tick w-[0.5px] h-9 bg-[#E0DDD6]" />
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#6B6B6B]">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  )
}
