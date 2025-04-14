
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const TaxCalculator = () => {
  const [income, setIncome] = useState<string>('');
  const [deductions, setDeductions] = useState<string>('');
  const [taxLiability, setTaxLiability] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateTax = () => {
    const annualIncome = parseFloat(income) || 0;
    const totalDeductions = parseFloat(deductions) || 0;
    const taxableIncome = Math.max(0, annualIncome - totalDeductions);
    
    let tax = 0;
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
      tax = 112500 + (taxableIncome - 1000000) * 0.3;
    }

    setTaxLiability(tax);
    toast({
      title: "Tax Calculation Complete",
      description: "Your tax liability has been calculated.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Tax Liability Calculator</h1>
      
      <Card className="max-w-2xl mx-auto p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="income">Annual Income (₹)</Label>
            <Input
              id="income"
              type="number"
              placeholder="Enter your annual income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deductions">Total Deductions (₹)</Label>
            <Input
              id="deductions"
              type="number"
              placeholder="Enter total deductions"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
            />
          </div>

          <Button 
            onClick={calculateTax}
            className="w-full bg-cleartax-blue hover:bg-cleartax-darkblue"
          >
            Calculate Tax
          </Button>

          {taxLiability !== null && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Your Tax Liability</h3>
              <p className="text-2xl font-bold text-cleartax-blue">₹ {taxLiability.toFixed(2)}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TaxCalculator;
