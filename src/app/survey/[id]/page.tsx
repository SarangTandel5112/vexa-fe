interface PageProps {
  params: {
    id: string
  }
}

export default function SurveyDemoPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-[#F3EEE9]">
      {/* Header */}
      <header className="w-full border-b border-[#D0CAC5] px-4">
        <div className="max-w-[1200px] mx-auto py-9 grid grid-cols-3 items-center">
          <div className="flex">
            <button className="font-sf-pro font-bold text-base text-[#F3EEE9] px-6 py-4 rounded-[36px_36px_8px_36px] bg-[#612A74] hover:bg-[#612A74]/90 transition-colors">
              New Topic
            </button>
          </div>
          <div className="justify-self-center flex items-center gap-[14px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9837779c3620c0be1aa737bab8df4c5ed4314766?width=96"
              alt="Vexa Logo"
              className="w-12 h-12"
            />
            <span className="font-bricolage text-[32px] font-bold text-[#612A74] leading-8">Vexa</span>
          </div>
          <div className="flex justify-end">
            <a href="#" className="font-sf-pro font-bold text-base text-[#F3EEE9] px-6 py-4 rounded-[36px_36px_8px_36px] bg-[#612A74] hover:bg-[#612A74]/90 transition-colors flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#F3EEE9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Contact us
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-12">
        {/* Title Section */}
        <div className="text-center max-w-[900px] mx-auto mb-12">
          <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1] mb-4">
            Want to give Vexa a Quick try?
          </h1>
          <p className="font-sf-pro text-[16px] md:text-[20px] text-[#401A4D] leading-[1.6] md:leading-[2]">
            Think of it as a practice round — just 5 minutes, totally optional. Get a feel for how the chat works before we dive into the real session.
          </p>
        </div>

        {/* Center Image with Glow Effect */}
        <div className="relative mb-12">
          <div className="w-[280px] md:w-[298px] h-[280px] md:h-[298px] rounded-full flex items-center justify-center relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(222,115,122,0.3)]" />
            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ff42fbf69ae4bc5fec82ba05f4315efddb09043e?width=1088"
                alt="Pink swirl decoration"
                className="w-full h-full object-cover scale-150"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Skip Button */}
          <button className="flex items-center gap-2 px-6 py-4 text-[#612A74] hover:bg-[#612A74]/5 transition-colors rounded-full">
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 8.5L22.5 12.5L18.5 16.5" stroke="#612A74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 12.5H22.5" stroke="#612A74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-sf-pro font-bold text-base">Skip</span>
          </button>

          {/* Start Demo Button */}
          <button className="px-8 py-3 text-white font-bold text-[18px] rounded-full bg-gradient-to-r from-[#E8A089] to-[#612A74] hover:shadow-lg transition-all">
            Start Demo
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center max-w-[600px] mx-auto">
          <p className="font-sf-pro text-[14px] md:text-[16px] text-[#827487] underline">
            For any help during the conversation you can pause and{' '}
            <span className="cursor-pointer hover:text-[#612A74] transition-colors">contact us</span>
          </p>
        </div>

        {/* Debug info - remove in production */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Survey ID: {params.id}
        </div>
      </main>
    </div>
  )
}
