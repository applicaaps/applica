import * as React from "react"
import { getCurrentUser } from "@/lib/db"
import Sidebar from "./Sidebar"

export default async function AreaRiservataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  return (
    <div className="min-h-screen bg-[var(--color-surface-container-low)] pt-8 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          <Sidebar userData={{ username: user.name, avatar: user.avatar || "U" }} />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>

        </div>
      </div>
    </div>
  )
}
