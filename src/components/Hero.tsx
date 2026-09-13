"use client";

import Image from "next/image";
import Countdown from "./Countdown";
import { Sparkles, ShieldCheck, HeartPulse, Award, ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-emerald pointer-events-none -z-10 blur-3xl opacity-70" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] ambient-glow-gold pointer-events-none -z-10 blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Heritage & Clinical Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d3325]/90 border border-[#d4af37]/40 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-spin" style={{ animationDuration: "6s" }} />
              <span className="text-[11px] sm:text-xs font-medium tracking-wider text-[#f5e4a8] uppercase font-sans-clean">
                17 Years NHS GP Experience • Thinking Beyond Medicine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight">
              Your doctor for the <br />
              <span className="text-gold-gradient italic font-normal">
                questions you&apos;re too shy
              </span>{" "}
              to ask.
            </h1>

            {/* Official Bio Subtitle */}
            <p className="font-sans-clean text-base sm:text-lg text-[#f7f5f0]/85 max-w-2xl font-light leading-relaxed">
              Dr. Farheen Kayani is a <strong className="text-[#f5e4a8] font-medium">Pakistan-born, UK-based GP with 17 years of NHS experience</strong>, 
              with special interests in <span className="text-[#d4af37]">hormonal health, weight management, longevity and disease prevention</span>. 
              Passionate about caring for communities and thinking beyond medicine, she is now bringing her clinical expertise 
              into the digital space — making health education accessible, relatable, and culturally relevant.
            </p>

            {/* Countdown Box */}
            <div className="w-full max-w-lg pt-2 pb-1">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#f5e4a8]/80 font-sans-clean uppercase tracking-widest font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                Private Consultations &amp; Digital Clinic Unveiling In
              </div>
              <Countdown />
            </div>

            {/* Quick Waitlist Action & Social Handle */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md pt-2">
              <a
                href="#waitlist"
                className="w-full sm:w-auto flex-1 px-8 py-4 rounded-full bg-gold-gradient text-[#05140e] font-semibold text-sm tracking-wide shadow-xl shadow-[#d4af37]/25 hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group font-sans-clean"
              >
                <span>Request VIP Priority Access</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://instagram.com/drfarheenofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] bg-[#092218]/50 hover:bg-[#092218] text-xs font-medium text-[#f5e4a8] transition-all flex items-center justify-center gap-2"
              >
                <span>@drfarheenofficial</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-[#d4af37]/15 w-full grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <Award className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#f5e4a8]">17 Years NHS</div>
                  <div className="text-[10px] text-[#f7f5f0]/60">Senior UK Practitioner</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <Activity className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#f5e4a8]">Longevity Care</div>
                  <div className="text-[10px] text-[#f7f5f0]/60">Disease Prevention</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <HeartPulse className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#f5e4a8]">Culturally Relevant</div>
                  <div className="text-[10px] text-[#f7f5f0]/60">South Asian Health</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Doctor Portrait Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Decorative Gold Frame Layer */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#19523c]/40 blur-xl -z-10" />

              {/* Main Card Container */}
              <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-[#163f2e] via-[#092218] to-[#04120b] border-2 border-[#d4af37]/50 shadow-2xl shadow-black/80">
                
                {/* Photo Aspect Wrapper */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#071911]">
                  <Image
                    src="/images/dr-farheen.png"
                    alt="Dr. Farheen Kayani - 17 Years NHS GP & Longevity Specialist"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04120b] via-transparent to-black/10 opacity-70" />

                  {/* Monogram Crest Floating Badge */}
                  <div className="absolute top-4 left-4 p-1.5 rounded-full bg-white/95 border border-[#d4af37] shadow-xl backdrop-blur-md">
                    <Image
                      src="/images/logo.png"
                      alt="DF Crest"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  {/* NHS 17 Years Flag Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#05140e]/90 border border-[#d4af37]/40 backdrop-blur-md text-[11px] font-medium text-[#f5e4a8] flex items-center gap-1.5 shadow-md">
                    <span>🇬🇧</span>
                    <span>17 Yrs NHS GP</span>
                  </div>

                  {/* Floating Doctor Profile Card at Bottom of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#05140e]/95 border border-[#d4af37]/40 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif-luxury text-lg font-bold text-[#f5e4a8] leading-tight">
                          Dr. Farheen Kayani
                        </h3>
                        <p className="text-[11px] text-[#d4af37] font-medium font-sans-clean mt-0.5">
                          MBBS, MRCGP, DFSRH • UK NHS GP
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0d3325] border border-[#d4af37]/50 flex items-center justify-center text-xs text-[#d4af37]">
                        ✓
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#d4af37]/15 flex items-center justify-between text-[10px] text-[#f7f5f0]/70">
                      <span>Longevity &amp; Hormones</span>
                      <span className="text-[#d4af37] font-medium">• Disease Prevention</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Decorative Leaf Accent / Floating Badge on Side */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 px-4 py-2.5 rounded-2xl bg-[#082016] border border-[#d4af37]/40 shadow-xl items-center gap-3 backdrop-blur-lg">
                <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  🌿
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#f5e4a8]">Thinking Beyond Medicine</div>
                  <div className="text-[10px] text-[#f7f5f0]/60">Root-Cause Longevity &amp; Empathy</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
