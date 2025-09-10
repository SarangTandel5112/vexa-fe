'use client'

import { Header } from "@/components"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant="landing" />
      {children}
    </>
  )
}
