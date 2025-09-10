import React from "react";
import { ContainerProps, SectionProps } from "@/components/types";

export function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-[600px]",
    md: "max-w-[800px]",
    lg: "max-w-[1200px]",
    xl: "max-w-[1400px]",
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto ${className}`}>
      {children}
    </div>
  );
}

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`py-8 lg:py-16 ${className}`}>{children}</section>;
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#F3EEE9]">{children}</div>;
}

export function MainContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`max-w-[1200px] mx-auto px-4 md:px-8`}>
      <div className={`py-8 lg:py-12 ${className}`}>{children}</div>
    </main>
  );
}

export function CenteredContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-center max-w-[900px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
