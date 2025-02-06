import CallToAction from "@/components/main/callToAction";
import CaseStudies from "@/components/main/caseStudies";
import ContactForm from "@/components/main/contactForm";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import Hero from "@/components/main/hero";
import Services from "@/components/main/services";
import Team from "@/components/main/team";
import Testimonials from "@/components/main/testimonials";
import WorkingProcess from "@/components/main/workingProcess";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <Services />
        <CallToAction />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

