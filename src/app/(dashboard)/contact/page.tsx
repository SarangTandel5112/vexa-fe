'use client'

import { useState } from 'react';
import {
  MainContent,
  InputField,
  TextareaField,
  SelectField,
  FormIcons,
  Button
} from "@/components";
import { contactService } from '@/services/contact.service';
import { ContactRequest } from '@/components/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactRequest>({
    companyName: '',
    email: '',
    purpose: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const purposeOptions = [
    { value: "Demo", label: "Demo" },
    { value: "Support", label: "Technical Support" },
    { value: "Sales", label: "Sales Question" },
    { value: "Partnership", label: "Partnership" },
    { value: "General", label: "General Inquiry" }
  ]

  const handleInputChange = (field: keyof ContactRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous states
    setErrors([]);
    setSuccessMessage('');
    
    // Validate form data
    const validation = contactService.validateContactData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await contactService.submitContact(formData);
      
      if (response.error) {
        setErrors([response.error]);
      } else {
        setSuccessMessage('Thank you for your message! We will get back to you soon.');
        // Reset form
        setFormData({
          companyName: '',
          email: '',
          purpose: '',
          description: ''
        });
      }
    } catch (error) {
      setErrors(['An unexpected error occurred. Please try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">{successMessage}</p>
              </div>
            )}

            {/* Error Messages */}
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ul className="text-red-800 text-sm space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField 
                type="text" 
                placeholder="Enter your Company Name" 
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                icon={<FormIcons.User />} 
                disabled={isSubmitting}
              />

              <InputField 
                type="email" 
                placeholder="Enter your Email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                icon={<FormIcons.Email />} 
                disabled={isSubmitting}
              />

              <SelectField 
                placeholder="Select Purpose"
                value={formData.purpose}
                onChange={(e) => handleInputChange('purpose', e.target.value)}
                options={purposeOptions}
                icon={<FormIcons.Document />} 
              />

              <TextareaField 
                placeholder="Add description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={6}
              />

              <Button 
                type="submit"
                variant="primary"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="w-full py-[18px]"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
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
  );
}
