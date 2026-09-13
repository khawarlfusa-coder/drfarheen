"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Menu, X } from "lucide-react";

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
          ? "bg-[#05140e]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#d4af37]/40 bg-white/95 shadow-md group-hover:border-[#d4af37] transition-all flex items-center justify-center p-1">
              <Image
                src="/images/logo.png"
                alt="Dr. Farheen Crest"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg sm:text-xl font-semibold tracking-wider text-gold-gradient leading-tight">
                DR. FARHEEN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#f5e4a8]/70 uppercase font-sans-clean font-medium">
                Official • UK NHS GP
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-sans-clean">
            <a
              href="#about"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors"
            >
              About Doctor
            </a>
            <a
              href="#specialties"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors"
            >
              Specialties
            </a>
            <a
              href="#philosophy"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#community"
              className="text-[#f7f5f0]/80 hover:text-[#d4af37] transition-colors"
            >
              Community
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full text-xs font-medium text-[#f5e4a8] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Inquire</span>
            </a>
            <a
              href="#waitlist"
              className="px-5 py-2 rounded-full text-xs font-semibold bg-gold-gradient text-[#05140e] hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all flex items-center gap-1.5 font-sans-clean tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 fill-[#05140e]" />
              <span>VIP Waitlist</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#f5e4a8] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05140e]/95 border-b border-[#d4af37]/20 px-6 py-5 space-y-4 backdrop-blur-xl">
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f5f0]/90 hover:text-[#d4af37] py-1"
            >
              About Doctor
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f5f0]/90 hover:text-[#d4af37] py-1"
            >
              Specialties & Pillars
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f5f0]/90 hover:text-[#d4af37] py-1"
            >
              Care Philosophy
            </a>
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f5f0]/90 hover:text-[#d4af37] py-1"
            >
              Instagram & Community
            </a>
          </div>
          <div className="pt-3 border-t border-[#d4af37]/15 flex flex-col gap-2.5">
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-gold-gradient text-[#05140e]"
            >
              Join VIP Waitlist
            </a>
            <a
              href="https://wa.me/?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-full text-xs font-medium text-[#f5e4a8] border border-[#d4af37]/30"
            >
              Direct WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
