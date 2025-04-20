import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import Image from "next/image";

export default function Blog(){
  return(
    <>
      <Header/>
      <main className="min-h-screen bg-white">
        {/* Hero  section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gray-100 p-8 rounded-3xl flex flex-col md:flex-row items-centerg ga-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/Illustration (3).png"
                alt="about us hero"
                width={400}
                height={400}
                className="object-contain"
              />

            </div>
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-xs px-3 py-1 bg-gray-200 rounded-full inline-block">Marketing Strategies</span>
                <h1 className="text-3xl font-bold">
                  PPC vs. Organic Marketing: Which One Is Right for Your Business?
                </h1>
                <p className="text-gray-700">
                  PPC and organic marketing each offer unique benefits for driving traffic and growing your business.
                  Discover which strategy aligns best with your goals and how to strike the perfect balance.
                </p>
              </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl font-semibold text-center">By the Numbers: Facts About PPC and Organic Marketing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border p-6 shadow-sm">
              <p className="text-gray-500 text-sm mb-1">Businesses earn an average of</p>
              <p className="text-xl font-semibold">$2 for every $1 spent</p>
              <p className="text-gray-500 text-sm mt-1">on PPC advertising.</p>
            </div>
            <div className="rounded-xl bg-[#B9FF66] p-6 shadow-sm">
              <p className="text-lg font-bold">41% of clicks</p>
              <p className="text-sm text-gray-800">
                on search engines go to the top three organic results, showing the importance of ranking highly.
              </p>
            </div>
            <div className="rounded-xl bg-gray-100 p-6 shadow-sm">
              <p className="text-sm text-gray-600">Content marketing costs</p>
              <p className="text-lg font-bold">62% less than paid ads</p>
              <p className="text-sm text-gray-600 mt-1">but generates <strong>3x as many leads</strong></p>
            </div>
            <div className="rounded-xl bg-black text-white p-6 shadow-sm">
              <p className="text-sm">Organic search drives</p>
              <p className="text-lg font-bold text-[#B9FF66]">53% of all website traffic,</p>
              <p className="text-sm">making it the largest single source of traffic.</p>
            </div>
          </div>
        </section>

        {/* Real World Examples */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Real-World Examples</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            PPC and organic marketing have proven effective in different scenarios, and real-world examples highlight their impact. A local restaurant, for instance, leveraged Google Ads to target the search term “Best Italian food near me,” which led to a remarkable 120% increase in reservations within just two weeks.
            <br /><br />
            Similarly, a B2B SaaS company focused on organic marketing by investing in SEO and blog content. This strategic approach helped them rank for competitive keywords and boosted their website traffic by 200% over six months.
            <br /><br />
            Some businesses find success by combining both strategies, like an e-commerce retailer that launched a targeted PPC campaign for seasonal sales while simultaneously optimizing product pages for organic search. This hybrid approach resulted in a 30% higher return on investment compared to relying solely on PPC advertising.
          </p>
        </section>
      </main>
      <Footer/>
    </>
  )
}