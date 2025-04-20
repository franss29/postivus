import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import Image from "next/image";
import Link from "next/link";

const seoProcessSteps = [
  {
    step: "01",
    title: "Website Audit & Analysis",
    text: "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
    icon: "/Vector (1).png",
  },
  {
    step: "02",
    title: "Keyword Research & Strategy",
    text: "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.",
    icon: "/Vector (1).png",
  },
  {
    step: "03",
    title: "On-Page Optimization",
    text: "We optimize your website's structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.",
    icon: "/Vector (1).png",
  },
  {
    step: "04",
    title: "Content Creation & Optimization",
    text: "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.",
    icon: "/Vector (1).png",
  },
  {
    step: "05",
    title: "Link Building",
    text: "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
    icon: "/Vector (1).png",
  },
  {
    step: "06",
    title: "Monitoring & Reporting",
    text: "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.",
    icon: "/Vector (1).png",
  },
];

const useCases = [
  {
    title: 'E-commerce Fashion Brand',
    description: 'We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.'
  },
  {
    title: 'Local Restaurant Chain',
    description: 'By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.'
  },
  {
    title: 'Healthcare Provider',
    description: 'Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.'
  }
];


export default function Services(){
  return(
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero section */}
          <div className="bg-gray-100 rounded-3xl p-4 md:p-12 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/heroSection.png"
                  alt="Digital Marketing"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold mb-4">Together for Success</h2>
                <p className="text-gray-700 mb-8 text-lg">At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success.</p>
              </div>
            </div>
          </div>
          
          {/* Tombol Back */}
          <Link href="/">
            <div className="flex items-center space-x-2 py-16">
              <Image src="/icon/Icon (1).png" alt="back" width={42} height={42}/>
              <span className="text-black text-base">Back</span>
            </div>
          </Link>

          {/* Card Content */}
          <div className="bg-[#191a23] text-white rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:space-x-6 py-16">
            {/* Bagian kiri Ikon dan Judul */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 md:mb-0 md:w-1/2">
              <Image src="/star.png" width={30} height={30} alt="Star Icon" className="mb-4"/>
              <div className="bg-[#B9FF66] text-black font-normal text-xl px-2 py-1 rounded-xl inline-block leading-snug">
                Search engine optimaztion
              </div>
            </div>
            {/* Bagian kanan deskripsi dan button */}
            <div className="md:w-2/3">
              <div className="w-full">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  SEO is the process of improving your website&apos;s visibility on search engines like Google. By optimizing your content and site structure, we help your business rank higher in search results, driving more organic traffic and potential customers.
                </p>
                <button className="w-full bg-white text-black font-md py-3 px-6 rounded-xl hover:bg-gray-200 transition">
                  Boost My Rankings
                </button>
              </div>
            </div>
          </div>

          {/* Seo Process */}
          <section className="container mx-auto px-4 py-16">
            {/* Judul dan Deskripsi */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
                <div className="shrink-0">
                  <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">How We Work: SEO Process</h2>
                </div>
                <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
                  Our step-by-step SEO process ensures your website ranks higher, attracts more traffic, and drives lasting results.
                </p>
            </div>
            {/* Step Cards Vertikal */}
            <div className="flex flex-col gap-6">
                {seoProcessSteps.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F3F3F3] rounded-2xl p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={`Step ${item.step}`}
                        fill
                        className="object-contain"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-[#B9FF66] font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#191A23]">
                        {item.title}
                      </h4>
                      <p className="text-[#5F5F5F] text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
          </section>

          {/* Use Cases */}
          <section className="container mx-auto px-4 py-16">
            {/* Judul dan deksripsi */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
                <div className="shrink-0">
                  <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Use Cases</h2>
                </div>
                <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
                  Explore Real-Life Examples of Our Proven Digital Marketing Succes through Our Case Studies
                </p>
            </div>

            {/* Cards */}
            <div className="bg-[#191a23] text-white rounded-[40px] p-8 grid md:grid-cols-3 gap-8">
                {useCases.map((item, index) => (
                  <div key={index} className="border-r border-[#5f5f5f] last:border-none pr-6">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    <a href="#" className="text-[#b9FF66] font-medium flex items-center gap-1 group:">
                      Learn more
                      <Image src="/icon/Icon-2.png" alt="arrow icon" width={16} height={16} className="ml-1"/>
                    </a>
                  </div>
                ))}
            </div>
          </section>

          <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-[32px] border border-black p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-md">
              {/* Text Section */}
              <div className="flex-1 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#191A23] mb-4">
                  Ready to Elevate Your Search Rankings?
                </h2>
                <hr className="border-t border-[#191A23] w-3/4 md:w-2/3 mb-4" />
                <p className="text-[#191A23] mb-4">
                  Our proven SEO strategies are designed to help your business achieve long-lasting success in search engines. Whether you want to boost organic traffic, improve keyword rankings, or increase conversions, we&apos;re here to make it happen.
                </p>
                <p className="font-semibold text-[#191A23] mb-6">
                  Lets work together to grow your online presence.
                </p>
                <button className="bg-[#B9FF66] text-[#191A23] px-6 py-3 rounded-xl font-medium shadow-md hover:brightness-95 transition">
                  Start My SEO Journey
                </button>
              </div>

              {/* Image Section */}
              <div className="flex-1 max-w-md">
                <Image src="/services.jpg" alt="SEO Illustration" width={500} height={300} className="w-full h-auto" />
              </div>
            </div>

          </section>
        </div>
      </main>
      <Footer/>
    </>
  )
}