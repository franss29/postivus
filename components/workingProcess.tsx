"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct thorough research and develop a comprehensive strategy tailored to your business objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the planned strategies with precision and attention to detail.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description: "We continuously monitor performance and optimize strategies for better results.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description: "Regular reporting and clear communication about progress and results.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description: "We constantly seek ways to improve and enhance performance.",
  },
]


export default function workingProcess(){
  const [openStep, setOpenStep] = React.useState("01")
  return(
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <div className="shrink-0">
          <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Working Procces</h2>
        </div>
        <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step) => {
          const isOpen = openStep === step.number
          return (
            <div
              key={step.number}
              className={cn(
                "rounded-[2rem] border-2 border-[#191A23] overflow-hidden transition-all duration-300",
                "shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]",
                isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]",
              )}
            >
              <button
                onClick={() => setOpenStep(isOpen ? "" : step.number)}
                className="w-full px-8 py-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold">{step.number}</span>
                  <span className="text-xl">{step.title}</span>
                </div>
                <Image
                  src={
                    isOpen
                      ? "/Property 1=Minus.png"
                      : "/Property 1=Plus.png"
                  }
                  alt={isOpen ? "Collapse" : "Expand"}
                  width={32}
                  height={32}
                  className="opacity-80 transition-transform duration-300"
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-8">
                    <div className="border-t border-[#191A23] w-[95%] mx-auto" />
                  </div>
                  <div className="px-8 py-6">
                    <div className="pl-16">
                      <p className="text-black">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}