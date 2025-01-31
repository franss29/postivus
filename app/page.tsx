import CallToAction from "@/components/callToAction";
import CaseStudies from "@/components/caseStudies";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import WorkingProcess from "@/components/workingProcess";

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

