import Image from "next/image"
import { Button } from "@/components/ui/button"

const companies = [
  {
    name: "Amazon",
    logo: "/amazon.png",
    height: 30,
  },
  {
    name: "Dribbble",
    logo: "/dribble.png",
    height: 24,
  },
  {
    name: "HubSpot",
    logo: "/hubspot.png",
    height: 30,
  },
  {
    name: "Notion",
    logo: "/notion.png",
    height: 30,
  },
  {
    name: "Netflix",
    logo: "/netflix.png",
    height: 28,
  },
  {
    name: "Zoom",
    logo: "/zoom.png",
    height: 24,
  },
]

export default function Hero() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-[64px] font-medium leading-tight">Navigating the digital landscape for success</h1>
            <p className="text-[#191A23]/70 text-xl max-w-xl">
              Our digital marketing agency helps businesses grow and succeed online through a range of services
              including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button className="bg-[#191A23] text-white hover:bg-[#191A23]/90 rounded-xl h-auto px-8 py-4 text-base">
              Book a consultation
            </Button>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/Illustration (3).png"
              alt="Digital Marketing Illustration"
              width={500}
              height={400}
              className="w-full h-auto max-w-[500px]"
              priority
            />
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {companies.map((company) => (
              <div key={company.name} className="flex items-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={company.height}
                  className="h-auto w-auto max-h-[30px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
