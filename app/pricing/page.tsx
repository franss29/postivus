import Footer from "@/components/main/footer"
import Header from "@/components/main/header"
import { Check } from "lucide-react"
import PricingFaq from "@/components/pricingFaq"

const plans = [
  {
    name: "Basic Plan",
    price: "500",
    features: [
      "Website optimization",
      "Social media setup and management (1 platform)",
      "Monthly progress report",
      "Email support",
      "Basic competitor analysis",
      "Initial SEO audit",
    ],
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "1000",
    features: [
      "Includes all from the Basic Plan",
      "Social media setup and management (up to 3 platforms)",
      "PPC ad campaign management",
      "Email and phone support",
      "On-page SEO improvements",
      "Monthly content recommendations",
    ],
    popular: true,
  },
  {
    name: "Elite Plan",
    price: "2000",
    features: [
      "Includes all from the Pro Plan",
      "Website design and development",
      "Comprehensive SEO strategy",
      "Social media setup and management (up to 5 platforms)",
      "Content marketing strategy and implementation",
      "In-depth analytics and reporting",
    ],
    popular: false,
  },
]



export default function Pricing(){
  return(
    <>
    <Header/>
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-[64px] font-medium leading-tight">Pricing</h1>
        <p className="text-xl text-gray-600 py-8 max-w-2xl">Elevate Your Online Presence: Competitive Pricing for Exceptional Results</p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index}
            className={`rounded-[32px] p-8 ${plan.popular ? "bg-[#191a23] text-white" : "bg-white text-[#191a23]"} border-2 border-[#191a23]`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[32px] font-medium">{plan.name}</h3>
                {plan.popular && (
                  <div className="bg-[#b9ff66] text-[#191a23] px-4 py-1 rounded-full text-base">
                    Popular
                  </div>
                )}
              </div>

              <div className="flex items-baseline mb-8">
                <span className="text-[56px] font-medium">${plan.price}</span>
                <span className="ml-1 text-base">/month</span>
              </div>

              <button className={`w-full mb-4 py-4 rounded-[16px] font-medium border ${plan.popular ? "bg-[#b9ff66] text-[#191a23] hover:bg-[#b9ff66]/90" : " bg-[#191a23] text-white hover:bg-[#191a23]/90"}`}>Get Started</button>

              <button className={`w-full mb-8 py-4 rounded-[16px] font-medium border ${plan.popular ? "border-white text-white hover:bg-white/10" : "border-[#191a23] text-[#191a23] hover:bg-[#191a23]/5"}`}>Request a quote</button>

              <div className="space-y-4">
                {plan.features.map((feture, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 text-[#b9ff66]"/>
                    <span className="text-base leading-normal">{feture}</span>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing FAQ */}
          
        <PricingFaq/>
        

        
      </div>
    </main>
    <Footer/>
    </>
  )
}