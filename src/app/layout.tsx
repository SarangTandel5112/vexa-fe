import type { Metadata } from "next";
import { Roboto, Bricolage_Grotesque } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuthGuard } from "@/components/auth/AuthGuard";
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
        <AuthProvider>
          <AuthGuard>
            {children}
          </AuthGuard>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#0A0A0A',
                border: '1px solid #D0CAC5',
                borderRadius: '12px',
                fontSize: '14px',
                fontFamily: 'var(--font-sf-pro)',
              },
              error: {
                style: {
                  background: '#FEF2F2',
                  color: '#DC2626',
                  border: '1px solid #FECACA',
                },
              },
              success: {
                style: {
                  background: '#F0FDF4',
                  color: '#16A34A',
                  border: '1px solid #BBF7D0',
                },
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
