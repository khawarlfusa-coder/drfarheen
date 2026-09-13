import { Sparkles, Moon, Flame, Scale, Shield, Check } from "lucide-react";

export default function ServicesTeaser() {
  const pillars = [
    {
      icon: Moon,
      tag: "Specialty Pillar 01",
      title: "Menopause & Perimenopause Mastery",
      subtitle: "Reclaim Vitality, Deep Sleep & Mental Clarity",
      desc: "Comprehensive evaluation of hormonal shifts from early 30s through post-menopause. Tailored body-identical HRT, non-hormonal alternatives, and symptom reversal.",
      points: [
        "Body-identical HRT & Progesterone optimization",
        "Eradicating brain fog, anxiety, and hot flushes",
        "Bone density & cardiovascular preventative care",
        "Sleep architecture & nighttime temperature regulation",
      ],
    },
    {
      icon: Flame,
      tag: "Specialty Pillar 02",
      title: "Hormone & Endocrine Rebalancing",
      subtitle: "PCOS, Thyroid & Cycle Harmonization",
      desc: "Hormones do not operate in silos. We analyze your complete endocrine symphony—from insulin to cortisol, thyroid to sex steroids—to restore your natural rhythm.",
      points: [
        "PCOS phenotype diagnosis & holistic reversal",
        "Subclinical hypothyroidism & Hashimoto's support",
        "Cortisol rhythm & adrenal stress management",
        "Painful cycles, PMS & PMDD relief",
      ],
    },
    {
      icon: Scale,
      tag: "Specialty Pillar 03",
      title: "Doctor-Led Medical Weight Loss",
      subtitle: "Science-Backed Metabolic Transformation",
      desc: "When diet and exercise stop working because hormones have taken the wheel. A medical, compassionate approach that treats underlying biology instead of placing blame.",
      points: [
        "Metabolic health & insulin sensitivity restoration",
        "Evidence-based medical weight loss management",
        "Preserving lean muscle mass & hormonal balance",
        "Sustainable lifelong nutrition without deprivation",
      ],
    },
    {
      icon: Shield,
      tag: "Specialty Pillar 04",
      title: "The \"Too Shy to Ask\" Sanctuary",
      subtitle: "Zero Judgment. Absolute Discretion.",
      desc: "A dedicated confidential haven for questions women often feel dismissed, embarrassed, or culturally hesitant to raise in standard 10-minute appointments.",
      points: [
        "Intimate wellness, GSM & sexual comfort",
        "Libido changes & relationship intimacy restoration",
        "Urinary urgency & pelvic floor symptom management",
        "Culturally attuned care for South Asian women",
      ],
    },
  ];

  return (
    <section id="specialties" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-emerald pointer-events-none -z-10 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e3627] border border-[#d4af37]/30 text-xs font-semibold text-[#f5e4a8] tracking-widest uppercase font-sans-clean">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Upcoming Clinical Offerings
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0]">
            Four Pillars of Bespoke Care
          </h2>
          <p className="font-sans-clean text-[#f7f5f0]/75 text-base max-w-2xl mx-auto font-light">
            Every woman&apos;s biochemical fingerprint is distinct. Our clinical protocols are tailored to your 
            unique labs, symptoms, and life aspirations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c2f21]/70 via-[#071d15]/80 to-[#04120b] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 flex flex-col justify-between"
              >
                {/* Top badge and icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#d4af37] font-sans-clean">
                      {p.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#113a2a] border border-[#d4af37]/30 group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/15 transition-all flex items-center justify-center text-[#d4af37]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f7f5f0] group-hover:text-[#f5e4a8] transition-colors leading-tight">
                    {p.title}
                  </h3>
                  
                  <div className="text-xs text-[#d4af37] font-medium font-sans-clean mt-1 mb-4">
                    {p.subtitle}
                  </div>

                  <p className="text-sm text-[#f7f5f0]/80 font-light font-sans-clean leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-6 border-t border-[#d4af37]/15 space-y-2.5">
                  {p.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#f7f5f0]/90">
                      <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Corner decorative accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-tr-3xl pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
