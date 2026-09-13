"use client";

import Image from "next/image";
import Countdown from "./Countdown";
import { Sparkles, MessageCircle, HeartPulse, Award, ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[500px] ambient-glow-emerald pointer-events-none -z-10 blur-3xl opacity-70" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] ambient-glow-gold pointer-events-none -z-10 blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Top Heritage & Clinical Experience Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0d3325]/90 border border-[#d4af37]/40 shadow-inner">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#d4af37] animate-spin" style={{ animationDuration: "6s" }} />
              <span className="text-[10px] sm:text-xs font-medium tracking-wider text-[#f5e4a8] uppercase font-sans-clean">
                17 Yrs NHS GP • Thinking Beyond Medicine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.18] sm:leading-[1.15] tracking-tight">
              Your doctor for the <br className="hidden sm:inline" />
              <span className="text-gold-gradient italic font-normal">
                questions you&apos;re too shy
              </span>{" "}
              to ask.
            </h1>

            {/* Official Bio Subtitle */}
            <p className="font-sans-clean text-sm sm:text-lg text-[#f7f5f0]/85 max-w-2xl font-light leading-relaxed">
              Dr. Farheen Kayani is a <strong className="text-[#f5e4a8] font-medium">Pakistan-born, UK-based GP with 17 years of NHS experience</strong>, 
              with special interests in <span className="text-[#d4af37]">hormonal health, weight management, longevity and disease prevention</span>. 
              Passionate about caring for communities and thinking beyond medicine, she is now bringing her clinical expertise 
              into the digital space — making health education accessible, relatable, and culturally relevant.
            </p>

            {/* Countdown Box */}
            <div className="w-full max-w-lg pt-1">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-xs text-[#f5e4a8]/80 font-sans-clean uppercase tracking-widest font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                Clinic Launching In
              </div>
              <Countdown />
            </div>

            {/* Quick CTAs with WhatsApp & VIP Waitlist */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md pt-2">
              <a
                href="#waitlist"
                className="w-full sm:w-auto flex-1 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gold-gradient text-[#05140e] font-semibold text-xs sm:text-sm tracking-wide shadow-xl shadow-[#d4af37]/25 hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 group font-sans-clean"
              >
                <span>Request VIP Priority Access</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-full border border-[#25D366]/50 bg-[#092218]/80 hover:bg-[#25D366]/15 text-xs font-semibold text-[#f5e4a8] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +92 312 6472854</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-5 border-t border-[#d4af37]/15 w-full grid grid-cols-3 gap-2 sm:gap-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2">
                <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#f5e4a8]">17 Yrs NHS</div>
                  <div className="text-[9px] sm:text-[10px] text-[#f7f5f0]/60">UK Senior GP</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2">
                <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#f5e4a8]">Longevity</div>
                  <div className="text-[9px] sm:text-[10px] text-[#f7f5f0]/60">Disease Prevention</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2">
                <HeartPulse className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#f5e4a8]">Cultural Care</div>
                  <div className="text-[9px] sm:text-[10px] text-[#f7f5f0]/60">South Asian Health</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Doctor Portrait Card */}
          <div className="lg:col-span-5 flex justify-center relative w-full">
            
            {/* Decorative Gold Frame Layer */}
            <div className="relative w-full max-w-[320px] sm:max-w-[390px]">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#19523c]/40 blur-xl -z-10" />

              {/* Main Card Container */}
              <div className="relative p-2 sm:p-2.5 rounded-3xl bg-gradient-to-b from-[#163f2e] via-[#092218] to-[#04120b] border-2 border-[#d4af37]/50 shadow-2xl shadow-black/80">
                
                {/* Photo Aspect Wrapper */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#071911]">
                  <Image
                    src="/images/dr-farheen.png"
                    alt="Dr. Farheen Kayani - 17 Years NHS GP & Longevity Specialist"
                    fill
                    sizes="(max-width: 640px) 320px, 390px"
                    className="object-cover object-top filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04120b] via-transparent to-black/10 opacity-70" />

                  {/* Monogram Crest Floating Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 sm:w-11 sm:h-11 drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                    <Image
                      src="/images/logo.png"
                      alt="DF Crest"
                      width={44}
                      height={44}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* NHS 17 Years Flag Tag */}
                  <div className="absolute top-3 right-3 px-2.5 sm:px-3 py-1 rounded-full bg-[#05140e]/95 border border-[#d4af37]/40 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-[#f5e4a8] flex items-center gap-1 shadow-md">
                    <span>🇬🇧</span>
                    <span>17 Yrs NHS GP</span>
                  </div>

                  {/* Floating Doctor Profile Card at Bottom of Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 rounded-xl bg-[#05140e]/95 border border-[#d4af37]/40 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#f5e4a8] leading-tight">
                          Dr. Farheen Kayani
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-[#d4af37] font-medium font-sans-clean mt-0.5">
                          MBBS, MRCGP, DFSRH • UK GP
                        </p>
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d3325] border border-[#d4af37]/50 flex items-center justify-center text-xs text-[#d4af37]">
                        ✓
                      </div>
                    </div>
                    <div className="mt-1.5 pt-1.5 border-t border-[#d4af37]/15 flex items-center justify-between text-[9px] sm:text-[10px] text-[#f7f5f0]/70">
                      <span>Longevity &amp; Hormones</span>
                      <span className="text-[#d4af37] font-medium">• Disease Prevention</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom tag on larger phones */}
              <div className="hidden xs:flex sm:flex absolute -bottom-5 -left-4 px-3.5 py-2 rounded-xl bg-[#082016] border border-[#d4af37]/40 shadow-xl items-center gap-2.5 backdrop-blur-lg">
                <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-xs text-[#d4af37]">
                  🌿
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-[#f5e4a8]">Thinking Beyond Medicine</div>
                  <div className="text-[9px] text-[#f7f5f0]/60">Longevity &amp; Empathy</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
