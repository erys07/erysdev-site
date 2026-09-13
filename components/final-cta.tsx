"use client"

import { motion } from "framer-motion"
import { mailtoUrl, site, whatsappUrl } from "@/lib/site"
import { ease } from "@/lib/motion"

export function FinalCTA() {
  return (
    <section id="contato" className="border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
      >
        <h2 className="display max-w-[20ch] text-[clamp(2.25rem,5.6vw,4.5rem)]">
          Tem um projeto na cabeça?{" "}
          <span className="text-muted-foreground">
            <span className="accent-serif text-brand">Conta</span> pra gente.
          </span>
        </h2>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground lg:col-span-6">
            Descreva em duas linhas o que você precisa. Em até {site.responseTime} você recebe uma resposta
            de quem vai construir, com os próximos passos e sem compromisso.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:col-start-8 lg:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-md bg-foreground px-7 text-[15px] font-medium text-background transition-colors hover:bg-brand"
            >
              Chamar no WhatsApp
            </a>
            <a href={mailtoUrl} className="link-underline text-[15px] font-medium">
              {site.contact.email}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
