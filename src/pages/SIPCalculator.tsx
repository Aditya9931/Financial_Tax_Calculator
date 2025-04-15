
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [returnRate, setReturnRate] = useState<string>('');
  const [result, setResult] = useState<{
    futureValue: number;
    totalInvestment: number;
    returns: number;
  } | null>(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment) || 0; // Monthly investment
    const n = (parseFloat(duration) || 0) * 12; // Duration in months
    const r = (parseFloat(returnRate) || 0) / 100 / 12; // Monthly interest rate

    // FV = P [ (1+i)^n-1 ] * (1+i)/i
    const futureValue = P * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    const totalInvestment = P * n;
    const returns = futureValue - totalInvestment;

    setResult({
      futureValue,
      totalInvestment,
      returns
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">SIP Calculator</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="monthlyInvestment">Monthly Investment (₹)</Label>
              <Input
                id="monthlyInvestment"
                type="number"
                placeholder="Enter monthly investment amount"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Investment Duration (Years)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="Enter investment duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="returnRate">Expected Return Rate (% p.a.)</Label>
              <Input
                id="returnRate"
                type="number"
                placeholder="Enter expected return rate"
                value={returnRate}
                onChange={(e) => setReturnRate(e.target.value)}
              />
            </div>

            <Button 
              onClick={calculateSIP}
              className="w-full bg-cleartax-blue hover:bg-cleartax-darkblue"
            >
              <Calculator className="mr-2" />
              Calculate Returns
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">How Does SIP Calculator Work?</h2>
          <div className="space-y-4 text-sm">
            <p>A SIP Calculator uses the following formula:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-mono">FV = P [ (1+i)^n-1 ] * (1+i)/i</p>
            </div>
            <p>Where:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>FV</strong> = Future value or the amount you get at maturity</li>
              <li><strong>P</strong> = Amount you invest through SIP</li>
              <li><strong>i</strong> = Compounded rate of return</li>
              <li><strong>n</strong> = Investment duration in months</li>
            </ul>
          </div>
        </Card>

        {result && (
          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-6">Investment Summary</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Total Investment</TableCell>
                  <TableCell>{formatCurrency(result.totalInvestment)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Estimated Returns</TableCell>
                  <TableCell>{formatCurrency(result.returns)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Future Value</TableCell>
                  <TableCell className="font-bold">{formatCurrency(result.futureValue)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        )}

        <Card className="p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Info className="mr-2" />
            Example Calculation
          </h2>
          <div className="space-y-4">
            <p>Let's look at an example of how the SIP calculator works:</p>
            <p>Jane is 30 years old and works as an investor. She wants to invest for retirement through a mutual fund SIP with these parameters:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Investment amount: ₹35,000 per month</li>
              <li>Investment period: 30 years</li>
              <li>Expected interest rate: 8% per annum</li>
              <li>Frequency of investments: Monthly</li>
            </ul>
            <p className="font-semibold mt-4">Results:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Future Value of the investment: ₹5,25,10,331</li>
              <li>Total Investment: ₹1,26,00,000 (35,000 * 12 * 30)</li>
              <li>Potential Returns: ₹3,99,10,331 (Future Value - Total Investment)</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SIPCalculator;
