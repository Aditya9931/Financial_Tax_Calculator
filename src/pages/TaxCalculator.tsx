
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TaxCalculator = () => {
  const [income, setIncome] = useState<string>('');
  const [deductions, setDeductions] = useState<string>('');
  const [taxLiability, setTaxLiability] = useState<number | null>(null);
  const [taxBreakdown, setTaxBreakdown] = useState<Array<{ slab: string; tax: number }>>([]);
  const { toast } = useToast();

  const calculateTax = () => {
    const annualIncome = parseFloat(income) || 0;
    const totalDeductions = parseFloat(deductions) || 0;
    const taxableIncome = Math.max(0, annualIncome - totalDeductions);
    
    let tax = 0;
    const breakdown: Array<{ slab: string; tax: number }> = [];

    // Up to 4,00,000 - NIL
    if (taxableIncome > 400000) {
      breakdown.push({ slab: "Up to ₹4,00,000", tax: 0 });
    } else {
      breakdown.push({ slab: "Up to ₹4,00,000", tax: 0 });
      setTaxBreakdown(breakdown);
      setTaxLiability(0);
      return;
    }

    // 4,00,001 - 8,00,000 - 5%
    if (taxableIncome > 800000) {
      const slabTax = (800000 - 400000) * 0.05;
      tax += slabTax;
      breakdown.push({ slab: "₹4,00,001 - ₹8,00,000", tax: slabTax });
    } else {
      const slabTax = (taxableIncome - 400000) * 0.05;
      tax += slabTax;
      breakdown.push({ slab: "₹4,00,001 - ₹8,00,000", tax: slabTax });
      setTaxBreakdown(breakdown);
      setTaxLiability(tax);
      return;
    }

    // 8,00,001 - 12,00,000 - 10%
    if (taxableIncome > 1200000) {
      const slabTax = (1200000 - 800000) * 0.10;
      tax += slabTax;
      breakdown.push({ slab: "₹8,00,001 - ₹12,00,000", tax: slabTax });
    } else {
      const slabTax = (taxableIncome - 800000) * 0.10;
      tax += slabTax;
      breakdown.push({ slab: "₹8,00,001 - ₹12,00,000", tax: slabTax });
      setTaxBreakdown(breakdown);
      setTaxLiability(tax);
      return;
    }

    // 12,00,001 - 16,00,000 - 15%
    if (taxableIncome > 1600000) {
      const slabTax = (1600000 - 1200000) * 0.15;
      tax += slabTax;
      breakdown.push({ slab: "₹12,00,001 - ₹16,00,000", tax: slabTax });
    } else {
      const slabTax = (taxableIncome - 1200000) * 0.15;
      tax += slabTax;
      breakdown.push({ slab: "₹12,00,001 - ₹16,00,000", tax: slabTax });
      setTaxBreakdown(breakdown);
      setTaxLiability(tax);
      return;
    }

    // 16,00,001 - 20,00,000 - 20%
    if (taxableIncome > 2000000) {
      const slabTax = (2000000 - 1600000) * 0.20;
      tax += slabTax;
      breakdown.push({ slab: "₹16,00,001 - ₹20,00,000", tax: slabTax });
    } else {
      const slabTax = (taxableIncome - 1600000) * 0.20;
      tax += slabTax;
      breakdown.push({ slab: "₹16,00,001 - ₹20,00,000", tax: slabTax });
      setTaxBreakdown(breakdown);
      setTaxLiability(tax);
      return;
    }

    // 20,00,001 - 24,00,000 - 25%
    if (taxableIncome > 2400000) {
      const slabTax = (2400000 - 2000000) * 0.25;
      tax += slabTax;
      breakdown.push({ slab: "₹20,00,001 - ₹24,00,000", tax: slabTax });
    } else {
      const slabTax = (taxableIncome - 2000000) * 0.25;
      tax += slabTax;
      breakdown.push({ slab: "₹20,00,001 - ₹24,00,000", tax: slabTax });
      setTaxBreakdown(breakdown);
      setTaxLiability(tax);
      return;
    }

    // Above 24,00,000 - 30%
    const slabTax = (taxableIncome - 2400000) * 0.30;
    tax += slabTax;
    breakdown.push({ slab: "Above ₹24,00,000", tax: slabTax });
    
    setTaxBreakdown(breakdown);
    setTaxLiability(tax);

    toast({
      title: "Tax Calculation Complete",
      description: "Your tax liability has been calculated based on Budget 2025 slabs.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Tax Liability Calculator</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
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
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Tax Slabs (FY 2025-2026)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Income Tax Slabs</TableHead>
                <TableHead>Tax Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Up to ₹4,00,000</TableCell>
                <TableCell>NIL</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹4,00,001 - ₹8,00,000</TableCell>
                <TableCell>5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹8,00,001 - ₹12,00,000</TableCell>
                <TableCell>10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹12,00,001 - ₹16,00,000</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹16,00,001 - ₹20,00,000</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹20,00,001 - ₹24,00,000</TableCell>
                <TableCell>25%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Above ₹24,00,000</TableCell>
                <TableCell>30%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        {taxLiability !== null && (
          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Tax Breakdown</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tax Slab</TableHead>
                  <TableHead>Tax Amount (₹)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxBreakdown.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.slab}</TableCell>
                    <TableCell>₹{item.tax.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-bold">Total Tax Liability</TableCell>
                  <TableCell className="font-bold">₹{taxLiability.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TaxCalculator;
