
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-cleartax-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your taxes?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join millions of Indians who trust ClearTax for filing their taxes easily and accurately
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-cleartax-blue hover:bg-opacity-90 text-lg py-6 px-8">
              Get Started for Free
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10 text-lg py-6 px-8">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
