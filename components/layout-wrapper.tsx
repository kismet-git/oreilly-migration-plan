"use client"

import type React from "react"

import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutWrapperProps {
  children: React.ReactNode
  title: string
}

export function LayoutWrapper({ children, title }: LayoutWrapperProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:ml-[280px]">
        <Header title={title} />

        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6 lg:p-8">{children}</div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
