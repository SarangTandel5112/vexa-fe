import React from 'react';
import { Modal } from './Modal';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="w-full max-w-[586px] mx-4"
    >
      <div className="bg-[#F3EEE9] rounded-[24px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-6 md:px-[95px] py-[44px]">
        <div className="flex flex-col justify-center items-center gap-[35px]">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-3 w-full">
            {/* Title */}
            <div className="flex justify-center items-center h-10 w-full">
              <h1 className="text-[#612A74] text-center font-['SF_Pro_Rounded'] text-[30px] font-bold leading-[24px]">
                Thank you!
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-[#0A0A0A] text-center font-['SF_Pro_Rounded'] text-[18px] font-normal leading-[150%] w-full">
              Your responses have been recorded.
            </p>
          </div>

          {/* Checkmark Icon */}
          <div className="w-[123px] h-[123px]">
            <svg 
              width="136" 
              height="135" 
              viewBox="0 0 136 135" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path 
                d="M128.262 55.2209C131.07 69.0049 129.069 83.3351 122.59 95.8219C116.112 108.309 105.549 118.197 92.6625 123.838C79.7759 129.48 65.3449 130.532 51.776 126.821C38.2071 123.11 26.3205 114.86 18.0985 103.446C9.87646 92.0313 5.816 78.1434 6.59423 64.0977C7.37246 50.052 12.9423 36.6977 22.375 26.2616C31.8077 15.8256 44.533 8.9387 58.4288 6.74944C72.3247 4.56019 86.551 7.2009 98.7355 14.2312" 
                stroke="#6B3376" 
                strokeOpacity="0.2" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M128.332 52.4197C130.981 65.4192 129.093 78.9339 122.984 90.7101C116.874 102.486 106.912 111.812 94.7589 117.132C82.6057 122.452 68.996 123.445 56.1993 119.945C43.4026 116.446 32.1925 108.665 24.4384 97.8999C16.6843 87.1353 12.8549 74.0377 13.5889 60.7913C14.3228 47.545 19.5757 34.9507 28.4716 25.1085C37.3674 15.2664 49.3686 8.77146 62.4735 6.70679C75.5785 4.64213 88.9953 7.13255 100.486 13.7628M54.0864 58.2197L71.4864 75.6197L129.486 17.6197" 
                stroke="url(#paint0_linear_314_3182)" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M128.332 52.4197C130.981 65.4192 129.093 78.9339 122.984 90.7101C116.874 102.486 106.912 111.812 94.7589 117.132C82.6057 122.452 68.996 123.445 56.1993 119.945C43.4026 116.446 32.1925 108.665 24.4384 97.8999C16.6843 87.1353 12.8549 74.0377 13.5889 60.7913C14.3228 47.545 19.5757 34.9507 28.4716 25.1085C37.3674 15.2664 49.3686 8.77146 62.4735 6.70679C75.5785 4.64213 88.9953 7.13255 100.486 13.7628M54.0864 58.2197L71.4864 75.6197L129.486 17.6197" 
                stroke="url(#paint1_linear_314_3182)" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient 
                  id="paint0_linear_314_3182" 
                  x1="129.5" 
                  y1="6.00004" 
                  x2="4.07594" 
                  y2="17.2882" 
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9CD0FF"/>
                  <stop offset="1" stopColor="#FFF8BC"/>
                </linearGradient>
                <linearGradient 
                  id="paint1_linear_314_3182" 
                  x1="129.5" 
                  y1="6.00015" 
                  x2="11.7663" 
                  y2="7.78734" 
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E8A089"/>
                  <stop offset="1" stopColor="#612A74"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-[11px] w-full max-w-[364px]">
            {/* Exit Button */}
            <button
              onClick={onClose}
              className="w-[174px] px-6 py-[18px] flex justify-center items-center rounded-[36px] bg-[#BD3D44] text-[#F3EEE9] font-['SF_Pro_Rounded'] text-[20px] font-bold leading-[20px] transition-all hover:bg-[#a03439]"
            >
              Exit
            </button>

            {/* Footer Text */}
            <p className="text-[#0A0A0A] text-center font-['SF_Pro_Rounded'] text-[16px] font-normal leading-[150%] w-full">
              Your data is safe with us.{' '}
              <span className="underline cursor-pointer hover:text-[#612A74] transition-colors">
                Learn more
              </span>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
