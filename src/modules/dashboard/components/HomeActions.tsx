"use client";

import Link from "next/link";

export function HomeActions() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full mt-4">
            <Link href="/chat" className="w-auto">
                <button
                    className="flex px-8 md:px-16 py-2.5 md:py-3 justify-center items-center rounded-full bg-gradient-to-r from-[#e95d3c] to-[#833422] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#f3eee9] text-[clamp(18px,3vw,22px)] font-bold leading-normal capitalize border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_6px_0_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] whitespace-nowrap"
                    style={{
                        fontFamily:
                            "Arial, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                >
                    Start Demo
                </button>
            </Link>
            {/* <Link href="/survey" className="w-auto">
                <button
                    className="flex px-[60px] md:px-[120px] py-3 justify-center items-center rounded-[400px] bg-white border-2 border-[#e95d3c] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[#e95d3c] text-[clamp(24px,4vw,33px)] font-bold leading-normal capitalize cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_6px_0_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] whitespace-nowrap"
                    style={{
                        fontFamily:
                            "Arial, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                >
                    Start Demo
                </button>
            </Link> */}
        </section>
    );
}
