/**
 * Fonte única de verdade do site.
 * Troque os valores abaixo pelos dados reais da erysdev antes de publicar.
 */

export const site = {
  name: "erysdev",
  legalName: "Erys Dev",
  tagline: "Web, mobile e integrações sob medida",
  description:
    "Software house que constrói aplicações web, apps mobile e integrações sob medida — do primeiro rascunho ao suporte depois do lançamento.",
  url: "https://erysdev.com.br", // TODO: domínio real

  contact: {
    email: "contato@erysdev.com.br", // TODO: e-mail real
    // Somente dígitos, com DDI e DDD. Ex.: 5582999998888
    whatsapp: "5582998021885",
    whatsappMessage:
      "Olá! Vim pelo site da erysdev e queria conversar sobre um projeto.",
    country: "Brasil",
  },

  social: {
    instagram: "https://instagram.com/erysdev", // TODO
  },

  /** Prazo de resposta prometido em toda a copy do site. Mantenha coerente. */
  responseTime: "1 dia útil",
} as const

export const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`

export const mailtoUrl = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  "Projeto novo — vim pelo site",
)}`
