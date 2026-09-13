"use client"

import { Logo } from "@/components/logo"
import { mailtoUrl, site, whatsappUrl } from "@/lib/site"

const columns = [
  {
    title: "Serviços",
    links: [
      { label: "Aplicações e sites", href: "#servicos" },
      { label: "Aplicativos mobile", href: "#servicos" },
      { label: "Integrações e APIs", href: "#servicos" },
      { label: "Interface e experiência", href: "#servicos" },
      { label: "Nuvem e publicação", href: "#servicos" },
    ],
  },
  {
    title: "A erysdev",
    links: [
      { label: "Como trabalhamos", href: "#processo" },
      { label: "Tecnologias", href: "#tecnologias" },
      { label: "Dúvidas frequentes", href: "#duvidas" },
      { label: "Pedir uma proposta", href: "#contato" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp", href: whatsappUrl, external: true },
      { label: site.contact.email, href: mailtoUrl },
      { label: "GitHub", href: site.social.github, external: true },
      { label: "LinkedIn", href: site.social.linkedin, external: true },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <a href="#" aria-label="erysdev — início" className="inline-block">
            <Logo />
          </a>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
            Software house brasileira. Web, mobile e integrações sob medida, com suporte depois que o
            projeto entra no ar.
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="lg:col-span-3">
            <h3 className="label mb-5 text-muted-foreground">{column.title}</h3>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="link-underline text-[15px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted-foreground">
          © {year} {site.legalName}. Todos os direitos reservados.
        </p>
        {/* TODO: apontar para as páginas reais de privacidade e termos */}
        <div className="flex gap-6">
          <a href="#" className="link-underline text-[13px] text-muted-foreground">
            Política de privacidade
          </a>
          <a href="#" className="link-underline text-[13px] text-muted-foreground">
            Termos de uso
          </a>
        </div>
      </div>
    </footer>
  )
}
