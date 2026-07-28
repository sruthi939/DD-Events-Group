import React, { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

interface PaymentProps {
  amount: number;
  onSuccess: () => void;
  onCancel?: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ amount, onSuccess, onCancel }) => {
  const [method, setMethod] = useState<'card' | 'upi' | 'bank'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise(res => setTimeout(res, 1200));
    setIsProcessing(false);
    onSuccess();
  };

  return (
    <div className="space-y-6">
      {/* Total Deposit Summary Banner */}
      <div className="p-4 glass-card rounded-2xl border border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[11px] uppercase font-semibold text-slate-400 block">Required Retainer / Deposit</span>
          <span className="text-xl font-bold font-serif text-amber-300">${amount.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>256-Bit SSL Encrypted</span>
        </div>
      </div>

      {/* Payment Method Selector */}
      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => setMethod('card')}
          className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
            method === 'card'
              ? 'bg-rose-500/10 border-rose-500 text-rose-300'
              : 'glass-card border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span>Credit / Debit</span>
        </button>

        <button
          type="button"
          onClick={() => setMethod('upi')}
          className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
            method === 'upi'
              ? 'bg-rose-500/10 border-rose-500 text-rose-300'
              : 'glass-card border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-5 h-5" />
          <span>Instant UPI / Wire</span>
        </button>

        <button
          type="button"
          onClick={() => setMethod('bank')}
          className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
            method === 'bank'
              ? 'bg-rose-500/10 border-rose-500 text-rose-300'
              : 'glass-card border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>Net Banking</span>
        </button>
      </div>

      {/* Form Details */}
      <form onSubmit={handlePay} className="space-y-4">
        {method === 'card' && (
          <>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Card Number</label>
              <input
                type="text"
                required
                placeholder="4532 •••• •••• 8921"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Expiry Date</label>
                <input
                  type="text"
                  required
                  placeholder="MM / YY"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">CVV Code</label>
                <input
                  type="password"
                  required
                  maxLength={4}
                  placeholder="•••"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          </>
        )}

        {method === 'upi' && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">UPI ID or Virtual Address</label>
            <input
              type="text"
              required
              placeholder="username@bankupi"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
            />
          </div>
        )}

        {method === 'bank' && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Select Bank</label>
            <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500">
              <option value="chase">JPMorgan Chase</option>
              <option value="bofa">Bank of America</option>
              <option value="wells">Wells Fargo</option>
              <option value="citi">Citibank</option>
            </select>
          </div>
        )}

        <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-800/80">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 glass-card text-xs font-semibold text-slate-400 hover:text-white rounded-xl"
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            disabled={isProcessing}
            className="px-6 py-2.5 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-950/40 hover:scale-[1.01] transition-transform flex items-center gap-2"
          >
            {isProcessing ? (
              <span>Securing Deposit...</span>
            ) : (
              <>
                <span>Pay Retainer (${amount.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
