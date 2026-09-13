import Image from "next/image";
import { MessageCircle, Mail, MapPin, ShieldAlert } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#030d08] border-t border-[#d4af37]/20 pt-16 pb-12 relative overflow-hidden font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#d4af37]/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/95 border border-[#d4af37] p-1 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Farheen Crest"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif-luxury text-xl font-bold text-gold-gradient block">
                  DR. FARHEEN KAYANI
                </span>
                <span className="text-[10px] tracking-widest text-[#f5e4a8]/70 uppercase">
                  Official • UK NHS GP &amp; Specialist
                </span>
              </div>
            </div>

            <p className="text-xs text-[#f7f5f0]/75 max-w-sm leading-relaxed font-light">
              Pakistan-born, UK-based GP with 17 years of NHS clinical experience. Thinking beyond medicine to provide transformative care in hormonal vitality, medical weight management, longevity, and culturally relevant health education.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/drfarheenofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d2a1f] border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center text-[#d4af37] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/?text=Hello%20Dr.%20Farheen%20Official,%20I%20have%20an%20inquiry%20regarding%20the%20upcoming%20clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d2a1f] border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center text-[#d4af37] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@drfarheenofficial.com"
                className="w-9 h-9 rounded-full bg-[#0d2a1f] border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center text-[#d4af37] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-[#f5e4a8] uppercase tracking-wider">
              Clinical Areas
            </h4>
            <ul className="space-y-2 text-xs text-[#f7f5f0]/70">
              <li><a href="#specialties" className="hover:text-[#d4af37] transition-colors">Menopause &amp; Perimenopause HRT</a></li>
              <li><a href="#specialties" className="hover:text-[#d4af37] transition-colors">Hormonal Balance &amp; PCOS</a></li>
              <li><a href="#specialties" className="hover:text-[#d4af37] transition-colors">Medical Weight Management</a></li>
              <li><a href="#specialties" className="hover:text-[#d4af37] transition-colors">Confidential Women&apos;s Clinic</a></li>
              <li><a href="#waitlist" className="hover:text-[#d4af37] transition-colors">VIP Founding Registry</a></li>
            </ul>
          </div>

          {/* Clinic & Location Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-[#f5e4a8] uppercase tracking-wider">
              Practice &amp; Inquiries
            </h4>
            <div className="space-y-2 text-xs text-[#f7f5f0]/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>London, United Kingdom • In-Person &amp; Secure Digital Consultations</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>concierge@drfarheenofficial.com</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] text-[#f5e4a8] block font-semibold">GMC UK Verified Practice</span>
                <span className="text-[10px] text-[#f7f5f0]/60">UK NHS GP • MBBS • MRCGP • DFSRH</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-8 pb-6 border-b border-[#d4af37]/10 text-[11px] text-[#f7f5f0]/50 space-y-2 leading-relaxed">
          <div className="flex items-center gap-1.5 text-[#f5e4a8]/80 font-medium">
            <ShieldAlert className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Clinical Notice &amp; Disclaimer:</span>
          </div>
          <p>
            The content presented on this website is for educational and priority registration purposes for upcoming private consultations. It does not replace emergency medical attention or formal clinical relationship before registration. If you are experiencing acute medical symptoms or chest pain, please call emergency services immediately (999 in the UK, 911 in the USA, or your local emergency number).
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f7f5f0]/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Dr. Farheen Official (Dr. Farheen Kayani). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Care</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Medical Ethics</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
