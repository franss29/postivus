import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "Search engine optimization",
      background: "bg-[#F3F3F3]",
      illustrasion: "/Illustration (1).png",
      learnMoreIcon:"/icon/Icon-2.png"
      
    },
    {
      title: "Pay-per-click advertising",
      background: "bg-[#B9FF66]",
      illustrasion: "/Illustration (2).png",
      learnMoreIcon:"/icon/Icon-2.png"
    },
    {
      title: "Social Media Marketing",
      background: "bg-[#191A23]",
      illustrasion: "/Illustration (3).png",
      learnMoreIcon:"/icon/Icon-1.png"
      
    },
    {
      title: "Email Marketing",
      background: "bg-[#F3F3F3]",
      illustrasion: "/Illustration (4).png",
      learnMoreIcon:"/icon/Icon-2.png"
      
    },
    {
      title: "Content Creation",
      background: "bg-[#B9FF66]",
      illustrasion: "/Illustration (5).png",
      learnMoreIcon:"/icon/Icon-2.png"
      
    },
    {
      title: "Analytics and Tracking",
      background: "bg-[#191A23]",
      illustrasion: "/Illustration (6).png",
      learnMoreIcon:"/icon/Icon-1.png"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <div className="shrink-0">
          <h2 className="bg-[#B9FF66] px-4 py-2 text-xl font-medium rounded-md inline-block">Services</h2>
        </div>
        <p className="text-[#191A23] text-base md:text-lg lg:text-xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          These services include:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.background} rounded-[2rem] p-8 relative border-2 border-[#191A23] shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]`}
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="bg-[#B9FF66] rounded-md">
                  <h3
                    className={`text-base md:text-lg font-medium px-6 py-2 ${
                      service.background === "bg-[#B9FF66]" ? "bg-white rounded-md" : ""
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="w-20 h-20 md:w-28 md:h-28">
                  <Image
                    src={service.illustrasion || "/placeholder.svg"}
                    alt={service.title}
                    width={310}
                    height={70}
                    className={`w-full h-full object-contain ${
                      service.background === "bg-[#191A23]" ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
              </div>

              <button className="flex items-center gap-2 group mt-auto">
                <span className={service.background === "bg-[#191A23]" ? "text-white" : "text-[#191A23]"}>
                  Learn more
                </span>
                <div className="relative w-8 h-8">
                  <Image
                    src={service.learnMoreIcon || "/placeholder.svg"}
                    alt="Learn more"
                    width={32}
                    height={32}
                    className="absolute"
                  />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

