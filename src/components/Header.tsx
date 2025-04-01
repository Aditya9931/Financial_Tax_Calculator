
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-cleartax-blue">ClearTax</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200">For Individuals</a>
            <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200">For Businesses</a>
            <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200">Tax Guide</a>
            <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200">Support</a>
            <Button variant="outline" className="border-cleartax-blue text-cleartax-blue hover:bg-cleartax-blue hover:text-white">Login</Button>
            <Button className="bg-cleartax-blue hover:bg-cleartax-darkblue text-white">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200 py-2">For Individuals</a>
              <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200 py-2">For Businesses</a>
              <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200 py-2">Tax Guide</a>
              <a href="#" className="text-gray-700 hover:text-cleartax-blue transition-colors duration-200 py-2">Support</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-cleartax-blue text-cleartax-blue hover:bg-cleartax-blue hover:text-white w-full">Login</Button>
                <Button className="bg-cleartax-blue hover:bg-cleartax-darkblue text-white w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
