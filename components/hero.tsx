"use client"

import { motion } from "framer-motion"
import { site, whatsappUrl } from "@/lib/site"
import { ease } from "@/lib/motion"

const rise = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
}

const specs = [
  { label: "Código-fonte", value: "100% seu, garantido em contrato" },
  { label: "Escopo e prazo", value: "Definidos por escrito antes de começar" },
  { label: "Resposta", value: `Em até ${site.responseTime}, de quem constrói` },
]

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-48">
        <motion.p
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={0}
          className="label mb-10 flex items-center gap-2.5 text-muted-foreground lg:mb-14"
        >
          <span className="inline-block h-2 w-2 bg-brand" aria-hidden="true" />
          Agenda aberta para novos projetos
        </motion.p>

        <h1 className="display max-w-[22ch] text-[clamp(2.5rem,6.2vw,5rem)]">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
            >
              Web, mobile e integrações.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block text-muted-foreground"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.19 }}
            >
              A gente entrega{" "}
              <span className="accent-serif text-brand">funcionando</span>.
            </motion.span>
          </span>
        </h1>

        {/* Subtítulo e chamadas, em duas colunas assimétricas */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <motion.p
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0.42}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-1"
          >
            Fazemos aplicações, aplicativos e integrações sob medida. Do primeiro rascunho ao suporte
            depois do lançamento, com escopo e prazo definidos por escrito.
          </motion.p>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0.52}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:col-start-8 lg:justify-end"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-md bg-foreground px-7 text-[15px] font-medium text-background transition-colors hover:bg-brand"
            >
              Começar um projeto
            </a>
            <a href="#processo" className="link-underline text-[15px] font-medium">
              Ver como trabalhamos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Ficha técnica: o que o cliente leva, sem adjetivo */}
      <motion.dl
        variants={rise}
        initial="hidden"
        animate="visible"
        custom={0.66}
        className="mx-auto grid max-w-[88rem] grid-cols-1 border-t border-border sm:grid-cols-3"
      >
        {specs.map((spec, index) => (
          <div
            key={spec.label}
            className={`px-5 py-6 sm:px-8 lg:px-12 ${
              index > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""
            }`}
          >
            <dt className="label mb-2 text-muted-foreground">{spec.label}</dt>
            <dd className="text-[15px] leading-snug">{spec.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
