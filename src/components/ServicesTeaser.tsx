import { Sparkles, Moon, Activity, Scale, Shield, Check } from "lucide-react";

export default function ServicesTeaser() {
  const pillars = [
    {
      icon: Moon,
      tag: "Clinical Pillar 01",
      title: "Hormonal Health & Menopause",
      subtitle: "HRT Optimization & Endocrine Harmony",
      desc: "Moving beyond one-size-fits-all treatments. Thorough evaluation of hormonal shifts from early 30s through post-menopause, addressing brain fog, sleep loss, and vitality.",
      points: [
        "Body-identical HRT & micronised progesterone protocols",
        "Perimenopause symptom mapping & relief",
        "PCOS, thyroid & cycle regularization",
        "Cognitive clarity, mood & sleep restoration",
      ],
    },
    {
      icon: Activity,
      tag: "Clinical Pillar 02",
      title: "Longevity & Disease Prevention",
      subtitle: "Thinking Beyond Medicine",
      desc: "Healthcare should not begin after disease develops. Dr. Farheen applies 17 years of frontline NHS insight to identify upstream cardiometabolic and genetic risks early.",
      points: [
        "Cardiometabolic screening for high-risk profiles",
        "Proactive bone density & vascular health preservation",
        "Root-cause biomarker evaluation & cellular health",
        "Lifestyle & nutritional medicine for healthspan extension",
      ],
    },
    {
      icon: Scale,
      tag: "Clinical Pillar 03",
      title: "Medical Weight Management",
      subtitle: "Doctor-Guided Metabolic Transformation",
      desc: "When conventional diet and exercise fail because shifting hormones dictate metabolism. An empathetic, science-first approach tailored to female biology.",
      points: [
        "Insulin sensitivity & metabolic slowdown reversal",
        "Evidence-backed clinical weight interventions",
        "Sustainable dietary strategies without starvation",
        "Protecting lean muscle & bone integrity",
      ],
    },
    {
      icon: Shield,
      tag: "Clinical Pillar 04",
      title: "Culturally Relevant & Discreet Care",
      subtitle: "Your Doctor for Questions You're Too Shy to Ask",
      desc: "A culturally attuned, zero-judgment sanctuary designed especially for South Asian women and communities often excluded by language barriers or cultural stigma.",
      points: [
        "Zero-judgment discussions on intimate wellness & GSM",
        "Culturally tailored guidance for South Asian diets & lifestyles",
        "Addressing generational taboos around female health",
        "Unrushed, confidential private consultations",
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
            Specialized Clinical Focus
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0]">
            Four Pillars of Bespoke Care
          </h2>
          <p className="font-sans-clean text-[#f7f5f0]/80 text-base max-w-2xl mx-auto font-light">
            Rooted in 17 years of clinical rigour and a deep commitment to preventive, culturally intelligent healthcare.
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
