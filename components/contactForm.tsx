"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function ContactForm() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-start gap-4 mb-12">
        <div className="inline-block">
          <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-full">Contact Us</h2>
        </div>
        <p className="text-sm text-gray-600 pt-2">Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs</p>
      </div>

      <div className="bg-[#F3F3F3] rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="space-y-8 relative z-10">
            <RadioGroup defaultValue="say-hi" className="flex gap-8">
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="say-hi"
                  id="say-hi"
                  className="w-6 h-6"
                />
                <Label htmlFor="say-hi" className="text-lg">
                  Say Hi
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="get-quote"
                  id="get-quote"
                  className="w-6 h-6"
                />
                <Label htmlFor="get-quote" className="text-lg">
                  Get a Quote
                </Label>
              </div>
            </RadioGroup>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  className="rounded-md border-[#191A23] bg-white h-12 px-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email*
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="rounded-md border-[#191A23] bg-white h-12 px-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message*
                </Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  required
                  className="min-h-[150px] rounded-md border-[#191A23] bg-white px-6 py-4"
                />
              </div>

              <Button className="w-full bg-[#191A23] text-white hover:bg-[#191A23]/90 rounded-md h-12">
                Send Message
              </Button>
            </form>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
            <Image
              src="/contact-us.png"
              alt="Decorative illustration"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

