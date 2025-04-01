
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Building, 
  BarChart3, 
  CreditCard, 
  Wallet, 
  ShieldCheck 
} from "lucide-react";

const serviceItems = [
  {
    title: "Income Tax Filing",
    description: "E-file income tax returns for individuals & professionals",
    icon: FileText,
    bgColor: "bg-blue-50"
  },
  {
    title: "GST Software",
    description: "Effortlessly manage GST compliance and filing",
    icon: Building,
    bgColor: "bg-green-50"
  },
  {
    title: "Tax Saving Investment",
    description: "Tax saving mutual fund investments with ELSS",
    icon: BarChart3,
    bgColor: "bg-purple-50"
  },
  {
    title: "TDS Returns",
    description: "E-file TDS returns with form 16/16A generation",
    icon: CreditCard,
    bgColor: "bg-orange-50"
  },
  {
    title: "Business Incorporation",
    description: "Register your company, LLP or Partnership firm online",
    icon: Wallet,
    bgColor: "bg-red-50"
  },
  {
    title: "Insurance",
    description: "Get the best insurance policy for your needs",
    icon: ShieldCheck,
    bgColor: "bg-yellow-50"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're an individual or a business, we have the right tax and financial solutions for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4`}>
                  <item.icon className="text-cleartax-blue" size={24} />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
