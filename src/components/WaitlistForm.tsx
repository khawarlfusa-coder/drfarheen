"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle, Lock, Send, MessageCircle, RefreshCw } from "lucide-react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Menopause & HRT Protocol");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [vipCode, setVipCode] = useState("");

  useEffect(() => {
    // Check if user already joined waitlist in this browser
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

      // Save to localStorage
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
    <section id="waitlist" className="py-24 relative overflow-hidden bg-[#030e09]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] ambient-glow-emerald pointer-events-none -z-10 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] ambient-glow-gold pointer-events-none -z-10 blur-3xl opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0c2f21] via-[#071e16] to-[#04120b] border-2 border-[#d4af37]/40 shadow-2xl p-6 sm:p-12 overflow-hidden">
          
          {/* Top Logo Watermark */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/95 border border-[#d4af37] flex items-center justify-center p-2 shadow-xl">
              <Image
                src="/images/logo.png"
                alt="Dr. Farheen Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>

          {!isSubmitted ? (
            <>
              <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#113c2c] border border-[#d4af37]/30 text-xs font-semibold text-[#f5e4a8] tracking-widest uppercase font-sans-clean">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  Exclusive Private Waitlist
                </div>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f5f0]">
                  Reserve Your Priority Appointment
                </h2>
                <p className="font-sans-clean text-[#f7f5f0]/80 text-sm sm:text-base font-light">
                  Join the founding registry. Early access members receive priority booking privileges and exclusive pre-consultation hormone preparation guides when diary opens.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto font-sans-clean">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Your Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Confidential Email Address <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@example.co.uk"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    WhatsApp / Contact Number <span className="text-gray-400 font-normal">(Optional for priority SMS)</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +44 7700 900123"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Primary Area of Interest */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Primary Area of Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-[#f7f5f0] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm cursor-pointer"
                  >
                    <option value="Menopause & HRT Protocol">Menopause &amp; Perimenopause (HRT Protocol)</option>
                    <option value="Hormonal Imbalance (PCOS / Thyroid)">Hormonal Imbalance (PCOS / Thyroid / Cycle)</option>
                    <option value="Medical Weight Management">Medical Weight Management &amp; Metabolic Health</option>
                    <option value="Confidential Consultation">The Confidential &ldquo;Too Shy to Ask&rdquo; Clinic</option>
                    <option value="Comprehensive Health Assessment">Comprehensive Women&apos;s Health MOT</option>
                  </select>
                </div>

                {/* Optional note */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#f5e4a8] mb-1.5">
                    Private Note or Specific Questions <span className="text-gray-400 font-normal">(100% Confidential)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Feel free to share any symptoms or goals you wish to address..."
                    className="w-full px-4 py-3 rounded-xl bg-[#061912] border border-[#d4af37]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-sm"
                  />
                </div>

                {/* Privacy Badge */}
                <div className="flex items-center gap-2 text-xs text-[#f7f5f0]/60 pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Strict UK medical privacy. Your data is never shared or publicized.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gold-gradient text-[#05140e] font-semibold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Securing Your Priority Spot...</span>
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
            <div className="text-center py-8 space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#113a2a] border-2 border-[#d4af37] mx-auto flex items-center justify-center text-[#d4af37] shadow-xl">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
                  You Are On The VIP Founding List
                </h3>
                <p className="font-sans-clean text-[#f7f5f0]/80 text-sm leading-relaxed">
                  Thank you, <strong className="text-[#f5e4a8]">{name || "valued patient"}</strong>. Your priority registration has been confirmed. You will be among the very first contacted when consultation dates are released.
                </p>
              </div>

              {/* VIP Voucher Pass */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d3424] to-[#082218] border border-[#d4af37]/50 shadow-2xl relative overflow-hidden">
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#f5e4a8]/70 font-semibold mb-1">
                  Your Priority Access Code
                </div>
                <div className="font-serif-luxury text-3xl font-bold tracking-wider text-gold-gradient">
                  {vipCode}
                </div>
                <div className="text-[11px] text-[#f7f5f0]/60 mt-2">
                  Please keep this reference for your opening consultation privilege.
                </div>
              </div>

              {/* WhatsApp Quick Connect */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/?text=Hello%20Dr.%20Farheen%20Official,%20I%20have%20joined%20the%20VIP%20priority%20waitlist%20with%20code%20${vipCode}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg hover:brightness-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect Directly on WhatsApp</span>
                </a>
                
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-full border border-[#d4af37]/30 text-xs text-[#f5e4a8] hover:bg-[#d4af37]/10 transition-all cursor-pointer"
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
