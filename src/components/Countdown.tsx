"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 18,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    setMounted(true);
    // Set target date 21 days from initial render or fixed launch date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 21);
    targetDate.setHours(12, 0, 0, 0);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-6 my-6 opacity-60">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center bg-[#092218]/80 border border-[#d4af37]/20 rounded-xl px-3 sm:px-5 py-2.5 min-w-[64px] sm:min-w-[80px]"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5e4a8]">
              --
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#f7f5f0]/60 font-sans-clean mt-0.5">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2.5 sm:gap-5 my-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center">
          <div className="flex flex-col items-center bg-gradient-to-b from-[#0b291e] to-[#061811] border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all rounded-xl px-3 sm:px-5 py-2 sm:py-3 min-w-[62px] sm:min-w-[82px] shadow-lg shadow-black/40">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient tracking-tight">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#f5e4a8]/70 font-sans-clean font-medium mt-0.5">
              {item.label}
            </span>
          </div>
          {idx < items.length - 1 && (
            <span className="text-[#d4af37]/40 text-lg sm:text-xl font-serif-luxury mx-1 sm:mx-1.5 animate-pulse">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
