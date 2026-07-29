import React, { useState } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuth } from '../hooks/useAuth';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RestPasswordProps {
  onBackToHome?: () => void;
  onNavigateToLogin?: () => void;
}

export const RestPassword: React.FC<RestPasswordProps> = ({
  onBackToHome,
  onNavigateToLogin,
}) => {
  const { resetPassword } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPass) return;
    setLoading(true);
    await resetPassword(password);
    setLoading(false);
    setSuccess(true);
  };

  return (
    <AuthLayout
      title="Set New Password"
      subtitle="Ensure your account password contains at least 8 characters."
      onBackToHome={onBackToHome}
    >
      {success ? (
        <div className="space-y-6 text-center py-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <p className="text-xs text-slate-300">Your password has been successfully updated.</p>
          <button
            onClick={onNavigateToLogin}
            className="w-full py-3 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold"
          >
            Sign In with New Password
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">New Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Confirm New Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={confirmPass}
                onChange={e => setConfirmPass(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-950/40 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Updating Password...</span>
            ) : (
              <>
                <span>Save New Password</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </AuthLayout>
  );
};

export default RestPassword;
