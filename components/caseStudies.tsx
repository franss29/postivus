import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
]

export default function CaseStudies() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <div className="shrink-0">
          <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Case Studies</h2>
        </div>
        <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="bg-[#191A23] text-white rounded-[2rem] p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-4 p-4 border-r last:border-r-0 border-white/70"
            >
              <p className="text-white/90">{caseStudy.description}</p>
              <Link
                href="#"
                className="group flex items-center gap-2 text-[#B9FF66] hover:text-white transition-colors"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

