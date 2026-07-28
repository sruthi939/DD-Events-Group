import React, { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Loader } from './Loader';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loader fullScreen message="Verifying authentication session..." />;
  }

  if (!isAuthenticated) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-white">Authentication Required</h2>
        <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
          Please sign in to access your client portal, view active event bookings, or request bespoke event proposals.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
