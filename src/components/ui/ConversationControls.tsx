import React from 'react';

interface ConversationControlsProps {
  onPause?: () => void;
  onMute?: () => void;
  onEndConversation?: () => void;
  isPaused?: boolean;
  isMuted?: boolean;
}

export function ConversationControls({
  onPause,
  onMute,
  onEndConversation,
  isPaused = false,
  isMuted = false
}: ConversationControlsProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
      {/* Control Buttons Row */}
      <div className="flex justify-center items-center gap-2 w-full">
        {/* Pause/Resume Button */}
        <button
          onClick={onPause}
          className="flex-1 max-w-40 flex items-center justify-center gap-1 px-6 py-2 bg-gradient-to-r from-[#E8A089] to-[#612A74] rounded-full text-white font-sf-pro text-sm font-normal capitalize transition-all hover:shadow-lg cursor-pointer"
        >
          {isPaused ? (
            // Resume/Play Icon
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 17" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path 
                d="M3.5 3.16675C3.5 2.7525 3.83579 2.41675 4.25 2.41675C4.44891 2.41675 4.63968 2.49576 4.78033 2.63641L12.2803 10.1364C12.4877 10.3438 12.4877 10.6798 12.2803 10.8872L4.78033 18.3872C4.63968 18.5278 4.44891 18.6068 4.25 18.6068C3.83579 18.6068 3.5 18.271 3.5 17.8568V3.16675Z" 
                fill="white"
              />
            </svg>
          ) : (
            // Pause Icon
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 17" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path 
                d="M13.5 3.66675V13.6667C13.5 13.932 13.3946 14.1863 13.2071 14.3739C13.0196 14.5614 12.7652 14.6667 12.5 14.6667H10C9.73478 14.6667 9.48043 14.5614 9.29289 14.3739C9.10536 14.1863 9 13.932 9 13.6667V3.66675C9 3.40153 9.10536 3.14718 9.29289 2.95964C9.48043 2.7721 9.73478 2.66675 10 2.66675H12.5C12.7652 2.66675 13.0196 2.7721 13.2071 2.95964C13.3946 3.14718 13.5 3.40153 13.5 3.66675ZM6 2.66675H3.5C3.23478 2.66675 2.98043 2.7721 2.79289 2.95964C2.60536 3.14718 2.5 3.40153 2.5 3.66675V13.6667C2.5 13.932 2.60536 14.1863 2.79289 14.3739C2.98043 14.5614 3.23478 14.6667 3.5 14.6667H6C6.26522 14.6667 6.51957 14.5614 6.70711 14.3739C6.89464 14.1863 7 13.932 7 13.6667V3.66675C7 3.40153 6.89464 3.14718 6.70711 2.95964C6.51957 2.7721 6.26522 2.66675 6 2.66675Z" 
                fill="white"
              />
            </svg>
          )}
          <span className="text-[#F3EEE9]">{isPaused ? 'Resume' : 'Pause'}</span>
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={onMute}
          className="flex-1 max-w-40 flex items-center justify-center gap-1 px-6 py-2 bg-gradient-to-r from-[#E8A089] to-[#612A74] rounded-full text-white font-sf-pro text-sm font-normal capitalize transition-all hover:shadow-lg cursor-pointer"
        >
          {isMuted ? (
            // Muted Icon (with slash)
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 17" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <g clipPath="url(#clip0_313_3121)">
                <path 
                  d="M13.3361 15.0368C13.238 15.126 13.1085 15.1726 12.976 15.1662C12.8436 15.1599 12.7191 15.1012 12.6299 15.0031L10.6974 12.8781C10.0363 13.3042 9.28279 13.5659 8.49988 13.6412V15.6668C8.49988 15.7994 8.4472 15.9266 8.35343 16.0204C8.25966 16.1142 8.13248 16.1668 7.99988 16.1668C7.86727 16.1668 7.74009 16.1142 7.64632 16.0204C7.55255 15.9266 7.49988 15.7994 7.49988 15.6668V13.6418C6.26715 13.5164 5.12473 12.9383 4.29353 12.0194C3.46233 11.1004 3.0014 9.90593 2.99988 8.66684C2.99988 8.53423 3.05255 8.40706 3.14632 8.31329C3.24009 8.21952 3.36727 8.16684 3.49988 8.16684C3.63248 8.16684 3.75966 8.21952 3.85343 8.31329C3.9472 8.40706 3.99988 8.53423 3.99988 8.66684C4.00103 9.72735 4.42283 10.7441 5.17273 11.494C5.92262 12.2439 6.93936 12.6657 7.99988 12.6668C8.70731 12.6689 9.40241 12.4816 10.013 12.1243L9.31925 11.3618C8.86182 11.5858 8.3549 11.6897 7.84624 11.6636C7.33759 11.6375 6.84395 11.4824 6.41183 11.2128C5.97972 10.9431 5.62336 10.568 5.37634 10.1225C5.12931 9.67714 4.99976 9.17617 4.99988 8.66684V6.60997L2.62988 4.00309C2.54256 3.90467 2.49756 3.7758 2.50463 3.64442C2.5117 3.51304 2.57026 3.38974 2.66763 3.30125C2.765 3.21276 2.89332 3.16622 3.02478 3.17171C3.15623 3.17721 3.28023 3.23429 3.36987 3.33059L13.3699 14.3306C13.459 14.4287 13.5056 14.5583 13.4993 14.6907C13.4929 14.8231 13.4342 14.9477 13.3361 15.0368ZM11.8243 11.0912C11.8924 11.125 11.9675 11.1426 12.0436 11.1425C12.1373 11.1425 12.2291 11.1162 12.3085 11.0666C12.388 11.017 12.4519 10.946 12.493 10.8618C12.8285 10.1789 13.002 9.42775 12.9999 8.66684C12.9999 8.53423 12.9472 8.40706 12.8534 8.31329C12.7597 8.21952 12.6325 8.16684 12.4999 8.16684C12.3673 8.16684 12.2401 8.21952 12.1463 8.31329C12.0526 8.40706 11.9999 8.53423 11.9999 8.66684C12.0017 9.27541 11.8631 9.87618 11.5949 10.4225C11.5366 10.5416 11.5281 10.6789 11.5711 10.8043C11.6141 10.9297 11.7052 11.0329 11.8243 11.0912ZM10.1161 9.26497C10.1811 9.33647 10.2654 9.38763 10.3588 9.41224C10.4522 9.43685 10.5508 9.43387 10.6426 9.40366C10.7343 9.37344 10.8154 9.31729 10.8759 9.24199C10.9364 9.16668 10.9738 9.07546 10.9836 8.97934C10.9943 8.87552 10.9997 8.77122 10.9999 8.66684V4.66684C10.9991 3.97781 10.7612 3.31004 10.3261 2.77576C9.89098 2.24149 9.28522 1.87327 8.61062 1.733C7.93601 1.59272 7.23369 1.68894 6.62167 2.00549C6.00965 2.32203 5.52525 2.8396 5.24988 3.47122C5.21143 3.5595 5.19929 3.65701 5.21492 3.75203C5.23056 3.84705 5.27329 3.93553 5.338 4.00684L10.1161 9.26497Z" 
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_313_3121">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.666748)"/>
                </clipPath>
              </defs>
            </svg>
          ) : (
            // Unmuted Icon (microphone)
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 17" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path 
                d="M8 11.6667C9.10457 11.6667 10 10.7713 10 9.66673V4.66673C10 3.56216 9.10457 2.66673 8 2.66673C6.89543 2.66673 6 3.56216 6 4.66673V9.66673C6 10.7713 6.89543 11.6667 8 11.6667ZM13 9.66673C13 12.6667 10.76 15.0001 8 15.0001C5.24 15.0001 3 12.6667 3 9.66673H4.5C4.5 11.8334 6.18 13.5001 8 13.5001C9.82 13.5001 11.5 11.8334 11.5 9.66673M8 13.5001V16.1667M5 16.1667H11" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="text-[#F3EEE9]">{isMuted ? 'Unmute' : 'Mute'}</span>
        </button>
      </div>

      {/* End Conversation Button */}
      <button
        onClick={onEndConversation}
        className="w-full max-w-[328px] px-6 py-2 flex items-center justify-center border border-[#401A4D] rounded-full bg-transparent text-[#401A4D] font-sf-pro text-sm font-bold capitalize transition-all hover:bg-[#401A4D] hover:text-white cursor-pointer"
      >
        End Conversation
      </button>
    </div>
  );
}
