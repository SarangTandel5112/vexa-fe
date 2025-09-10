import type { Metadata } from "next";
import { Roboto, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vexa - AI Interview Assistant",
  description: "Turn surveys into real conversations - natural, unbiased, and smart. Helping you uncover insights that truly matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bricolage.variable} antialiased min-h-screen bg-[#F3EEE9]`}
      >
        {children}
      </body>
    </html>
  );
}
