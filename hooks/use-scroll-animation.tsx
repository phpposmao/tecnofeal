"use client"

import { useEffect } from "react"

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animar elementos com diferentes tipos de animação
            const fadeUpElements = entry.target.querySelectorAll(".fade-up")
            const fadeLeftElements = entry.target.querySelectorAll(".fade-left")
            const fadeRightElements = entry.target.querySelectorAll(".fade-right")
            const fadeDownElements = entry.target.querySelectorAll(".fade-down")
            const scaleUpElements = entry.target.querySelectorAll(".scale-up")
            const slideUpElements = entry.target.querySelectorAll(".slide-up")

            // Aplicar animações
            fadeUpElements.forEach((el) => el.classList.add("appear"))
            fadeLeftElements.forEach((el) => el.classList.add("appear"))
            fadeRightElements.forEach((el) => el.classList.add("appear"))
            fadeDownElements.forEach((el) => el.classList.add("appear"))
            scaleUpElements.forEach((el) => el.classList.add("appear"))
            slideUpElements.forEach((el) => el.classList.add("appear"))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right, .fade-down, .scale-up, .slide-up")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}