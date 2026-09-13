import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function InstagramTeaser() {
  const topics = [
    {
      tag: "Reel Highlight",
      title: "Girl Syndrome: What Nobody Tells You About Hormonal Fatigue",
      views: "2.4K views",
      desc: "Why women normalize suffering in silence, and how to spot subtle endocrine red flags.",
    },
    {
      tag: "Clinical Education",
      title: "Is it Mood or Progesterone Deficiency?",
      views: "1.8K views",
      desc: "Understanding the neurochemical link between the luteal phase, GABA receptors, and anxiety.",
    },
    {
      tag: "Expert Breakdown",
      title: "Synthetic vs. Body-Identical Hormones",
      views: "2.7K views",
      desc: "Cutting through the myths of HRT with British Menopause Society clinical evidence.",
    },
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#04100b] to-[#061811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e3627] border border-[#d4af37]/30 text-xs font-semibold text-[#f5e4a8] tracking-widest uppercase font-sans-clean">
            <InstagramIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            Digital Health Community
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0]">
            Join the Conversation
          </h2>
          <p className="font-sans-clean text-[#f7f5f0]/75 text-sm sm:text-base font-light">
            Follow <span className="text-[#f5e4a8] font-medium">@drfarheenofficial</span> for evidence-backed medical insights, debunking myths, and empowering women with honest health education.
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
              <p className="text-xs text-[#f7f5f0]/80 mt-0.5 font-sans-clean">
                @drfarheenofficial • UK NHS GP, Menopause &amp; Hormone Specialist
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
              <span>Follow on Instagram</span>
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
