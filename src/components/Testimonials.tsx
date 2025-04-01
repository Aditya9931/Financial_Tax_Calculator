
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Self-employed Professional",
    content: "ClearTax made filing my taxes incredibly simple. What used to take me days now takes just 30 minutes. Highly recommended for all professionals!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Small Business Owner",
    content: "The GST filing features are a lifesaver for my business. The interface is intuitive and the support team is very responsive when I have questions.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "IT Professional",
    content: "I've been using ClearTax for 3 years now. Their automated Form 16 parsing saves me so much time, and I always get the maximum tax refund possible.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join millions of satisfied users who've simplified their tax filing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                      size={18} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cleartax-blue text-white flex items-center justify-center font-semibold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
