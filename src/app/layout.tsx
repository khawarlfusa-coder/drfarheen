import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drfarheenofficial.com"),
  title: "Dr. Farheen Official | UK NHS GP (17 Years Experience) • Hormones, Weight & Longevity",
  description:
    "Dr. Farheen Kayani is a Pakistan-born, UK-based GP with 17 years of NHS experience. Specializing in hormonal health, weight management, longevity, disease prevention, and culturally relevant health education for South Asian communities.",
  keywords: [
    "Dr Farheen",
    "Dr Farheen Official",
    "Dr Farheen Kayani",
    "17 Years NHS GP",
    "Menopause Specialist UK",
    "Hormone & Longevity Clinic",
    "South Asian Health Advocate",
    "Medical Weight Loss",
    "Thinking Beyond Medicine",
    "Disease Prevention",
  ],
  authors: [{ name: "Dr. Farheen Kayani" }],
  openGraph: {
    title: "Dr. Farheen Official | Launching Soon",
    description:
      "Your doctor for the questions you're too shy to ask. Private hormone, menopause, and metabolic wellness consultations.",
    url: "https://drfarheenofficial.com",
    siteName: "Dr. Farheen Official",
    images: [
      {
        url: "/images/dr-farheen.png",
        width: 800,
        height: 1000,
        alt: "Dr. Farheen Kayani - UK NHS GP & Hormone Specialist",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Farheen Official | Launching Soon",
    description:
      "Your doctor for the questions you're too shy to ask. Private hormone & menopause clinic.",
    images: ["/images/dr-farheen.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#04100b] text-[#f7f5f0] min-h-screen selection:bg-[#d4af37] selection:text-[#04100b] antialiased">
        {children}
      </body>
    </html>
  );
}
