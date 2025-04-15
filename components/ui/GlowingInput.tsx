"use client"

import { useState, useRef } from "react"
import type { MouseEvent } from "react"

export default function GlowingInput({ className = "", style = {}, ...props }) {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div >
      <div
        ref={containerRef}
        className="relative w-full max-w-md"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="relative">
          

          {/* Border glow */}
          <div
            className={`absolute -inset-0.5 rounded-lg transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: isHovering
                ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(167, 139, 250, 1) 0%, rgba(139, 92, 246, 0.6) 40%, transparent 80%)`
                : "transparent",
              filter: "blur(4px)",
              pointerEvents: "none",
            }}
          />

          {/* Input */}
          <input
      {...props}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative w-full px-6 py-4 bg-gray-800 rounded-lg text-white placeholder-gray-400 outline-none border border-gray-700 transition-transform duration-300 z-10 ${className}`}
      style={{
        transform: isHovering ? "scale(1.01)" : "scale(1)",
        ...style,
      }}
    />
        </div>
      </div>
    </div>
  )
}