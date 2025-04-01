
import { CheckCircle } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-cleartax-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ClearTax</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by millions of Indians for simplifying taxes and finances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-cleartax-blue mb-2">6M+</div>
            <h3 className="text-xl font-semibold mb-4">Happy Users</h3>
            <p className="text-gray-600 mb-6">Join millions of satisfied users who trust us with their taxes and finances</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-cleartax-green mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700">100% accurate tax filing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cleartax-green mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700">Private & secure data handling</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-cleartax-blue mb-2">₹15,000 Cr+</div>
            <h3 className="text-xl font-semibold mb-4">Tax Saved</h3>
            <p className="text-gray-600 mb-6">We've helped users save thousands of crores in taxes through our platform</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-cleartax-green mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700">Maximum deductions identified</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cleartax-green mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700">Tax-saving recommendations</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-cleartax-blue mb-2">10+ Years</div>
            <h3 className="text-xl font-semibold mb-4">Industry Experience</h3>
            <p className="text-gray-600 mb-6">A decade of expertise in simplifying taxes and financial services</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-cleartax-green mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700">CA-assisted services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-cleartax-green mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700">Dedicated customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
