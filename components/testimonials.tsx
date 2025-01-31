"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { DivideIcon } from "lucide-react"
import { transform } from "next/dist/build/swc/generated-native"

const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "The digital marketing strategies implemented by Positivus have transformed our online presence. Their team's expertise and dedication have resulted in substantial growth for our business.",
    author: "Sarah Johnson",
    role: "CEO at ABC Company",
  },
  {
    quote:
      "Exceptional service and remarkable results. The Positivus team has helped us achieve our digital marketing goals and exceed our expectations.",
    author: "Michael Brown",
    role: "Director of Marketing at 123 Industries",
  },
  {
    quote:
      "Working with Positivus has been a game-changer for our business. Their innovative approaches and attention to detail have driven significant improvements in our online performance.",
    author: "Emily Davis",
    role: "Marketing Manager at Tech Solutions",
  },
  {
    quote:
      "The expertise and professionalism of the Positivus team are unmatched. They've delivered exceptional results and have been a pleasure to work with.",
    author: "David Wilson",
    role: "Founder at Growth Ventures",
  },
]

export default function Testimonials(){
  return(
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <div className="shrink-0">
          <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Testimonials</h2>
        </div>
        <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-[#191a23] rounded-[2rem] p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 ease-in-out" style={{transform: `translateX(-$ {currentSlide * 100}%)`}}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0" style={{transform: `translateX(${index * 100}%)`}}
                  >
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}