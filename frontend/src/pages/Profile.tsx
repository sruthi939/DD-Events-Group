import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { User, Mail, Phone, ShieldCheck, LogOut, Camera, Save } from 'lucide-react';

export const ProfileContent: React.FC = () => {
  const { user, updateProfile, logout } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, email, phone });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">Client Account Settings</h1>
          <p className="text-xs text-slate-400 mt-1">Manage your VIP client credentials and contact preferences.</p>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 glass-card text-xs font-semibold text-red-400 border border-red-500/30 rounded-xl hover:bg-red-500/10 flex items-center gap-2"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Main Profile Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        {/* Avatar Header */}
        <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
          <div className="relative">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
              alt={user?.name}
              className="w-16 h-16 rounded-2xl object-cover border border-slate-700 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 p-1 bg-rose-600 rounded-lg text-white text-[10px]">
              <Camera className="w-3 h-3" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-white">{user?.name || 'VIP Client'}</h3>
            <span className="text-xs text-rose-300 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> VIP Member
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Phone</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:border-rose-500"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800">
            {saved ? (
              <span className="text-xs font-semibold text-emerald-400">Profile changes saved successfully!</span>
            ) : <span />}

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold shadow-lg flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Profile: React.FC = () => (
  <ProtectedRoute>
    <ProfileContent />
  </ProtectedRoute>
);

export default Profile;
