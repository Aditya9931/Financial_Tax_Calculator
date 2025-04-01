
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-cleartax-lightblue pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              File Income Tax Returns Easily
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              India's most trusted tax filing platform with over 6 million happy users. E-file your taxes in minutes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="bg-cleartax-blue hover:bg-cleartax-darkblue text-white px-8 py-6 text-lg">
                Start Filing Now <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100 px-8 py-6 text-lg">
                Explore Features
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-cleartax-darkblue border-2 border-white flex items-center justify-center text-white text-xs">★</div>
                <div className="w-8 h-8 rounded-full bg-cleartax-darkblue border-2 border-white flex items-center justify-center text-white text-xs">★</div>
                <div className="w-8 h-8 rounded-full bg-cleartax-darkblue border-2 border-white flex items-center justify-center text-white text-xs">★</div>
              </div>
              <span className="text-gray-600 text-sm">
                <span className="font-bold">4.8/5</span> from over 100,000+ reviews
              </span>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick ITR Filing</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 border border-gray-200 rounded-md">
                  <div className="w-10 h-10 rounded-full bg-cleartax-lightblue flex items-center justify-center text-cleartax-blue mr-3">1</div>
                  <span className="text-gray-700">Upload your Form 16</span>
                </div>
                <div className="flex items-center p-3 border border-gray-200 rounded-md">
                  <div className="w-10 h-10 rounded-full bg-cleartax-lightblue flex items-center justify-center text-cleartax-blue mr-3">2</div>
                  <span className="text-gray-700">We'll prepare your ITR</span>
                </div>
                <div className="flex items-center p-3 border border-gray-200 rounded-md">
                  <div className="w-10 h-10 rounded-full bg-cleartax-lightblue flex items-center justify-center text-cleartax-blue mr-3">3</div>
                  <span className="text-gray-700">E-file & get instant acknowledgement</span>
                </div>
                <Button className="w-full bg-cleartax-green hover:bg-opacity-90 text-white py-5">
                  Start for Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
