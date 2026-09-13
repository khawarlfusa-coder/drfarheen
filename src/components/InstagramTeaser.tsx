import Image from "next/image";
import { Play, ArrowUpRight, Heart, Users } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function InstagramTeaser() {
  const topics = [
    {
      tag: "Community Education",
      title: "Girl Syndrome: The Cultural Habit of Normalizing Female Pain",
      views: "2.4K views",
      desc: "Why South Asian and immigrant women often hide symptoms until crisis point, and how to reclaim your health without guilt.",
    },
    {
      tag: "Hormones Explained",
      title: "Is it Anxiety, Mood, or Low Progesterone?",
      views: "1.8K views",
      desc: "Demystifying the hormonal cascade behind PMS, perimenopausal irritability, and neurochemical shifts.",
    },
    {
      tag: "Evidence vs Myths",
      title: "Synthetic vs. Body-Identical HRT for South Asian Women",
      views: "2.7K views",
      desc: "Breaking down cardiovascular and metabolic data: why one size never fits all in hormone replacement.",
    },
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#04100b] to-[#061811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e3627] border border-[#d4af37]/30 text-xs font-semibold text-[#f5e4a8] tracking-widest uppercase font-sans-clean">
            <InstagramIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            Digital Health Creator &amp; Community Advocate
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0]">
            Bringing 17 Years of Clinical Experience to Your Screen
          </h2>
          <p className="font-sans-clean text-[#f7f5f0]/80 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Making complex medicine relatable, accessible, and culturally attuned on <span className="text-[#f5e4a8] font-medium">@drfarheenofficial</span>. 
            Because health education shouldn&apos;t be intimidating.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topics.map((t, idx) => (
            <a
              key={idx}
              href="https://instagram.com/drfarheenofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-[#092218]/60 border border-[#d4af37]/25 hover:border-[#d4af37]/60 hover:bg-[#0c2f21]/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#d4af37] px-2.5 py-1 rounded-full bg-[#113a2a] border border-[#d4af37]/30">
                    {t.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#f5e4a8]/70">
                    <Play className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                    <span>{t.views}</span>
                  </div>
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-[#f7f5f0] group-hover:text-[#f5e4a8] transition-colors leading-snug">
                  {t.title}
                </h3>

                <p className="text-xs text-[#f7f5f0]/70 mt-3 font-light font-sans-clean leading-relaxed">
                  {t.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-[#d4af37] font-medium">
                <span>Watch Reel on Instagram</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Profile Card Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a271c] via-[#0d3425] to-[#071d15] border border-[#d4af37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-lg shrink-0">
              <Image
                src="/images/dr-farheen.png"
                alt="Dr. Farheen Profile"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif-luxury text-xl font-bold text-[#f5e4a8]">
                  Dr. Farheen Kayani
                </h4>
                <span className="w-4 h-4 rounded-full bg-[#3897f0] text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
              </div>
              <p className="text-xs text-[#f7f5f0]/85 mt-0.5 font-sans-clean">
                @drfarheenofficial • 17 Yrs NHS GP • Hormones, Longevity &amp; Weight Expert
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-center">
            <a
              href="https://instagram.com/drfarheenofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-semibold flex items-center gap-2 shadow-lg hover:opacity-95 transition-opacity"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @drfarheenofficial</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-[#1877F2] text-white text-xs font-semibold flex items-center gap-2 shadow-lg hover:opacity-95 transition-opacity"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
