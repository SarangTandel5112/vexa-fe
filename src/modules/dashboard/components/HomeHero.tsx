"use client";

export function HomeHero() {
    return (
        <section className="flex flex-col items-center text-center gap-3">
            <h1 className="text-[#401a4d] font-bricolage text-[clamp(32px,5vw,40px)] font-semibold leading-none">
                AI Research Agent
            </h1>
            <p className="text-[#401a4d] font-bricolage text-[clamp(20px,3vw,26px)] font-normal leading-[1.5] max-w-[600px]">
                Here&apos;s a quick preview of what will happen in your session
            </p>
        </section>
    );
}
