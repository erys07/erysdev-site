"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ease } from "@/lib/motion"

/**
 * Cabeçalho de seção travado na mesma grade das linhas de conteúdo:
 * etiqueta na coluna 1, título nas colunas 2-5, apoio nas 6-11.
 * É o que dá o eixo vertical contínuo da página inteira.
 */
export function SectionHeader({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className="grid gap-6 lg:grid-cols-12 lg:gap-8"
    >
      <p className="label flex items-baseline gap-3 text-muted-foreground lg:col-span-1 lg:flex-col lg:gap-1.5">
        <span className="text-brand">{index}</span>
        <span>{label}</span>
      </p>

      <h2 className="display text-[clamp(2rem,4.2vw,3.25rem)] lg:col-span-4 lg:col-start-2">{title}</h2>

      {children && (
        <div className="max-w-md text-[15px] leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-6">
          {children}
        </div>
      )}
    </motion.div>
  )
}
