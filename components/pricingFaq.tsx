"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { QuoteRequestModal } from "@/components/quoteRequestModal"

const faqSections = [
  {
    number: "01",
    title: "Are there any additional fees or charges that may apply?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
  },
  {
    number: "02",
    title: "Can I change or cancel my plan at any time?",
    description:
      "Yes, you have the flexibility to change or cancel your plan at any time. Our goal is to provide you with the best possible service, and we understand that your business needs may evolve over time.",
  },
  {
    number: "03",
    title: "Do you offer a free trial or consultation?",
    description:
      "We offer a free initial consultation to discuss your business goals, target audience, and marketing needs. This helps us determine the best strategy to support your growth.",
  },
  {
    number: "04",
    title: "How do you bill and invoice your clients?",
    description:
      "Our billing and invoicing process is straightforward and transparent. Clients are billed based on the selected services, with clear invoices outlining all charges. Payment methods and schedules can be discussed during onboarding.",
  },
  {
    number: "05",
    title: "Are your services guaranteed to deliver results?",
    description:
      "While we cannot guarantee specific outcomes, we use data-driven strategies and continuous optimization to maximize results. Our team is dedicated to delivering high-quality services that align with your business objectives.",
  },
  {
    number: "06",
    title: "Do you offer contract-based or monthly retainer-based pricing?",
    description:
      "We offer both contract-based and monthly retainer-based pricing models. You can choose the option that best suits your business needs and budget, ensuring flexibility and long-term success.",
  },
]

export default function PricingFaq() {
  const [openStep, setOpenStep] = React.useState("01")
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <section className="py-16">
      <div className="space-y-4">

        <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block mb-12">
          Frequently Asked Questions
        </h2>

        {/* Tombol buka modal */}
        <div className="text-center mb-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 border-2 border-[#191A23] text-[#191A23] rounded-md hover:bg-[#B9FF66] font-medium transition"
          >
            Request a quote
          </button>
        </div>

        {/* Daftar FAQ */}
        {faqSections.map((faq) => {
          const isOpen = openStep === faq.number
          return (
            <div
              key={faq.number}
              className={cn(
                "rounded-[2rem] border-2 border-[#191A23] overflow-hidden transition-all duration-300",
                "shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]",
                isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
              )}
            >
              {/* Judul FAQ */}
              <button
                onClick={() => setOpenStep(isOpen ? "" : faq.number)}
                className="w-full px-8 py-6 flex items-center justify-between"
              >
                <span className="text-lg font-medium">{faq.title}</span>
                <Image
                  src={isOpen ? "/Property 1=Minus.png" : "/Property 1=Plus.png"}
                  alt={isOpen ? "Collapse" : "Expand"}
                  width={32}
                  height={32}
                  className="opacity-80 transition-transform duration-300"
                />
              </button>

              {/* Garis dan isi */}
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-8">
                    <div className="border-t border-[#191a23] w-full mx-auto" />
                  </div>
                  <div className="px-8 py-6">
                    <p className="text-black">{faq.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Komponen Modal */}
        <QuoteRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedPlan="consultation"
        />
      </div>
    </section>
  )
}
