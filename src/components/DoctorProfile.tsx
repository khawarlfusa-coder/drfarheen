import Image from "next/image";
import { CheckCircle2, Award, HeartHandshake, Stethoscope } from "lucide-react";

export default function DoctorProfile() {
  const credentials = [
    {
      title: "MBBS",
      org: "Bachelor of Medicine & Bachelor of Surgery",
      desc: "Comprehensive clinical training foundation in international and UK medical practice.",
    },
    {
      title: "MRCGP",
      org: "Member of Royal College of General Practitioners",
      desc: "Gold standard accreditation in British primary healthcare and whole-person medicine.",
    },
    {
      title: "DFSRH",
      org: "Faculty of Sexual & Reproductive Healthcare",
      desc: "Specialist qualification in female hormonal health, fertility, contraception, and sexual wellbeing.",
    },
    {
      title: "UK NHS GP",
      org: "Senior General Practitioner",
      desc: "Years of front-line clinical excellence serving diverse communities with compassionate patient advocacy.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#04100b] via-[#061912] to-[#04100b]">
      {/* Decorative Gold Dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e3627] border border-[#d4af37]/30 text-xs font-semibold text-[#f5e4a8] tracking-widest uppercase font-sans-clean">
            <Stethoscope className="w-3.5 h-3.5 text-[#d4af37]" />
            Meet The Founder &amp; Clinical Director
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0]">
            Dr. Farheen Kayani
          </h2>
          <p className="text-[#f5e4a8] font-serif-luxury italic text-lg sm:text-xl">
            &ldquo;Healthcare should feel like a safe haven, not an interrogation.&rdquo;
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-gold-gradient font-semibold">
              Breaking Stigmas. Restoring Hormonal Harmony.
            </h3>
            
            <p className="font-sans-clean text-[#f7f5f0]/85 text-base leading-relaxed font-light">
              Too often, women are told that exhaustion, mood swings, unexplainable weight resistance, 
              and painful transitions are &ldquo;just part of getting older&rdquo; or &ldquo;all in your head.&rdquo;
            </p>

            <p className="font-sans-clean text-[#f7f5f0]/85 text-base leading-relaxed font-light">
              As a practicing UK GP with specialized post-graduate qualifications in female reproductive health, 
              <strong> Dr. Farheen Kayani</strong> bridges the gap between NHS clinical precision and boutique, 
              unrushed private consultations. Whether it is perimenopause, polycystic ovary syndrome (PCOS), 
              metabolic weight challenges, or intimate wellness questions, her philosophy is rooted in one immutable rule:
              <span className="text-[#f5e4a8] font-medium block mt-2 p-3 bg-[#0a261c] border-l-2 border-[#d4af37] rounded-r-lg">
                No judgment. No rushed 10-minute slots. Just deep listening, comprehensive hormonal diagnostics, and personalized evidence-based medicine.
              </span>
            </p>

            {/* Core Values Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-sm text-[#f7f5f0]/90">
                  <strong>Cultural Sensitivity &amp; Advocacy:</strong> Passionate South Asian health educator addressing nuanced dietary, genetic, and cultural aspects of hormone vitality.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-sm text-[#f7f5f0]/90">
                  <strong>Holistic Yet Rigorous:</strong> Combining bio-identical HRT, metabolic biochemistry, nutritional optimization, and evidence-led lifestyle modifications.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-sm text-[#f7f5f0]/90">
                  <strong>The Safe Space:</strong> Discreet consultations designed specifically for issues you may have felt too shy or dismissed to bring up elsewhere.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Credentials Matrix */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c2f22]/90 via-[#071d15]/80 to-[#04120b] border border-[#d4af37]/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#f5e4a8]">
                      Official Clinical Qualifications
                    </h4>
                    <p className="text-xs text-[#f7f5f0]/60">UK General Medical Council Registered</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#134431] border border-[#d4af37]/30 text-[10px] text-[#d4af37] font-semibold uppercase tracking-wider">
                  Verified
                </div>
              </div>

              {/* Matrix of badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#061c13]/70 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
                  >
                    <div className="font-serif-luxury text-xl font-bold text-gold-gradient group-hover:scale-105 transition-transform origin-left">
                      {c.title}
                    </div>
                    <div className="text-xs font-semibold text-[#f5e4a8] mt-1">
                      {c.org}
                    </div>
                    <p className="text-[11px] text-[#f7f5f0]/70 mt-1.5 leading-normal">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Special Emphasis Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#113a2a] to-[#0a241a] border border-[#d4af37]/40 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/95 shrink-0 flex items-center justify-center p-1.5 border border-[#d4af37]">
                  <Image
                    src="/images/logo.png"
                    alt="Dr. Farheen Monogram"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#f5e4a8] uppercase tracking-wider">
                    Dr. Farheen Official Clinical Promise
                  </div>
                  <div className="text-xs text-[#f7f5f0]/80 mt-0.5">
                    Private bespoke consultations in London &amp; virtual appointments accessible worldwide.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
