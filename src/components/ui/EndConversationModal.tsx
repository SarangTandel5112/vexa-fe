import React from 'react';
import { Modal } from './Modal';

interface EndConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function EndConversationModal({ isOpen, onClose, onConfirm }: EndConversationModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="w-full max-w-[428px] mx-4"
    >
      <div className="bg-[#F3EEE9] rounded-[24px] border border-[#D0CAC5] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
        {/* Header */}
        <div className="flex justify-center items-center px-4 pt-6 pb-0">
          <h2 className="text-[#0A0A0A] text-center font-['SF_Pro_Rounded'] text-[20px] font-semibold leading-[24px]">
            End Conversation
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-8 px-8 py-8">
          {/* Question text */}
          <p className="text-[#0A0A0A] text-center font-['SF_Pro_Rounded'] text-[16px] font-normal leading-[24px]">
            Are your sure you want to end conversation ?
          </p>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 w-full">
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="flex-1 flex justify-center items-center px-6 py-[18px] rounded-[36px] bg-[rgba(126,119,112,0.12)] text-[#0A0A0A] font-['SF_Pro_Rounded'] text-[16px] font-bold leading-[20px] transition-all hover:bg-[rgba(126,119,112,0.2)] cursor-pointer"
            >
              Cancel
            </button>

            {/* End Now Button */}
            <button
              onClick={onConfirm}
              className="flex-1 flex justify-center items-center px-6 py-[18px] rounded-[36px] bg-[#BD3D44] text-[#F3EEE9] font-['SF_Pro_Rounded'] text-[16px] font-bold leading-[20px] transition-all hover:bg-[#a03439] cursor-pointer"
            >
              End & Logout
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
