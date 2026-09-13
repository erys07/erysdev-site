import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { TechStack } from "@/components/tech-stack"
import { Faq } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main id="conteudo" className="min-h-screen">
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
