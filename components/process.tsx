"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { whatsappUrl } from "@/lib/site"
import { ease } from "@/lib/motion"

const steps = [
  {
    number: "01",
    title: "Descoberta",
    duration: "1 a 2 semanas",
    description:
      "Antes de escrever código, entendemos o problema. Conversamos com quem vai usar, mapeamos o que já existe e definimos o que entra agora e o que fica para depois.",
    deliverables: ["Escopo detalhado", "Prazo e custo estimados", "Proposta com valor fechado"],
  },
  {
    number: "02",
    title: "Design",
    duration: "1 a 3 semanas",
    description:
      "Fluxos, telas e um protótipo que você abre no celular e navega como se o aplicativo já existisse. É aqui que se muda de ideia, e mudar aqui é de graça.",
    deliverables: ["Protótipo navegável", "Design system", "Aprovação por escrito"],
  },
  {
    number: "03",
    title: "Construção",
    duration: "4 a 12 semanas",
    description:
      "Entregas a cada duas semanas em um ambiente de testes só seu. Você acompanha o projeto funcionando de verdade, não em apresentação de slide.",
    deliverables: ["Ambiente de homologação", "Revisão de código", "Testes automatizados"],
  },
  {
    number: "04",
    title: "Lançamento e evolução",
    duration: "contínuo",
    description:
      "Publicação, monitoramento e passagem de conhecimento. Depois você escolhe: contrato de evolução com a gente ou o seu time assume, com a documentação na mão.",
    deliverables: ["Deploy e monitoramento", "Documentação técnica", "Suporte acordado"],
  },
]

export function Process() {
  return (
    <section id="processo" className="border-b border-border">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader index="02" label="Processo" title="Como um projeto anda aqui">
          Quatro etapas, prazo definido em cada uma e nada de caixa-preta. Em qualquer segunda-feira você
          sabe onde o seu projeto está.
        </SectionHeader>
      </div>

      <ol className="mx-auto max-w-[88rem]">
        {steps.map((step, index) => (
          <motion.li
            key={step.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: index * 0.06 }}
            className="rule-item grid gap-3 px-5 py-8 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-10"
          >
            <span className="label text-muted-foreground lg:col-span-1">{step.number}</span>

            <div className="lg:col-span-4">
              <h3 className="display text-2xl lg:text-[1.75rem]">{step.title}</h3>
              <p className="label mt-2 text-muted-foreground">{step.duration}</p>
            </div>

            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-6">
              {step.description}
            </p>

            <ul className="space-y-1.5 lg:col-span-3 lg:col-start-10">
              {step.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-[15px] leading-snug">
                  <span className="mt-[0.55em] inline-block h-[3px] w-[3px] shrink-0 bg-brand" aria-hidden="true" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      {/* Bloco de orçamento */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-[88rem] border-t border-border px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <h3 className="display text-[clamp(1.75rem,3.4vw,2.5rem)] lg:col-span-5">
            E quanto <span className="accent-serif text-brand">custa</span>?
          </h3>

          <div className="lg:col-span-4">
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Depende do escopo, e desconfie de quem responde isso sem te ouvir. A conversa inicial e a
              proposta não custam nada. Ao fim da descoberta você recebe valor fechado e prazo por escrito.
            </p>
          </div>

          <div className="lg:col-span-3 lg:flex lg:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-md bg-foreground px-7 text-[15px] font-medium text-background transition-colors hover:bg-brand"
            >
              Pedir uma proposta
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
