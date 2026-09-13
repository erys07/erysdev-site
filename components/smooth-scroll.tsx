"use client"

import type React from "react"
import { useEffect } from "react"
import Lenis from "lenis"

/** Altura da navbar fixa (bate com scroll-padding-top no CSS) — usada como folga ao rolar até uma âncora. */
const NAV_OFFSET = -80

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Quem pediu menos movimento no sistema fica com o scroll nativo.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Com o Lenis ativo, o scroll suave nativo atrapalha — desliga.
    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = "auto"

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })

    // Links de âncora passam a rolar pelo Lenis, com folga para a navbar fixa.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return

      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href === "#") {
        event.preventDefault()
        lenis.scrollTo(0)
        return
      }

      const target = document.querySelector(href)
      if (!target) return

      event.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: NAV_OFFSET })
      history.replaceState(null, "", href)
    }

    document.addEventListener("click", onClick)

    return () => {
      document.removeEventListener("click", onClick)
      cancelAnimationFrame(frame)
      root.style.scrollBehavior = previousBehavior
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
