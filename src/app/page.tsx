import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorProfile from "@/components/DoctorProfile";
import ServicesTeaser from "@/components/ServicesTeaser";
import WaitlistForm from "@/components/WaitlistForm";
import InstagramTeaser from "@/components/InstagramTeaser";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
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
      <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/?text=Hello%20Dr.%20Farheen%20Official%20team,%20I%20would%20like%20to%20inquire%20about%20upcoming%20consultations."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 transition-all group font-sans-clean font-medium text-xs border border-white/20"
          aria-label="Direct WhatsApp Concierge"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="hidden sm:inline">Inquire with Team</span>
        </a>
      </aside>
    </main>
  );
}
