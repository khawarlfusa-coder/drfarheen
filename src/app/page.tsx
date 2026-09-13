import Image from "next/image";
import { InstagramIcon } from "@/components/Icons";
import { MessageCircle, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04100b] text-[#f7f5f0] flex flex-col justify-between items-center px-4 py-8 sm:py-12 relative overflow-hidden font-sans-clean selection:bg-[#d4af37] selection:text-[#04100b]">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] ambient-glow-emerald pointer-events-none -z-10 blur-3xl opacity-75" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] ambient-glow-gold pointer-events-none -z-10 blur-3xl opacity-35" />

      {/* Top Brand Monogram */}
      <header className="flex flex-col items-center text-center space-y-2.5 pt-2">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 border-2 border-[#d4af37] shadow-xl p-1.5 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Dr. Farheen Crest"
            width={56}
            height={56}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.15em] text-gold-gradient uppercase">
            DR. FARHEEN OFFICIAL
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#f5e4a8]/75 uppercase font-medium mt-0.5">
            Dr. Farheen Kayani • UK NHS GP
          </span>
        </div>
      </header>

      {/* Main Center Content */}
      <section className="flex flex-col items-center text-center max-w-lg mx-auto my-6 sm:my-8 space-y-6">
        
        {/* Doctor's Photo in Luxury Gold Frame */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4af37]/40 via-transparent to-[#19523c]/50 blur-lg scale-105 -z-10" />
          
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-3 sm:border-4 border-[#d4af37] shadow-2xl bg-[#061912]">
            <Image
              src="/images/dr-farheen.png"
              alt="Dr. Farheen Kayani"
              fill
              sizes="(max-width: 640px) 176px, 224px"
              className="object-cover object-top filter contrast-[1.03]"
              priority
            />
          </div>

          {/* Experience badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#05140e]/95 border border-[#d4af37]/60 shadow-lg text-[10px] sm:text-[11px] font-semibold text-[#f5e4a8] whitespace-nowrap">
            17 Years NHS Experience
          </div>
        </div>

        {/* Launching Soon Headline */}
        <div className="space-y-2 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d3325]/90 border border-[#d4af37]/40">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#f5e4a8] uppercase">
              Official Digital Launch
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#f7f5f0]">
            LAUNCHING SOON
          </h1>

          <p className="font-serif-luxury italic text-base sm:text-xl text-[#f5e4a8]/90 max-w-md mx-auto pt-1">
            &ldquo;Your doctor for the questions you&apos;re too shy to ask.&rdquo;
          </p>

          <p className="font-sans-clean text-xs sm:text-sm text-[#f7f5f0]/70 max-w-sm mx-auto font-light leading-relaxed">
            Hormonal Health • Longevity • Weight Management • Thinking Beyond Medicine
          </p>
        </div>

        {/* Action Buttons: Instagram & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-md pt-2">
          {/* Instagram Button */}
          <a
            href="https://instagram.com/drfarheenofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3.5 px-5 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold text-xs tracking-wide shadow-xl hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@drfarheenofficial</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3.5 px-5 rounded-full bg-[#25D366] text-white font-semibold text-xs tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>+92 312 6472854</span>
          </a>
        </div>

      </section>

      {/* Minimal Bottom Footer */}
      <footer className="text-center space-y-1.5 pb-2 text-[10px] sm:text-xs text-[#f7f5f0]/50 font-light">
        <p>London, UK • Pakistan • Global South Asian Community</p>
        <p>&copy; {new Date().getFullYear()} Dr. Farheen Official. All Rights Reserved.</p>
      </footer>

    </main>
  );
}
