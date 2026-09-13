"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeader } from "@/components/section-header"
import { whatsappUrl } from "@/lib/site"
import { ease } from "@/lib/motion"

const faqs = [
  {
    question: "Quanto custa desenvolver um sistema com vocês?",
    answer:
      "Varia com o escopo, e desconfie de quem dá um número antes de entender o seu problema. O que dá para garantir é o método: a conversa inicial é gratuita, a proposta também, e ao fim da etapa de descoberta você recebe um valor fechado por escrito. A partir dali o preço só muda se você pedir algo novo, e você aprova antes.",
  },
  {
    question: "Em quanto tempo meu projeto fica pronto?",
    answer:
      "Um site institucional bem-feito costuma levar de 3 a 5 semanas. Um aplicativo ou sistema com login, painel e integrações fica entre 2 e 4 meses até a primeira versão no ar. Mas você não espera até o fim para ver alguma coisa: a cada duas semanas tem entrega em ambiente de testes.",
  },
  {
    question: "O código-fonte fica comigo?",
    answer:
      "Fica, integralmente, e isso está em contrato. O repositório é criado na sua conta desde o primeiro dia, não na nossa. As credenciais de servidor, domínio e serviços também são suas. Se um dia quiser trocar de fornecedor, leva tudo e não precisa da nossa autorização para nada.",
  },
  {
    question: "Já tenho um sistema começado (ou abandonado). Vocês assumem?",
    answer:
      "Assumimos, com uma condição: antes de prometer prazo, fazemos um diagnóstico técnico pago do que existe. É um trabalho curto que aponta o estado real do código, os riscos e o que compensa aproveitar ou refazer. Se decidir seguir com a gente, o valor do diagnóstico entra como crédito no projeto.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Parcelado por etapa entregue, não por mês corrido. Normalmente uma entrada para reservar a agenda da equipe e o restante dividido conforme as entregas são aprovadas. Contrato de sustentação é mensal, com horas definidas e sem multa para encerrar.",
  },
  {
    question: "Vocês atendem empresas de outros estados?",
    answer:
      "Atendemos o Brasil inteiro. Trabalhamos de forma remota, com reuniões marcadas em agenda e um canal direto no WhatsApp com quem está de fato construindo o seu projeto, não com atendente no meio do caminho.",
  },
]

export function Faq() {
  return (
    <section id="duvidas" className="border-b border-border">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader index="04" label="Dúvidas" title="Perguntas que sempre chegam">
          Respostas diretas, do jeito que a gente responderia numa reunião. Ficou de fora alguma coisa?{" "}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            Pergunte no WhatsApp
          </a>
          .
        </SectionHeader>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-[88rem]"
      >
        <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-t border-border last:border-b"
            >
              <div className="px-5 sm:px-8 lg:px-12">
                <AccordionTrigger className="grid gap-3 py-7 text-left hover:no-underline lg:grid-cols-12 lg:gap-8 [&>svg]:mt-1 [&>svg]:text-muted-foreground">
                  <span className="label hidden text-muted-foreground lg:col-span-1 lg:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-xl lg:col-span-10 lg:text-[1.5rem]">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="grid gap-3 pb-8 lg:grid-cols-12 lg:gap-8">
                  <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground lg:col-span-8 lg:col-start-2">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}
