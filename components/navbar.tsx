"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { whatsappUrl } from "@/lib/site"
import { ease } from "@/lib/motion"

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Dúvidas", href: "#duvidas" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-12"
      >
        <a href="#" aria-label="erysdev — início">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="link-underline text-[15px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 items-center rounded-md bg-foreground px-5 text-[15px] font-medium text-background transition-colors hover:bg-brand md:inline-flex"
        >
          Falar com a gente
        </a>

        {/* Botão do menu mobile — duas barras que viram X */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="menu-mobile"
          className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-[3.25px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${
              mobileMenuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="px-5 py-2 sm:px-8">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-border last:border-b-0">
                  <a
                    href={item.href}
                    className="block py-4 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-6 pt-2 sm:px-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 items-center justify-center rounded-md bg-foreground text-[15px] font-medium text-background"
              >
                Falar com a gente
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
