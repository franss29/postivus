import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import Image from "next/image";

const stats = [
  {
    value: "8+",
    label: "Years of Experience"
  },
  {
    value: "50+",
    label: "Expers"
  },
  {
    value: "100+",
    label: "Successful Campaigns"
  },
  {
    value: "20+",
    label: "Industry Awards"
  },
  {
    value: "500%",
    label: "ROI for our clients"
  },
]

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Positivus was founded to help businesses navigate the digital world and achieve online success.",
    position: "left",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description:
      "Positivus was named among the top 50 global digital agencies, affirming our leadership.",
    position: "right",
  },
  {
    year: "2023",
    title: "Innovation and Growth",
    description:
      "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.",
    position: "left",
  },
  {
    year: "2024",
    title: "Leading the Future",
    description:
      "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies.",
    position: "right",
  },
];

const coreValues = [
  {
    title: "Client Success First",
    description:
      "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.",
    image: null,
  },
  {
    title: "Innovation",
    description:
      "We constantly strive to stay ahead of industry trends.",
    image: "/innovationAbout.png",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and partnership.",
    image: "/CollaborationAbout.png",
  },
  {
    title: "Transparency",
    description:
      "Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity.",
    image: null,
  },
];

export default function AboutUs(){
  return(
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="bg-gray-100 rounded-3xl p-8 md:p-12"> 
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/heroSection.png"
                  alt="About Us"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Together for Success</h2>
                <p className="text-gray-700">At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies.
                Together, we build a future of shared success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our impact in Numbers */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <div className="shrink-0">
              <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Our Impact in Numbers</h2>
            </div>
              <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
                A snapshot of the milestones and achievemetns that drive our success
              </p>
          </div>

          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-5 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="border-r border-[#5f5f5f] last:border-none pr-6 mt-6">
                  <h3 className="text-4xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <div className="shrink-0">
              <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Our Journey</h2>
            </div>
              <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
                From humble beginnings to industry leaders, discover hoq Positivus has evolved to drive succes for businesses worldwide.
              </p>
          </div>

          <div className="relative">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`mb-10 flex items-start ${item.position === 'right' ? 'flex-row-reverse text-right' : ''}`}
              >
                {/* Tahun */}
                <div className="w-1/2">
                  <p className="text-2xl font-semibold">{item.year}</p>
                </div>

                {/* Card */}
                <div className="w-1/2">
                  <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Core Values */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <div className="shrink-0">
              <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Core Values</h2>
            </div>
              <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
                At the heart of everything we do are out core values:
              </p>
          </div>

          {/* Card values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((item, index) => (
              <div key={index} className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#191a23]">{item.title}</h3>
                  <hr className="border-gray-300 mb-2 w-2/3"/>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {item.image && (
                  <div className="mt-4 flex justify-end">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer/>
    </>
  )
}