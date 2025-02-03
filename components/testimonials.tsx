"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

export default function Testimonials() {
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

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <div className="shrink-0">
          <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Testimonials</h2>
        </div>
        <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-[#191A23] rounded-[2rem] p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative">
                      {/* Speech Bubble */}
                      <div className="relative bg-[#191A23] rounded-[2rem] p-8 border border-[#B9FF66] mb-8">
                        <p className="text-white text-lg">{testimonial.quote}</p>
                        {/* Triangle pointer */}
                        <div className="absolute -bottom-5 left-12 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-[#B9FF66] border-r-[12px] border-r-transparent" />
                        <div className="absolute -bottom-4 left-12 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-[#191A23] border-r-[12px] border-r-transparent" />
                      </div>

                      {/* Author info */}
                      <div className="text-[#B9FF66] pl-8">
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={goToPrevious}
                className="text-white hover:text-[#B9FF66] transition-colors p-2"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      currentSlide === index ? "bg-[#B9FF66]" : "bg-white",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="text-white hover:text-[#B9FF66] transition-colors p-2"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

