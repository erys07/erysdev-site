"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { ease } from "@/lib/motion"

/** Edite para refletir exatamente o que a equipe domina hoje. */
const stack = [
  { area: "Front-end", tools: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { area: "Mobile", tools: ["React Native", "Expo", "Flutter"] },
  { area: "Back-end", tools: ["Node.js", "NestJS", "Python", "PostgreSQL", "Redis"] },
  { area: "Infraestrutura", tools: ["AWS", "Docker", "Vercel", "CI/CD", "Supabase"] },
  { area: "Integrações", tools: ["Stripe", "Firebase", "API do WhatsApp", "ERPs", "Emissores de NFe"] },
]

export function TechStack() {
  return (
    <section id="tecnologias" className="border-b border-border">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader index="03" label="Tecnologias" title="Ferramentas maduras, escolhidas pelo problema">
          Nada de adotar a moda da semana no projeto do cliente. Tecnologias consolidadas, com comunidade
          grande e gente no mercado para dar manutenção depois.
        </SectionHeader>
      </div>

      <dl className="mx-auto max-w-[88rem]">
        {stack.map((group, index) => (
          <motion.div
            key={group.area}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: index * 0.05 }}
            className="rule-item grid gap-2 px-5 py-6 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12"
          >
            <dt className="label text-muted-foreground lg:col-span-4">{group.area}</dt>
            <dd className="lg:col-span-7 lg:col-start-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </dd>
          </motion.div>
        ))}
        <div className="border-t border-border" aria-hidden="true" />
      </dl>
    </section>
  )
}
