import React, { useState } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuth } from '../hooks/useAuth';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ForgotPasswordProps {
  onBackToHome?: () => void;
  onNavigateToResetPassword?: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  onBackToHome,
  onNavigateToResetPassword,
}) => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await forgotPassword(email);
    setLoading(false);
    setSent(true);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your registered email address to receive password reset instructions."
      onBackToHome={onBackToHome}
    >
      {sent ? (
        <div className="space-y-6 text-center py-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <p className="text-xs text-slate-300">
            We have sent password reset instructions to <strong className="text-white">{email}</strong>.
          </p>
          <button
            onClick={onNavigateToResetPassword}
            className="w-full py-3 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold"
          >
            Proceed to Enter New Password
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Registered Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
                placeholder="alex.m@example.com"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-950/40 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Sending Reset Email...</span>
            ) : (
              <>
                <span>Send Reset Instructions</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
