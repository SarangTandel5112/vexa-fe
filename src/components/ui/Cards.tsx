import React from "react";
import { FeatureCardProps, DashboardCardProps } from "@/components/types";
import Link from "next/link";

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-[36px] border border-[#D0CAC5] backdrop-blur-[15px]  space-y-5 ${className}`}
    >
      <div className="flex justify-center">
        <div className="w-[60px] h-[58px] rounded-full border border-[#776F69]/28 bg-[#683075] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="font-bricolage text-[22px] font-bold text-[#0A0A0A] text-center leading-[1.45] tracking-[-0.04em]">
        {title}
      </h3>
      <p className="font-sf-pro text-[20px] font-normal text-[#776F69] text-center leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

export function DashboardCard({
  title,
  description,
  avatar = "https://api.builder.io/api/v1/image/assets/TEMP/026ee58f5165999d206ca459948fd10634e658af?width=128",
  languages = ["English", "Hindi"],
  onStartConversation,
  className = "",
}: DashboardCardProps) {
  const LanguageIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20L9 17H2C1.45 17 0.979167 16.8042 0.5875 16.4125C0.195833 16.0208 0 15.55 0 15V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8L8.875 3H18C18.5833 3 19.0625 3.1875 19.4375 3.5625C19.8125 3.9375 20 4.41667 20 5V18C20 18.55 19.8125 19.0208 19.4375 19.4125C19.0625 19.8042 18.5833 20 18 20H10Z"
        fill="#D9D9D9"
      />
      <path
        d="M11 19H18C18.3 19 18.5417 18.9042 18.725 18.7125C18.9083 18.5208 19 18.2833 19 18V5C19 4.7 18.9083 4.45833 18.725 4.275C18.5417 4.09167 18.3 4 18 4H9.175L10.35 8.05H12.325V7H13.35V8.05H17V9.075H15.725C15.5583 9.70833 15.3083 10.325 14.975 10.925C14.6417 11.525 14.25 12.0833 13.8 12.6L16.525 15.275L15.8 16L13.1 13.3L12.2 14.225L13 17L11 19Z"
        fill="#776F69"
      />
    </svg>
  );

  const CallIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0651 2.21488L4.6651 1.61488C4.9476 1.54988 5.2376 1.69738 5.3526 1.96238L6.5526 4.76238C6.6576 5.00738 6.5876 5.29488 6.3801 5.46238L4.8651 6.70238C5.7651 8.61988 7.3376 10.2149 9.2951 11.1324L10.5351 9.61738C10.7051 9.40988 10.9901 9.33988 11.2351 9.44488L14.0351 10.6449C14.3026 10.7624 14.4501 11.0524 14.3851 11.3349L13.7851 13.9349C13.7226 14.2049 13.4826 14.3999 13.2001 14.3999C6.7976 14.3999 1.6001 9.21238 1.6001 2.79988C1.6001 2.51988 1.7926 2.27738 2.0651 2.21488Z"
        fill="white"
        stroke="white"
        strokeWidth="0.025"
      />
    </svg>
  );

  const DropdownIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#39004D"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const USFlagIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path d="M-4 0H28V24H-4" fill="#BD3D44" />
        <path
          d="M-4 2.76489H28M-4 6.44989H28M-4 10.1499H28M-4 13.8499H28M-4 17.5499H28M-4 21.2499H28"
          stroke="white"
          strokeWidth="1.85"
        />
        <path d="M-4 0H14.24V12.925H-4" fill="#192F5D" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="32" height="24" fill="white" transform="translate(-4)" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <article
      className={`rounded-[36px] border border-[#D0CAC5] bg-white/50 backdrop-blur-[15px] p-6 flex flex-col gap-6 ${className}`}
    >
      {/* Header row */}
      <div className="flex items-center gap-5">
        <img
          src={avatar}
          alt="Agent avatar"
          className="w-16 h-16 rounded-full border border-[#776F69]/30"
        />
        <h4 className="font-bricolage text-[24px] font-bold text-[#0A0A0A] tracking-[-0.04em]">
          {title}
        </h4>
      </div>

      <div className="h-px bg-[#776F69]/30" />

      {/* Languages */}
      <div className="flex items-center gap-2 text-[#776F69] font-sf-pro">
        <LanguageIcon />
        <span className="text-[16px]">{languages.join(", ")}</span>
      </div>

      {/* Description */}
      <p className="font-sf-pro text-[16px] leading-[1.5] text-[#776F69] line-clamp-6">
        {description}
      </p>

      {/* Footer controls */}
      <div className="flex items-center gap-3">
        <Link href="/survey">
          <button
            onClick={onStartConversation}
            className="px-6 py-2.5 rounded-full text-[14px] text-white font-normal bg-gradient-to-r from-[#E8A089] to-[#612A74] flex items-center gap-2"
          >
            <CallIcon />
            Start Conversation
          </button>
        </Link>

        <div className="ml-auto flex items-center gap-2 bg-[#F7F4F2] rounded-[12px] min-h-[36px] px-2 shadow-[inset_0_0_0_1px_rgba(103,48,117,0.20),0_1px_2px_rgba(103,48,117,0.05)]">
          {/* US flag */}
          <div className="w-6 h-6 rounded-[12px] border border-[#E1E1E1] overflow-hidden grid place-items-center">
            <USFlagIcon />
          </div>
          <DropdownIcon />
        </div>
      </div>
    </article>
  );
}

