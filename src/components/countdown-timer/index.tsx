"use client";

import { useState, useEffect } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const formatPersianNumber = (str: string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

export function CountdownTimer({
  targetDate,
  className = "",
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className={`flex items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-[52px] font-bold text-white mt-6 sm:mt-8 lg:mt-[52px] mb-8 sm:mb-12 lg:mb-16 text-base sm:text-2xl lg:text-5xl tracking-tight lg:tracking-[-0.96px] overflow-x-auto ${className}`}
    >
      <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
        <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
          {formatPersianNumber(
            timeRemaining.seconds.toString().padStart(2, "0")
          )}
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
          ثانیه
        </p>
      </div>
      <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl shrink-0">
        :
      </div>
      <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
        <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
          {formatPersianNumber(
            timeRemaining.minutes.toString().padStart(2, "0")
          )}
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
          دقیقه
        </p>
      </div>
      <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl shrink-0">
        :
      </div>
      <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
        <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
          {formatPersianNumber(timeRemaining.hours.toString().padStart(2, "0"))}
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
          ساعت
        </p>
      </div>
      <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl shrink-0">
        :
      </div>
      <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
        <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
          {formatPersianNumber(timeRemaining.days.toString().padStart(2, "0"))}
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
          روز
        </p>
      </div>
    </div>
  );
}
