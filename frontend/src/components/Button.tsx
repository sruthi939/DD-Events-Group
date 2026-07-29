import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-3.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-brand-600 via-rose-600 to-amber-500 text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.01]',
    secondary:
      'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 hover:text-white',
    outline:
      'border border-rose-500/50 text-rose-300 hover:bg-rose-500/10 hover:border-rose-400',
    glass:
      'glass-card text-slate-200 border border-slate-700/60 hover:bg-slate-800/80 hover:text-white',
    ghost:
      'text-slate-400 hover:text-white hover:bg-slate-800/50',
    danger:
      'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-950/40',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
