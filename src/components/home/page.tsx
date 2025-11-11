"use client";

import {
    MainContent,
    Container,
    CenteredContent,
    DashboardCard,
} from "@/components";
import { botData } from "@/utils/data";

export default function Home() {
    return (
        <div className="w-full px-4 py-6 border-b border-[#FAFAF9] bg-[#FAFAF9]">
            <section className="px-4 md:px-8 lg:px-[120px]">
                <CenteredContent className="py-8 md:py-10">
                    <h2 className="font-bricolage text-[28px] md:text-[40px] font-bold leading-[1] text-[#401A4D]">
                        Start a new chat
                    </h2>
                    <h3 className="font-bricolage text-[28px] md:text-[40px] font-bold leading-[1] text-[#401A4D] mt-2">
                        With Vexa AI chatbot
                    </h3>
                </CenteredContent>
            </section>

            <MainContent className="pb-16">
                <Container className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {botData.map((c, i) => (
                        <DashboardCard
                            key={i}
                            id={c.id}
                            title={c.title}
                            description={c.desc}
                            onStartConversation={() =>
                                console.log(
                                    `Starting conversation with ${c.title}`
                                )
                            }
                        />
                    ))}
                </Container>
            </MainContent>
        </div>
    );
}
