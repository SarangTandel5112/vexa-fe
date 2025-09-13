'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'

export default function TermsPage() {
  const [isAgreed, setIsAgreed] = useState(false)

  const handleAgreeAndContinue = () => {
    if (isAgreed) {
      // Handle agreement action (e.g., redirect or proceed to next step)
      console.log('User agreed to terms')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header variant="dashboard" />
      
      <main className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Title Section */}
          <div className="text-center max-w-5xl">
            <h1 className="font-bricolage text-3xl md:text-4xl lg:text-5xl font-semibold text-[#401A4D] mb-4 leading-tight">
              Research Interview: Terms of Participation
            </h1>
            <p className="font-bricolage text-lg md:text-xl text-[#401A4D] leading-relaxed">
              Please review and agree to the following before we begin.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-[#D0CAC5]"></div>

          {/* Terms Section */}
          <div className="w-full max-w-4xl">
            <h2 className="font-bricolage text-xl md:text-2xl font-bold text-[#827487] text-center mb-6">
              Terms & Conditions
            </h2>

            {/* Scrollable Terms Content */}
            <div className="relative border border-[#D0CAC5] rounded-2xl min-h-[300px] md:min-h-[400px] max-h-[500px] overflow-hidden">
              <div className="overflow-y-auto h-full max-h-[500px] p-6 md:p-8 space-y-6 text-[#401A4D] font-bricolage">
                
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">1. Introduction</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    This interview is a market research project conducted by Greybatter, a proprietorship 
                    (GSTIN: 09APKPA7966A1ZV) under the brand name Vexa, on behalf of our client, BrandEigen LLP 
                    (GSTIN: 06AAWFB7671G1ZY). The purpose is to gather insights into consumer perceptions and experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">2. Purpose of Data Collection</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    The data collected will be used solely for market research and analysis by BrandEigen and 
                    Greybatter. Final research findings will be aggregated and anonymised; your individual 
                    responses will not be personally identifiable in the final report.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">3. AI Moderator Disclosure</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    You acknowledge and agree that this interview will be conducted by an AI (Artificial Intelligence) 
                    moderator. The AI is designed to have a natural conversation and guide the interview based on a 
                    pre-defined script.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">4. Data Collected</h3>
                  <p className="text-base md:text-lg leading-relaxed mb-3">
                    By participating, you consent to the collection of the following data:
                  </p>
                  <ul className="text-base md:text-lg leading-relaxed space-y-2 pl-4">
                    <li>• Audio Data: A recording of your spoken words.</li>
                    <li>• Transcript Data: A text-based transcript of the conversation.</li>
                    <li>• Survey Responses: Any data you provide by responding to the questions.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">5. Data Processing and Storage</h3>
                  <p className="text-base md:text-lg leading-relaxed mb-3">
                    Your data will be processed as follows:
                  </p>
                  <div className="text-base md:text-lg leading-relaxed space-y-3 pl-4">
                    <p>
                      <strong>Third-Party Processor:</strong> Your audio data will be processed by ElevenLabs Inc., 
                      a third-party AI technology provider, to facilitate the live conversation.
                    </p>
                    <p>
                      <strong>Data Transfers:</strong> Vexa&apos;s platform is hosted on Amazon Web Services (AWS), 
                      and data may be stored in a server location chosen for this project (e.g., UK or India). 
                      However, as the third-party processor, ElevenLabs Inc. is based in the United States, your 
                      data will be transferred and processed in the US. This is conducted under a legally compliant 
                      framework (UK&apos;s International Data Transfer Agreement - IDTA) that provides safeguards 
                      equivalent to UK data protection regulations.
                    </p>
                    <p>
                      <strong>No Secondary Use:</strong> Your data will not be used by ElevenLabs Inc. to train 
                      its public AI models.
                    </p>
                    <p>
                      <strong>Storage:</strong> All recordings and transcripts will be securely stored by Greybatter 
                      on behalf of BrandEigen and will be retained only for the duration required for this research project.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">6. Your Data Protection Rights</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Under UK GDPR, you have the right to request access to, correction of, or erasure of your data. 
                    To exercise these rights, please contact Greybatter at info@greybatter.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">7. Consent</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    By proceeding, you confirm that you have read, understood, and agree to these Terms and Conditions. 
                    You explicitly consent to the collection, processing, and transfer of your data as described.
                  </p>
                </div>
              </div>

              {/* Custom Scrollbar Indicator */}
              {/* <div className="absolute right-2 top-2 bottom-2 w-5 bg-[#F3EEE9] border border-[#D0CAC5] rounded-full hidden md:flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-2 py-2">
                  <svg className="w-3 h-3" fill="#776F69" viewBox="0 0 14 14">
                    <path d="M11.779 8.91744C11.7459 8.99739 11.6898 9.06573 11.6179 9.11382C11.546 9.16191 11.4614 9.18758 11.3749 9.1876H2.62486C2.53828 9.18767 2.45362 9.16205 2.38161 9.11398C2.3096 9.06591 2.25348 8.99756 2.22033 8.91757C2.18719 8.83759 2.17853 8.74957 2.19544 8.66465C2.21235 8.57974 2.25407 8.50176 2.31533 8.44057L6.69032 4.06557C6.73096 4.02489 6.77921 3.99262 6.83232 3.97061C6.88543 3.94859 6.94236 3.93726 6.99986 3.93726C7.05735 3.93726 7.11428 3.94859 7.16739 3.97061C7.2205 3.99262 7.26876 4.02489 7.30939 4.06557L11.6844 8.44057C11.7456 8.50179 11.7872 8.57977 11.804 8.66466C11.8209 8.74954 11.8122 8.83751 11.779 8.91744Z"/>
                  </svg>
                  <div className="w-2 h-16 bg-[#776F69] rounded-full"></div>
                  <svg className="w-3 h-3" fill="#776F69" viewBox="0 0 14 14">
                    <path d="M11.779 5.08256C11.7459 5.00261 11.6898 4.93427 11.6179 4.88618C11.546 4.83809 11.4614 4.81242 11.3749 4.8124H2.62486C2.53828 4.81233 2.45362 4.83795 2.38161 4.88602C2.3096 4.93409 2.25348 5.00244 2.22033 5.08243C2.18719 5.16241 2.17853 5.25043 2.19544 5.33535C2.21235 5.42026 2.25407 5.49824 2.31533 5.55943L6.69032 9.93443C6.73096 9.97511 6.77921 10.0074 6.83232 10.0294C6.88543 10.0514 6.94236 10.0627 6.99986 10.0627C7.05735 10.0627 7.11428 10.0514 7.16739 10.0294C7.2205 10.0074 7.26876 9.97511 7.30939 9.93443L11.6844 5.55943C11.7456 5.49821 11.7872 5.42023 11.804 5.33534C11.8209 5.25046 11.8122 5.16249 11.779 5.08256Z"/>
                  </svg>
                </div>
              </div> */}
            </div>
          </div>

          {/* Agreement Section */}
          <div className="w-full max-w-4xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="sr-only"
                />
                <label 
                  htmlFor="agreement" 
                  className="flex items-center justify-center w-6 h-6 border-2 border-[#6D3476] cursor-pointer rounded-sm bg-white"
                >
                  {isAgreed && (
                    <svg className="w-4 h-4 text-[#6D3476]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  )}
                </label>
              </div>
              <label htmlFor="agreement" className="font-bricolage text-lg md:text-xl text-[#827487] leading-relaxed cursor-pointer">
                I have read, understood, and agree to the Terms and Conditions. I consent to participate 
                in this AI-moderated interview.
              </label>
            </div>

            <div className="flex justify-center">
              <Button
                variant="gradient"
                size="lg"
                onClick={handleAgreeAndContinue}
                disabled={!isAgreed}
                className={`px-12 py-4 text-xl font-bold font-sans rounded-full ${
                  !isAgreed ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Agree & Continue
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
