
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ClearTax</h3>
            <p className="mb-4">
              Simplifying taxes, GST, and financial solutions for individuals and businesses across India since 2011.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">For Individuals</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Income Tax Filing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Saving Investments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rent Receipts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Form 16</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">For Businesses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">GST Software</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Invoicing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Way Bill</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TDS Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Incorporation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} ClearTax. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
