'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
}

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ['/login', '/register'];

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) {
      return; // Still checking authentication status
    }

    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

    if (!isAuthenticated && !isPublicRoute) {
      // Store the full URL (including query params and hash) as the intended destination
      const fullUrl = window.location.pathname + window.location.search + window.location.hash;
      sessionStorage.setItem('redirectAfterLogin', fullUrl);
      // User needs to be authenticated but isn't, and they're not on a public route
      router.push('/login');
    } else if (isAuthenticated && isPublicRoute) {
      // User is authenticated but trying to access a public route (like login/register)
      // Check if there's a stored redirect path
      const redirectPath = sessionStorage.getItem('redirectAfterLogin');
      sessionStorage.removeItem('redirectAfterLogin'); // Clean up
      router.push(redirectPath || '/');
    }
  }, [isAuthenticated, isLoading, pathname, router]);

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

  // Don't render children if redirect conditions are met to prevent flash
  if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
    return null; // Will redirect to login
  }

  if (isAuthenticated && PUBLIC_ROUTES.includes(pathname)) {
    return null; // Will redirect to home
  }

  return <>{children}</>;
}
