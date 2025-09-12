'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean; // Default: true
  redirectTo?: string; // Default: '/login' for auth required, '/survey' for auth not required
}

export function ProtectedRoute({ 
  children, 
  requireAuth = true,
  redirectTo 
}: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) {
      return; // Still checking authentication status
    }

    if (requireAuth && !isAuthenticated) {
      // User needs to be authenticated but isn't
      router.push(redirectTo || '/login');
    } else if (!requireAuth && isAuthenticated) {
      // User shouldn't be authenticated but is (e.g., login page when already logged in)
      router.push(redirectTo || '/survey');
    }
  }, [isAuthenticated, isLoading, requireAuth, redirectTo, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F3EEE9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#612A74] mx-auto mb-4"></div>
          <p className="font-sf-pro text-[#776F69]">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render children if redirect conditions are met
  if (requireAuth && !isAuthenticated) {
    return null;
  }

  if (!requireAuth && isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
