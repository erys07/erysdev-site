"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { ease } from "@/lib/motion"

const services = [
  {
    number: "01",
    title: "Aplicações e sites",
    description:
      "Sistemas internos, painéis administrativos, portais e sites que a sua equipe usa o dia inteiro. Rápidos de verdade: a performance é medida antes de entregar, não prometida depois.",
    keywords: ["React", "Next.js", "TypeScript", "Painéis", "Portais"],
  },
  {
    number: "02",
    title: "Aplicativos mobile",
    description:
      "Um aplicativo para iOS e Android com uma base de código só. A publicação nas lojas também é com a gente, inclusive as revisões da Apple.",
    keywords: ["React Native", "Expo", "Flutter", "Push", "App Store"],
  },
  {
    number: "03",
    title: "Integrações e APIs",
    description:
      "ERP, CRM, meio de pagamento, emissor de nota, WhatsApp. Conectamos o que a sua empresa já usa em vez de mandar trocar tudo.",
    keywords: ["REST", "GraphQL", "Webhooks", "ERP", "Pagamentos"],
  },
  {
    number: "04",
    title: "Interface e experiência",
    description:
      "As telas nascem no protótipo, não no código. Você navega, testa e aprova antes de a primeira linha ser escrita. Mudar ali custa minutos.",
    keywords: ["Protótipo navegável", "Design system", "Acessibilidade"],
  },
  {
    number: "05",
    title: "Nuvem e publicação",
    description:
      "Deploy automatizado, backup, monitoramento e alerta configurados desde o primeiro dia. Se cair de madrugada, a gente fica sabendo antes de você.",
    keywords: ["AWS", "Docker", "CI/CD", "Monitoramento", "Backup"],
  },
  {
    number: "06",
    title: "Sustentação e evolução",
    description:
      "Software não acaba no lançamento. No contrato de evolução você tem horas mensais, define a ordem da fila e recebe relatório do que foi entregue.",
    keywords: ["Horas mensais", "Fila priorizada", "Relatório", "Sem multa"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="border-b border-border">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader index="01" label="Serviços" title="O que a gente constrói">
          Do site institucional ao sistema que roda a operação inteira. Se envolve web, mobile ou fazer
          softwares conversarem entre si, é com a gente.
        </SectionHeader>
      </div>

      <div className="mx-auto max-w-[88rem]">
        {services.map((service, index) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: index * 0.05 }}
            className="rule-item grid gap-3 px-5 py-8 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-10"
          >
            <span className="label text-muted-foreground lg:col-span-1">{service.number}</span>

            <h3 className="display text-2xl lg:col-span-4 lg:text-[1.75rem]">{service.title}</h3>

            <div className="lg:col-span-6 lg:col-start-6">
              <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="label mt-5 flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground">
                {service.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
        <div className="border-t border-border" aria-hidden="true" />
      </div>
    </section>
  )
}
