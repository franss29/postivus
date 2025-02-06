import { Button } from "../ui/button";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gray-100 rounded-[2rem] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
          <h2 className="text-3xl font-bold">Let&apos;s make things happen</h2>
            <p className="text-gray-600">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-xl h-auto text-base py-3 px-6">
              Get your free proposal
            </Button>
          </div>

          <div className="relative w-64 h-64">
            <Image
              src="/callToAction.png"
              alt="Call To Action Illustration"
              width={359}
              height={394}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}