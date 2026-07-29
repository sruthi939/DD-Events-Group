import React, { useState } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuth } from '../hooks/useAuth';
import { User, Mail, Phone, Lock, ArrowRight } from 'lucide-react';

interface RegisterProps {
  onBackToHome?: () => void;
  onNavigateToLogin?: () => void;
  onNavigateToVerifyOTP?: () => void;
}

export const Register: React.FC<RegisterProps> = ({
  onBackToHome,
  onNavigateToLogin,
  onNavigateToVerifyOTP,
}) => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await register(formData.name, formData.email, formData.phone, formData.password);
    setLoading(false);
    if (onNavigateToVerifyOTP) onNavigateToVerifyOTP();
  };

  return (
    <AuthLayout
      title="Create VIP Account"
      subtitle="Register to manage your event bookings and access custom proposals."
      onBackToHome={onBackToHome}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
              placeholder="Alex Morgan"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
              placeholder="alex.m@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
              placeholder="+1 (800) 555-0199"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Create Password</label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
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
            <span>Sending Verification OTP...</span>
          ) : (
            <>
              <span>Continue to Verification</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="pt-2 text-center text-xs text-slate-400">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="text-rose-400 hover:text-rose-300 font-semibold underline"
          >
            Sign In Here
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
