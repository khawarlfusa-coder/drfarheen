import Image from "next/image";
import { CheckCircle2, Award, HeartHandshake, Stethoscope, Sparkles, Globe, ShieldCheck } from "lucide-react";

export default function DoctorProfile() {
  const credentials = [
    {
      title: "17 Years NHS",
      org: "Senior UK General Practitioner",
      desc: "Nearly two decades of frontline clinical diagnostic leadership across British healthcare systems.",
    },
    {
      title: "MRCGP",
      org: "Royal College of General Practitioners",
      desc: "Gold standard accreditation in British primary healthcare and whole-person medicine.",
    },
    {
      title: "DFSRH",
      org: "Faculty of Sexual & Reproductive Healthcare",
      desc: "Specialist qualification in female hormonal health, fertility, menopause, and sexual wellbeing.",
    },
    {
      title: "MBBS",
      org: "Medical & Surgical Foundation",
      desc: "Rigorous international clinical training, uniting Eastern cultural understanding with Western medical science.",
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
            About The Founder &amp; Clinical Lead
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0]">
            Dr. Farheen Kayani
          </h2>
          <p className="text-[#f5e4a8] font-serif-luxury italic text-lg sm:text-xl">
            &ldquo;Thinking Beyond Medicine — Caring For Communities With Discretion &amp; Rigor.&rdquo;
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Story & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-gold-gradient font-semibold">
              Pakistan-Born. UK-Based. 17 Years at the Forefront of the NHS.
            </h3>
            
            <p className="font-sans-clean text-[#f7f5f0]/85 text-base leading-relaxed font-light">
              <strong>Dr. Farheen</strong> is a Pakistan-born, UK-based General Practitioner with <strong>17 years of dedicated NHS clinical experience</strong>. 
              Throughout her clinical journey, she has cultivated specialized interests in 
              <span className="text-[#f5e4a8] font-medium"> hormonal health, medical weight management, longevity, and disease prevention</span>.
            </p>

            <p className="font-sans-clean text-[#f7f5f0]/85 text-base leading-relaxed font-light">
              Deeply passionate about caring for communities and <em>&ldquo;thinking beyond medicine,&rdquo;</em> she recognizes that true healing 
              requires looking beyond symptom suppression. She is now bringing her nearly two decades of clinical experience into the 
              digital space as a health content creator — making health education 
              <strong className="text-[#d4af37]"> more accessible, relatable, and culturally relevant</strong>, 
              particularly for South Asian communities who are disproportionately affected by cardiometabolic risks and cultural healthcare taboos.
            </p>

            <div className="p-4 rounded-2xl bg-[#082319] border-l-4 border-[#d4af37] space-y-1">
              <span className="text-xs font-semibold text-[#f5e4a8] uppercase tracking-wider block">
                The Clinical Creed
              </span>
              <p className="text-sm text-[#f7f5f0]/90 italic font-serif-luxury">
                &ldquo;Your doctor for the questions you&apos;re too shy to ask. No taboo, no rushed consultations, and zero judgment.&rdquo;
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-sm text-[#f7f5f0]/90">
                  <strong>Culturally Relevant Health Education:</strong> Addressing the nuanced genetics, traditional diets, and unique metabolic vulnerabilities of South Asian women and families.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-sm text-[#f7f5f0]/90">
                  <strong>Longevity &amp; Disease Prevention:</strong> Moving upstream to prevent chronic illness, insulin resistance, and osteoporotic decline before they manifest.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-sm text-[#f7f5f0]/90">
                  <strong>Empathetic Digital Creator:</strong> Demystifying female anatomy, hormones, and mental wellbeing through clear, relatable, stigma-free media.
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
                      Clinical Governance &amp; Experience
                    </h4>
                    <p className="text-xs text-[#f7f5f0]/60">17 Years Frontline UK NHS Practice</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#134431] border border-[#d4af37]/30 text-[10px] text-[#d4af37] font-semibold uppercase tracking-wider">
                  GMC Registered
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
                    Beyond Conventional Medicine
                  </div>
                  <div className="text-xs text-[#f7f5f0]/80 mt-0.5">
                    Empowering South Asian &amp; global communities through digital health education and boutique private care.
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
