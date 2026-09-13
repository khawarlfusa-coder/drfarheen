"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05140e]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-2.5 sm:py-3 shadow-2xl shadow-black/60"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 flex items-center justify-center drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
              <Image
                src="/images/logo.png"
                alt="Dr. Farheen Crest"
                width={52}
                height={52}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-base sm:text-xl font-bold tracking-wider text-gold-gradient leading-tight">
                DR. FARHEEN
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#f5e4a8]/70 uppercase font-sans-clean font-medium">
                Official • 17 Yrs NHS GP
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-sans-clean">
            <a
              href="#about"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors py-1"
            >
              About Doctor
            </a>
            <a
              href="#specialties"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors py-1"
            >
              Specialties
            </a>
            <a
              href="#philosophy"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors py-1"
            >
              Philosophy
            </a>
            <a
              href="#community"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors py-1"
            >
              Community
            </a>
          </div>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full text-xs font-medium text-[#f5e4a8] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: +92 312 6472854</span>
            </a>
            <a
              href="#waitlist"
              className="px-5 py-2 rounded-full text-xs font-semibold bg-gold-gradient text-[#05140e] hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all flex items-center gap-1.5 font-sans-clean tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 fill-[#05140e]" />
              <span>VIP Waitlist</span>
            </a>
          </div>

          {/* Mobile Menu & Quick WhatsApp Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] active:scale-95 transition-transform"
              aria-label="Direct WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#04100b]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f5e4a8] hover:text-white rounded-lg border border-[#d4af37]/20 active:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05140e]/98 border-b border-[#d4af37]/30 px-5 py-5 space-y-4 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f5f0]/90 hover:text-[#d4af37] py-2 border-b border-white/5"
            >
              About Doctor Farheen
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f5f0]/90 hover:text-[#d4af37] py-2 border-b border-white/5"
            >
              Specialties &amp; 4 Pillars
            </a>
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f5f0]/90 hover:text-[#d4af37] py-2 border-b border-white/5"
            >
              Instagram Health Creator
            </a>
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#d4af37] font-medium py-2"
            >
              Join VIP Founding Registry
            </a>
          </div>

          <div className="pt-2 border-t border-[#d4af37]/20 flex flex-col gap-2.5">
            <a
              href="https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-xs font-semibold bg-[#25D366] text-white flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: +92 312 6472854</span>
            </a>

            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-xs font-semibold bg-gold-gradient text-[#05140e] shadow-md"
            >
              Request VIP Priority Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
