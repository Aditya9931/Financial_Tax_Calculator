import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  Building, 
  FileText, 
  Receipt, 
  ChartBar, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const serviceItems = [
  {
    title: "Tax Liability Calculator",
    description: "Calculate your tax liability accurately with our easy-to-use calculator",
    icon: Calculator,
    bgColor: "bg-blue-50",
    action: "Calculate Now",
    path: "/tax-calculator"
  },
  {
    title: "GST Software",
    description: "Complete GST compliance solution with easy filing and return management",
    icon: Building,
    bgColor: "bg-green-50",
    action: "Try GST Software",
    path: "/gst-software"
  },
  {
    title: "E-Invoicing",
    description: "Generate, manage and track e-invoices seamlessly with our platform",
    icon: Receipt,
    bgColor: "bg-purple-50",
    action: "Start E-Invoicing"
  },
  {
    title: "Tax Returns",
    description: "File your income tax returns easily with form 16 upload",
    icon: FileText,
    bgColor: "bg-orange-50",
    action: "File Returns"
  },
  {
    title: "Business Reports",
    description: "Get detailed business analytics and tax planning insights",
    icon: ChartBar,
    bgColor: "bg-red-50",
    action: "View Reports"
  },
  {
    title: "Compliance",
    description: "Stay compliant with automatic updates and expert assistance",
    icon: ShieldCheck,
    bgColor: "bg-yellow-50",
    action: "Learn More"
  }
];

const Services = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleServiceClick = (path: string, title: string) => {
    if (path) {
      navigate(path);
    } else {
      toast({
        title: `${title} Selected`,
        description: "This feature is coming soon!",
        duration: 3000,
      });
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax and compliance solutions for individuals and businesses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {serviceItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4`}>
                  <item.icon className="text-cleartax-blue" size={24} />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{item.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-cleartax-blue text-cleartax-blue hover:bg-cleartax-blue hover:text-white"
                  onClick={() => handleServiceClick(item.path, item.title)}
                >
                  {item.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
