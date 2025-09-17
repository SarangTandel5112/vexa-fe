'use client'

import { Header } from "@/components"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant="dashboard" />
      {children}
    </>
  )
}
