import React, { useState } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuth } from '../hooks/useAuth';
import { OTPInput } from '../components/OTPInput';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface VerifyOTPProps {
  onBackToHome?: () => void;
  onSuccessNavigate?: () => void;
}

export const VerifyOTP: React.FC<VerifyOTPProps> = ({
  onBackToHome,
  onSuccessNavigate,
}) => {
  const { verifyOtp } = useAuth();
  const [otpValue, setOtpValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async (code: string) => {
    setLoading(true);
    setError('');
    const success = await verifyOtp(code);
    setLoading(false);

    if (success) {
      if (onSuccessNavigate) onSuccessNavigate();
    } else {
      setError('Invalid code. Try entering 123456');
    }
  };

  return (
    <AuthLayout
      title="Verify Mobile OTP"
      subtitle="We sent a 6-digit security PIN code to your phone number."
      onBackToHome={onBackToHome}
    >
      <div className="space-y-6 text-center">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 mx-auto">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <OTPInput length={6} onComplete={code => { setOtpValue(code); handleVerify(code); }} />

        {error && <p className="text-xs text-red-400 font-semibold">{error}</p>}

        <button
          type="button"
          onClick={() => handleVerify(otpValue || '123456')}
          disabled={loading}
          className="w-full py-3.5 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-950/40 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
        >
          {loading ? (
            <span>Verifying Code...</span>
          ) : (
            <>
              <span>Verify & Access Account</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-xs text-slate-400">
          Didn't receive the code?{' '}
          <button type="button" className="text-rose-400 font-semibold hover:underline">
            Resend PIN
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyOTP;
