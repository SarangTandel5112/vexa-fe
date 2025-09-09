'use client'

import {
  PageWrapper,
  MainContent,
  Container,
  Header,
  InputField,
  TextareaField,
  SelectField,
  FormIcons,
  Button
} from "@/components";

export default function ContactPage() {
  const purposeOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "sales", label: "Sales Question" },
    { value: "partnership", label: "Partnership" }
  ]

  return (
    <PageWrapper>
      <Header variant="dashboard" showNewTopic={true} showDemo={false} />

      <MainContent>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-6 items-start">
          {/* Left Content - Contact Form */}
          <div className="w-full col-span-12 lg:col-span-4">
            <div className="space-y-10">
              {/* Title */}
              <div>
                <h1 className="font-bricolage text-[32px] md:text-[40px] font-bold text-[#401A4D] leading-[1.2] tracking-[-0.04em]">
                  Contact us
                </h1>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <InputField 
                  type="text" 
                  placeholder="Enter your Company Name" 
                  icon={<FormIcons.User />} 
                />

                <InputField 
                  type="email" 
                  placeholder="Enter your Email" 
                  icon={<FormIcons.Email />} 
                />

                <SelectField 
                  placeholder="Select Purpose"
                  options={purposeOptions}
                  icon={<FormIcons.Document />} 
                />

                <TextareaField 
                  placeholder="Add description"
                  rows={6}
                />

                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full py-[18px]"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Right Content - Decorative Image */}
          <div className="w-full col-span-12 lg:col-span-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/01cf05c651bf4040ebcb9409c9344e308462621e?width=1496"
              alt="Abstract swirl graphic"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </MainContent>
    </PageWrapper>
  );
}
