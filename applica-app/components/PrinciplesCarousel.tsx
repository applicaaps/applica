"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Heart, Brain, CheckCircle2 } from "lucide-react"

const principles = [
  {
    id: 0,
    title: "Accessibile",
    desc: "Tariffe calmierate, percorsi in convenzione, nessun costo nascosto. Il benessere psicologico non è un servizio premium: è un diritto che difendiamo ogni giorno nella pratica.",
    icon: Users,
    colorClass: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
    iconClass: "text-white"
  },
  {
    id: 1,
    title: "Umana",
    desc: "La relazione terapeutica è lo strumento più potente che abbiamo. La costruiamo con rispetto, attenzione e continuità.",
    icon: Heart,
    colorClass: "bg-white border border-[var(--color-outline-variant)] text-[var(--color-on-surface)]",
    iconClass: "text-[var(--color-primary)]"
  },
  {
    id: 2,
    title: "Scientifica",
    desc: "Protocolli evidence-based, formazione continua e supervisione clinica. Ogni intervento ha un fondamento verificabile.",
    icon: Brain,
    colorClass: "bg-white border border-[var(--color-outline-variant)] text-[var(--color-on-surface)]",
    iconClass: "text-[var(--color-primary)]"
  },
  {
    id: 3,
    title: "Pratica",
    desc: "Carte terapeutiche, schede di monitoraggio, kit esperienziali, materiali psicoeducativi. Non ci limitiamo alla seduta: diamo strumenti concreti da usare nella vita di ogni giorno.",
    icon: CheckCircle2,
    colorClass: "bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]",
    iconClass: "text-[var(--color-on-secondary-container)]"
  }
]

// The spring animation definition per SKILL.md guidelines
const springConfig = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20
}

export function PrinciplesCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Autoplay
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % principles.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered])

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % principles.length)
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + principles.length) % principles.length)

  return (
    <div
      className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false}>
        {principles.map((item, index) => {
          // Calculate relative position based on activeIdx
          // diff is distance from active center (-1 = left, 0 = center, 1 = right, 2 = hidden)
          let diff = index - activeIdx

          // Handle wrapping for a 4-item array
          if (diff < -1) diff += principles.length
          if (diff > 2) diff -= principles.length
          if (diff === 3) diff = -1

          let x = 0
          let scale = 1
          let zIndex = 0
          let opacity = 1
          let blur = "blur(0px)"

          if (diff === 0) {
            // Center (Active)
            x = 0
            scale = 1
            zIndex = 10
            opacity = 1
            blur = "blur(0px)"
          } else if (diff === 1) {
            // Right (Next)
            x = 75
            scale = 0.85
            zIndex = 5
            opacity = 0.6
            blur = "blur(2px)"
          } else if (diff === -1) {
            // Left (Previous)
            x = -75
            scale = 0.85
            zIndex = 5
            opacity = 0.6
            blur = "blur(2px)"
          } else {
            // Hidden (Back)
            x = 0
            scale = 0.7
            zIndex = 0
            opacity = 0
            blur = "blur(4px)"
          }

          const Icon = item.icon
          const isInteractive = diff !== 0

          return (
            <motion.div
              key={item.id}
              className={`absolute w-[280px] md:w-[400px] h-[300px] md:h-[340px] p-8 md:p-10 rounded-2xl flex flex-col gap-6 ambient-shadow-lg select-none ${item.colorClass} ${isInteractive ? 'cursor-pointer' : ''}`}
              initial={false}
              animate={{
                x: `${x}%`,
                scale: scale,
                zIndex: zIndex,
                opacity: opacity,
                filter: blur
              }}
              transition={springConfig}
              onClick={() => {
                if (diff === 1) handleNext()
                else if (diff === -1) handlePrev()
              }}
            >
              <Icon size={32} className={item.iconClass} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm md:text-base opacity-90 leading-relaxed md:leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Pagination Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {principles.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${activeIdx === idx
                ? 'w-8 bg-[var(--color-primary)]'
                : 'w-2 bg-[var(--color-outline-variant)] hover:bg-[var(--color-outline)]'
              }`}
            aria-label={`Vai al principio ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
