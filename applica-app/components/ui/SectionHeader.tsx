import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  alignment?: "left" | "center" | "right"
}

export function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4 mb-12",
        {
          "items-start text-left": alignment === "left",
          "items-center text-center": alignment === "center",
          "items-end text-right": alignment === "right",
        },
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--color-on-surface-variant)] max-w-[700px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
