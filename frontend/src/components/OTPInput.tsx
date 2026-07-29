import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combined = newOtp.join('');
    if (combined.length === length && !newOtp.includes('')) {
      onComplete(combined);
    }

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 my-4">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={el => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          className="w-11 h-13 sm:w-12 sm:h-14 bg-slate-900 border border-slate-800 rounded-xl text-center text-lg sm:text-xl font-bold text-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 transition-all shadow-inner"
        />
      ))}
    </div>
  );
};

export default OTPInput;
