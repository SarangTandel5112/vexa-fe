'use client'

import {
  MainContent,
  Container,
  CenteredContent,
  DashboardCard
} from "@/components";

export default function Home() {
  return (
    <>
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
          {[
            {
              title: "AI Customer Support",
              desc:
                "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
            },
            {
              title: "AI Research agent",
              desc:
                "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
            },
            {
              title: "Build your custom agent",
              desc:
                "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
            },
          ].map((c, i) => (
            <DashboardCard 
              key={i}
              title={c.title}
              description={c.desc}
              onStartConversation={() => console.log(`Starting conversation with ${c.title}`)}
            />
          ))}
        </Container>
      </MainContent>
    </>
  );
}
