import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/main/testimonials";

const allSuccessStories = [
  {
    title: "E-commerce Fashion Brand",
    description:
      "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    link: "#"
    
  },
  {
    title: "Local Restaurant Chain",
    description:
      "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
    link: "#"
  },
  {
    title: "Healthcare Provider",
    description:
      "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
    link: "#"
  },
  {
    title: "E-commerce Fashion Brand",
    description:
      "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    link: "#"
  },
  {
    title: "Local Restaurant Chain",
    description:
      "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
    link: "#"
  },
  {
    title: "Healthcare Provider",
    description:
      "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
    link: "#"
  },
];

export default function UseCases(){

  return(
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <Image 
                src="/usecasesHero.png"
                alt="Use Case Hero"
                width={400}
                height={400}
                className="object-contain"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Expert Digital Marketing Services</h2>
                <p className="text-gray-700">Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Succes Story */}
        <section className="container mx-auto px-4 py-16">
        <div className="overflow-hidden rounded-3xl bg-[#1a1b23] text-white">
            <div className="p-8 md:p-12">
              <div className="mb-6 inline-block rounded-full bg-[#9efa82] px-4 py-1 text-black">
                Featured Success Story
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                    Scaling Success for a Leading E-Commerce Brand
                  </h3>
                  <p className="mb-6 text-gray-300">
                    Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility,
                    drive traffic, and boost sales.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#b9ff66] font-semibold">
                    <span>Read</span>
                    <Image
                      src="/icon/Icon-4.png"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white p-6 text-center text-black">
                    <div className="text-3xl font-bold">200%</div>
                    <div className="text-sm text-gray-600">increase in organic traffic</div>
                  </div>
                  <div className="rounded-xl bg-white p-6 text-center text-black">
                    <div className="text-3xl font-bold">150%</div>
                    <div className="text-sm text-gray-600">rise in online sales</div>
                  </div>
                  <div className="rounded-xl bg-white p-6 text-center text-black">
                    <div className="text-3xl font-bold">75%</div>
                    <div className="text-sm text-gray-600">reduction in cost-per-click (CPC)</div>
                  </div>
                  <div className="rounded-xl bg-white p-6 text-center text-black">
                    <div className="text-3xl font-bold">300%</div>
                    <div className="text-sm text-gray-600">improvement in conversion rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All success Stories */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <div className="shrink-0">
              <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">All Success Stories</h2>
            </div>
              <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
                Explore Real-Life Examples of Our Proven Digital Marketing Succes through Our Case Studies
              </p>
          </div>

          <div className="border rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {allSuccessStories.map((story, index) => (
                <div key={index} className={`p-8 ${index % 3 !== 2 ? "md:border-r" : ""} ${index < 3 ? "border-b" : ""}`}>
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>

                  
                  <Link href={story.link} className="inline-flex items-center gap-2 text-gray-800 font-medium group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b9ff66] transition-transform group-hover:translate-x-1">
                      <Image src="/icon/Icon-4.png" alt="arrow" width={20} height={20} />
                    </div>
                    <span>Learn more</span>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        <Testimonials/>

        <section className="container mx-auto px-4 py-16">
            <div className="bg-[#b9ff66] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Create Your Next Success Story</h2>
                <p className="text-gray-700 text-lg mb-8">
                  Contact us today to learn more about how our digital marketing services can help your business grow and
                  succeed online.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-[#191a23] px-8 py-3 text-lg font-medium text-white hover:bg-black/90 transition-colors"
                >
                  Get your free proposal
                </Link>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Illustration-sEyZ01iMJbfQMo4RhLHiyZ2mQQpOaK.png"
                  alt="Success illustration"
                  width={300}
                  height={300}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </section>
      </main>
      <Footer/>
    </>
  )
}