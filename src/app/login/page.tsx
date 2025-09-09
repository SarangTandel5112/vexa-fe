'use client'

import { 
  PageWrapper, 
  MainContent, 
  Container,
  Header,
  InputField,
  FormIcons,
  Button
} from "@/components";

export default function LoginPage() {
  return (
    <PageWrapper>
      <Header variant="auth" />

      <MainContent className="py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Login form */}
          <div className="w-full">
            <h2 className="font-bricolage text-[28px] md:text-[32px] font-bold text-[#0A0A0A] leading-[1.2] mb-8">
              Login to your<br /> account
            </h2>

            <form className="space-y-5">
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
                <a href="#" className="font-sf-pro text-sm font-semibold text-[#612A74] hover:underline">Forgot Password?</a>
              </div>

              <Button 
                type="submit"
                variant="primary"
                className="w-full py-[18px]"
              >
                Login
              </Button>

              <p className="font-sf-pro text-xs text-[#776F69] text-center">
                By Signing up you agree to the <a href="#" className="underline">Terms & Conditions</a>
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
    </PageWrapper>
  );
}