// Feature card icons
export const FeatureIcons = {
  PersonalizedConversations: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.7956 14.1689L28.705 7.20583C28.5912 6.94955 28.4336 6.72103 28.2413 6.53332C28.049 6.34562 27.8258 6.2024 27.5844 6.11186C27.3429 6.02132 27.088 5.98522 26.8342 6.00562C26.5803 6.02603 26.3325 6.10254 26.105 6.23079L23.0931 7.92586L16.7485 6.03578C16.5857 5.98807 16.4148 5.98807 16.252 6.03578L9.90737 7.92586L6.89553 6.23079C6.66795 6.10254 6.42017 6.02603 6.16633 6.00562C5.9125 5.98522 5.65758 6.02132 5.41613 6.11186C5.17468 6.2024 4.95144 6.34562 4.75915 6.53332C4.56686 6.72103 4.40929 6.94955 4.29544 7.20583L1.20488 14.1675C1.09099 14.4238 1.02304 14.7028 1.00492 14.9886C0.986798 15.2744 1.01886 15.5615 1.09926 15.8334C1.17967 16.1053 1.30685 16.3566 1.47354 16.5732C1.64023 16.7897 1.84317 16.9671 2.07077 17.0953L5.34056 18.9377L12.0606 24.342C12.1596 24.4214 12.2709 24.4792 12.3888 24.5125L20.1394 26.6944C20.3017 26.7402 20.4718 26.738 20.6331 26.6878C20.7944 26.6376 20.9414 26.5412 21.0598 26.408L25.9039 20.9532L27.7302 18.8968L30.9297 17.0953C31.389 16.8364 31.7383 16.3827 31.9007 15.8339C32.063 15.2852 32.0252 14.6863 31.7956 14.1689ZM25.1482 18.7195L20.9811 14.9612C20.7944 14.7928 20.559 14.7082 20.3202 14.7235C20.0814 14.7389 19.8561 14.8532 19.6877 15.0444C17.5308 17.4908 15.1269 17.1813 13.5938 16.0903L18.8303 10.3628H22.6826L25.9778 17.7827L25.1482 18.7195ZM20.0776 24.4279L13.0391 22.4465L7.08082 17.6545L10.4717 10.0178L16.5002 8.21905L17.6871 8.57225L12.2374 14.5289L12.2277 14.5411C12.0226 14.7721 11.8661 15.0521 11.7699 15.3603C11.6737 15.6685 11.6401 15.997 11.6717 16.3218C11.7033 16.6465 11.7993 16.9591 11.9526 17.2365C12.1058 17.5139 12.3124 17.749 12.5571 17.9245C15.047 19.715 18.0516 19.4245 20.4179 17.2426L23.7664 20.2714L20.0776 24.4279ZM16.9629 29.1736C16.9105 29.4094 16.7898 29.6187 16.6197 29.7685C16.4497 29.9182 16.2401 29.9997 16.0243 30C15.9447 29.9999 15.8654 29.9889 15.7882 29.9673L10.7369 28.5449C10.6189 28.5121 10.5075 28.4543 10.4087 28.3745L7.21766 25.808C7.02145 25.6345 6.89223 25.3825 6.8569 25.1044C6.82157 24.8264 6.88286 24.5436 7.02801 24.3152C7.17315 24.0867 7.39096 23.9301 7.63609 23.8779C7.88121 23.8258 8.13476 23.8821 8.34392 24.0352L11.3848 26.4817L16.258 27.8508C16.5073 27.921 16.7215 28.0998 16.8537 28.3479C16.9859 28.5959 17.0251 28.8929 16.9629 29.1736Z"
        fill="white"
      />
    </svg>
  ),

  SmartModeration: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4999 7.04157C16.5015 6.50828 16.3964 5.98006 16.1909 5.48797C15.9853 4.99588 15.6834 4.54987 15.303 4.17617C14.9225 3.80246 14.4712 3.5086 13.9755 3.31188C13.4798 3.11516 12.9498 3.01954 12.4166 3.03065C11.8834 3.04177 11.3578 3.15939 10.8708 3.37659C10.3837 3.5938 9.94502 3.90621 9.58047 4.29544C9.21592 4.68468 8.93288 5.14288 8.748 5.64311C8.56313 6.14333 8.48014 6.67547 8.50394 7.20824C7.7202 7.40975 6.99261 7.78697 6.37624 8.31132C5.75988 8.83567 5.27092 9.4934 4.94639 10.2347C4.62187 10.976 4.47028 11.7814 4.50312 12.59C4.53596 13.3985 4.75236 14.189 5.13594 14.9016C4.46151 15.4495 3.93117 16.1539 3.59106 16.9535C3.25094 17.7531 3.11135 18.6237 3.18442 19.4896C3.2575 20.3554 3.54103 21.1903 4.01034 21.9216C4.47966 22.6529 5.12055 23.2584 5.87727 23.6856C5.78382 24.4086 5.83959 25.143 6.04112 25.8436C6.24265 26.5442 6.58566 27.196 7.04898 27.7588C7.5123 28.3217 8.08608 28.7835 8.7349 29.1159C9.38371 29.4483 10.0938 29.6441 10.8212 29.6913C11.5487 29.7386 12.2781 29.6361 12.9645 29.3904C13.6508 29.1446 14.2794 28.7608 14.8116 28.2626C15.3438 27.7644 15.7682 27.1623 16.0586 26.4937C16.3489 25.825 16.4992 25.1039 16.4999 24.3749V7.04157Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 17.7083C13.6194 17.3145 14.5969 16.5977 15.3089 15.6483C16.0209 14.699 16.4354 13.5599 16.5 12.375"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.50391 7.20825C8.53027 7.85323 8.71234 8.48225 9.03457 9.04159"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.13623 14.903C5.38015 14.7043 5.64117 14.5277 5.91623 14.375"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.50011 24.375C7.58121 24.3754 6.6778 24.1384 5.87744 23.687"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 17.7083H21.8333"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 24.375H24.5C25.2072 24.375 25.8855 24.656 26.3856 25.156C26.8857 25.6561 27.1667 26.3344 27.1667 27.0417V28.375"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 11.0417H27.1667"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8335 11.0417V7.04167C21.8335 6.33442 22.1144 5.65615 22.6145 5.15605C23.1146 4.65595 23.7929 4.375 24.5002 4.375"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8332 18.3751C22.2014 18.3751 22.4998 18.0766 22.4998 17.7084C22.4998 17.3402 22.2014 17.0417 21.8332 17.0417C21.465 17.0417 21.1665 17.3402 21.1665 17.7084C21.1665 18.0766 21.465 18.3751 21.8332 18.3751Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5002 5.04159C24.8684 5.04159 25.1668 4.74311 25.1668 4.37492C25.1668 4.00673 24.8684 3.70825 24.5002 3.70825C24.132 3.70825 23.8335 4.00673 23.8335 4.37492C23.8335 4.74311 24.132 5.04159 24.5002 5.04159Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.1667 29.0416C27.5349 29.0416 27.8333 28.7431 27.8333 28.3749C27.8333 28.0067 27.5349 27.7083 27.1667 27.7083C26.7985 27.7083 26.5 28.0067 26.5 28.3749C26.5 28.7431 26.7985 29.0416 27.1667 29.0416Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.1667 11.7083C27.5349 11.7083 27.8333 11.4099 27.8333 11.0417C27.8333 10.6735 27.5349 10.375 27.1667 10.375C26.7985 10.375 26.5 10.6735 26.5 11.0417C26.5 11.4099 26.7985 11.7083 27.1667 11.7083Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  ActionableInsights: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 21.3333V27.9999"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3335 18.6667V28.0001"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6665 13.3333V27.9999"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3332 4L17.8052 15.528C17.7432 15.5901 17.6697 15.6393 17.5887 15.6729C17.5077 15.7066 17.4209 15.7239 17.3332 15.7239C17.2455 15.7239 17.1587 15.7066 17.0777 15.6729C16.9967 15.6393 16.9231 15.5901 16.8612 15.528L12.4718 11.1387C12.3468 11.0137 12.1773 10.9435 12.0005 10.9435C11.8237 10.9435 11.6542 11.0137 11.5292 11.1387L2.6665 20"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.3335 24V28"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6665 18.6667V28.0001"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
