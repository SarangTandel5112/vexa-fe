'use client'

import {
  PageWrapper,
  MainContent,
  Header,
  FeatureCard,
  FeatureIcons,
  InputField,
  FormIcons,
  Button,
  SocialButton
} from "@/components";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <PageWrapper>
      <Header variant="landing" />

      <MainContent>
        <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-8 space-y-12 lg:pr-8">
              {/* Hero Text */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="font-bricolage text-[32px] md:text-[40px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.04em]">
                    Hello, I am Vexa,<br />
                    Let&apos;s get you ready for the interview!
                  </h2>
                  <p className="font-roboto text-[20px] md:text-[27px] font-normal text-[#776F69] leading-[1.26]">
                    I turn surveys into real conversations - natural, unbiased, and smart. Helping you uncover insights that truly matter.
                  </p>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
                <FeatureCard 
                  icon={<FeatureIcons.PersonalizedConversations />}
                  title="Personalised Conversations"
                  description="Chats that adapt to each user, making surveys feel natural."
                />

                <FeatureCard 
                  icon={<FeatureIcons.SmartModeration />}
                  title="Smart Moderation"
                  description="Keeps discussions unbiased, clear, and easy to follow."
                />

                <FeatureCard 
                  icon={<FeatureIcons.ActionableInsights />}
                  title="Actionable Insights"
                  description="Delivers clean reports with the insights that matter most."
                />
              </div>
            </div>

            {/* Right Content - Sign Up Form */}
            <div className="col-span-12 lg:col-span-4 space-y-10">
              <div className="space-y-4">
                <h2 className="font-bricolage text-[32px] md:text-[40px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.04em]">
                  Create your<br />
                  account
                </h2>
                <p className="font-sf-pro text-base font-normal text-[#776F69]">
                  Already have an account? <Link href="/login" className="text-[#612A74] font-semibold cursor-pointer hover:underline">Sign In</Link>
                </p>
              </div>

              <form className="space-y-6">
                <InputField 
                  type="email" 
                  placeholder="Email" 
                  icon={<FormIcons.Email />} 
                />

                <InputField 
                  type="password" 
                  placeholder="Password" 
                  icon={<FormIcons.Password />} 
                  showPasswordToggle={true} 
                />

                <div className="text-right">
                  <button type="button" className="font-sf-pro text-sm font-semibold text-[#612A74] hover:underline">
                    Forgot Password?
                  </button>
                </div>

                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full py-[18px]"
                >
                  Sign Up
                </Button>

                <p className="text-center font-sf-pro text-sm text-[#776F69] underline">
                  By Signing up you agree to the Terms & Conditions
                </p>

                {/* Divider */}
                <div className="flex items-center gap-6">
                  <div className="flex-1 h-px bg-[#776F69]/28"></div>
                  <span className="font-sf-pro text-sm text-[#776F69]">Or sign up with</span>
                  <div className="flex-1 h-px bg-[#776F69]/28"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <SocialButton provider="google" />
                  <SocialButton provider="facebook" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainContent>
    </PageWrapper>
  );
}
