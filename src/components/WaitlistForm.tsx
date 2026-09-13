"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle, Lock, Send, MessageCircle, RefreshCw, Phone } from "lucide-react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Hormonal Health & Menopause");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [vipCode, setVipCode] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("dr_farheen_waitlist_vip");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setVipCode(parsed.vipCode || "DF-VIP-8821");
        setIsSubmitted(true);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedCode = `DF-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
      setVipCode(generatedCode);
      setIsSubmitted(true);
      setIsSubmitting(false);

      localStorage.setItem(
        "dr_farheen_waitlist_vip",
        JSON.stringify({
          name,
          email,
          phone,
          interest,
          notes,
          vipCode: generatedCode,
          timestamp: new Date().toISOString(),
        })
      );
    }, 800);
  };

  const handleReset = () => {
    localStorage.removeItem("dr_farheen_waitlist_vip");
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
  };

  return (
    <section id="waitlist" className="py-16 sm:py-24 relative overflow-hidden bg-[#030e09]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[800px] h-[320px] sm:h-[500px] ambient-glow-emerald pointer-events-none -z-10 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-4 sm:right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] ambient-glow-gold pointer-events-none -z-10 blur-3xl opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0c2f21] via-[#071e16] to-[#04120b] border border-[#d4af37]/40 shadow-2xl p-5 sm:p-12 overflow-hidden">
          
          {/* Top Logo Watermark */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center drop-shadow-[0_4px_16px_rgba(212,175,55,0.35)]">
              <Image
                src="/images/logo.png"
                alt="Dr. Farheen Logo"
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {!isSubmitted ? (
            <>
              <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#113c2c] border border-[#d4af37]/30 text-[10px] sm:text-xs font-semibold text-[#f5e4a8] tracking-widest uppercase font-sans-clean">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  VIP Founding Registry
                </div>
                <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0] leading-tight">
                  Reserve Your Priority Consultation
                </h2>
                <p className="font-sans-clean text-[#f7f5f0]/80 text-xs sm:text-base font-light leading-relaxed">
                  Join the founding waitlist for Dr. Farheen&apos;s digital clinic and private consultations. Early access members receive priority booking privileges.
                </p>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className="mb-6 p-3 sm:p-4 rounded-xl bg-[#09261b] border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2.5 text-xs text-[#f5e4a8]">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Have urgent questions? Chat with our clinic concierge directly:</span>
                </div>
                <a
                  href="https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20have%20an%20inquiry%20regarding%20upcoming%20consultations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-md hover:brightness-105 active:scale-95 transition-all"
                >
                  <span>+92 312 6472854</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-w-xl mx-auto font-sans-clean">
                {/* Name */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Your Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Fatima Ali"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Confidential Email <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. fatima@example.com"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    WhatsApp Number <span className="text-gray-400 font-normal">(Optional for priority SMS)</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +92 312 6472854 or +44 7700 900123"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Primary Area of Interest */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Primary Area of Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-[#f7f5f0] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm cursor-pointer"
                  >
                    <option value="Hormonal Health & Menopause">Hormonal Health &amp; Menopause (HRT Protocol)</option>
                    <option value="Longevity & Disease Prevention">Longevity, Preventative Screening &amp; Biomarkers</option>
                    <option value="Medical Weight Management">Medical Weight Management &amp; Metabolic Health</option>
                    <option value="Too Shy to Ask Consultation">Discreet &ldquo;Too Shy to Ask&rdquo; Private Session</option>
                    <option value="South Asian Women Health MOT">South Asian Women&apos;s Comprehensive Health MOT</option>
                  </select>
                </div>

                {/* Optional note */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Private Note <span className="text-gray-400 font-normal">(100% Confidential)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any specific symptoms or questions you'd like to address..."
                    className="w-full px-4 py-3 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Privacy Badge */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#f7f5f0]/60 pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Strict UK medical privacy. Data is protected with zero third-party disclosure.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 rounded-full bg-gold-gradient text-[#05140e] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-3"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Securing Your Spot...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Join VIP Founding Registry</span>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-6 sm:py-8 space-y-5 max-w-lg mx-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#113a2a] border-2 border-[#d4af37] mx-auto flex items-center justify-center text-[#d4af37] shadow-xl">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
                  You Are On The VIP List
                </h3>
                <p className="font-sans-clean text-[#f7f5f0]/80 text-xs sm:text-sm leading-relaxed">
                  Thank you, <strong className="text-[#f5e4a8]">{name || "valued patient"}</strong>. Your priority spot has been reserved.
                </p>
              </div>

              {/* VIP Voucher Pass */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0d3424] to-[#082218] border border-[#d4af37]/50 shadow-2xl relative overflow-hidden">
                <div className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#f5e4a8]/70 font-semibold mb-1">
                  Your Priority Access Code
                </div>
                <div className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">
                  {vipCode}
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#f7f5f0]/60 mt-1.5">
                  Keep this reference code for your priority consultation privilege.
                </div>
              </div>

              {/* WhatsApp Quick Connect with exact number */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={`https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official,%20I%20have%20joined%20the%20VIP%20priority%20waitlist%20with%20code%20${vipCode}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg hover:brightness-105 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +92 312 6472854</span>
                </a>
                
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-full border border-[#d4af37]/30 text-xs text-[#f5e4a8] hover:bg-[#d4af37]/10 transition-all cursor-pointer"
                >
                  Register Another Person
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
