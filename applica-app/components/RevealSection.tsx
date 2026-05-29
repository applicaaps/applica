"use client"

import * as React from "react"

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function RevealSection({
  children,
  className = "",
  stagger = 0,
}: RevealSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion: show immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "-40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""} ${className}`}
      style={stagger > 0 ? ({ "--stagger": stagger } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
