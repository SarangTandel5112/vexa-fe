'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { 
  MainContent, 
  InputField,
  FormIcons,
  Button
} from "@/components";
import { useAuth } from '@/contexts/AuthContext';
import { LoginRequest } from '@/components/types';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoggingIn, error, clearError } = useAuth();
  const [formData, setFormData] = useState<LoginRequest>({
    username: '',
    password: '',
  });


  // Show toast for login errors
  useEffect(() => {
    if (error) {
      toast.error(error);
      clearError();
    }
  }, [error, clearError]);

  const handleInputChange = (field: keyof LoginRequest) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear any previous errors
    clearError();

    const success = await login(formData);
    
    if (success) {
      toast.success('Login successful! Redirecting...');
      
      // Check if there's a stored redirect path
      const redirectPath = sessionStorage.getItem('redirectAfterLogin');
      sessionStorage.removeItem('redirectAfterLogin'); // Clean up
      
      // Redirect to the stored path or home page
      router.push(redirectPath || '/survey');
    }
    // Error will be shown via useEffect above
  };

  return (
    <MainContent className="py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Login form */}
          <div className="w-full">
            <h2 className="font-bricolage text-[28px] md:text-[32px] font-bold text-[#0A0A0A] leading-[1.2] mb-8">
              Login to your<br /> account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                type="text" 
                placeholder="User Id" 
                value={formData.username}
                onChange={handleInputChange('username')}
                icon={<FormIcons.Email />} 
                disabled={isLoggingIn}
              />

              <InputField 
                type="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleInputChange('password')}
                icon={<FormIcons.Password />} 
                showPasswordToggle={true}
                disabled={isLoggingIn} 
              />

              <div className="text-right">
                <a href="#" className="font-sf-pro text-sm font-semibold text-[#612A74] hover:underline cursor-pointer">Forgot Password?</a>
              </div>

              <Button 
                type="submit"
                variant="primary"
                className="w-full py-[18px] rounded-full"
                disabled={isLoggingIn || !formData.username.trim() || !formData.password.trim()}
                loading={isLoggingIn}
              >
                {isLoggingIn ? 'Signing in...' : 'Login'}
              </Button>

              <p className="font-sf-pro text-xs text-[#776F69] text-center">
                By Signing up you agree to the <a href="/terms" className="underline cursor-pointer hover:text-[#612A74]">Terms & Conditions</a>
              </p>
            </form>
          </div>

          {/* Right - Decorative image */}
          <div className="w-full">
            <img
              src="./login_bg.png"
              alt="Abstract swirl graphic"
              className="w-full h-auto rounded-[12px] shadow-sm"
            />
          </div>
        </div>
      </MainContent>
  );
}
