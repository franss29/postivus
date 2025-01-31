import Image from "next/image"
import { Button } from "./ui/button"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture-5-JDo0xceNH0PCs9nwNKbtzGnCm9R1Gs.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture-4-6lLGeuRXLuiFck1MFQ7jKgzpGq8jla.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture-3-KAb0didQdC6URc8K6mQy4Zxt0fFI2f.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture-2-XLoEByOU5uKwXyfoZACRmawuIZGtTJ.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture-1-dS7nVhLBiwZ31KCzQP3YFEW4fipRls.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture-JdpkqGS7z0azpZnuLMBvF9mfaIZH4v.png",
  },
]

export default function Team(){
  return(
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <div className="shrink-0">
          <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Team</h2>
        </div>
        <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {teamMembers.map((member, index) => (
          <div 
          key={index}
          className="bg-[#f3f3f3] rounded-[2rem] p-6 border-2 border-[#191A23] shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 mix-blend-multiply">
                    <Image src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-[#b9ff66] rounded-full transition-colors">
                <Linkedin className="w-5 h-5"/>
              </button>
            </div>
              <div className="h-px bg-[#191a23] w-[95%] mx-auto mb-4"/>
              {member.description}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button className="bg-[#191A23] text-white hover:bg-[#191A23]/90 rounded-xl py-3 px-6 text-base h-auto">See all team</Button>
      </div>
    </section>
  )
}