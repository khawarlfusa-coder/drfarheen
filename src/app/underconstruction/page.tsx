import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorProfile from "@/components/DoctorProfile";
import ServicesTeaser from "@/components/ServicesTeaser";
import WaitlistForm from "@/components/WaitlistForm";
import InstagramTeaser from "@/components/InstagramTeaser";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function UnderConstructionFullSite() {
  return (
    <main className="min-h-screen bg-[#04100b] text-[#f7f5f0] relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Doctor Profile & Credentials */}
      <DoctorProfile />

      {/* 4 Clinical Pillars */}
      <ServicesTeaser />

      {/* VIP Waitlist Form */}
      <WaitlistForm />

      {/* Instagram Community & Topics */}
      <InstagramTeaser />

      {/* Footer */}
      <Footer />

      {/* Floating Concierge WhatsApp Button */}
      <aside aria-label="WhatsApp Concierge" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
        <a
          href="https://wa.me/923126472854?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:brightness-105 active:scale-95 transition-all group font-sans-clean font-medium text-xs border border-white/30"
          aria-label="Direct WhatsApp Concierge: +92 312 6472854"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="hidden sm:inline font-semibold">WhatsApp: +92 312 6472854</span>
          <span className="sm:hidden font-semibold">WhatsApp</span>
        </a>
      </aside>
    </main>
  );
}
