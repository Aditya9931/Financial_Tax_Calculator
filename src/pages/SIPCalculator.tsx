import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Share2, Info } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const SIPCalculator = () => {
  const [investmentType, setInvestmentType] = useState<string>("sip");
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('5000');
  const [duration, setDuration] = useState<number>(26);
  const [returnRate, setReturnRate] = useState<number>(10);
  const [result, setResult] = useState<{
    futureValue: number;
    totalInvestment: number;
    returns: number;
  }>({
    futureValue: 5893276,
    totalInvestment: 1560000,
    returns: 4333276
  });

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment) || 0;
    const n = duration * 12;
    const r = returnRate / 100 / 12;
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

  const chartData = [
    { name: 'Principal', value: result.totalInvestment, color: '#22C55E' },
    { name: 'Returns', value: result.returns, color: '#93C5FD' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">SIP Calculator</h1>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          SHARE
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <Label>SIP Investment</Label>
              <RadioGroup
                defaultValue="sip"
                className="flex gap-4 mt-2"
                onValueChange={setInvestmentType}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sip" id="sip" />
                  <Label htmlFor="sip">SIP Investment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lumpsum" id="lumpsum" />
                  <Label htmlFor="lumpsum">Lumpsum</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Monthly SIP Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5">₹</span>
                <Input
                  className="pl-8"
                  type="text"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>SIP Period</Label>
                <span className="text-sm font-medium">{duration} YEARS</span>
              </div>
              <Slider
                value={[duration]}
                min={1}
                max={30}
                step={1}
                onValueChange={(value) => setDuration(value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Expected Return Rate (p.a)</Label>
                <span className="text-sm font-medium">{returnRate}%</span>
              </div>
              <Slider
                value={[returnRate]}
                min={1}
                max={30}
                step={0.1}
                onValueChange={(value) => setReturnRate(value[0])}
              />
            </div>

            <Button 
              onClick={calculateSIP}
              className="w-full bg-cleartax-blue hover:bg-cleartax-darkblue"
            >
              Calculate
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="h-[300px] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={180}
                  endAngle={0}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={36}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Wealth Gained</span>
              <span className="font-semibold">{formatCurrency(result.returns)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Invested Amount</span>
              <span className="font-semibold">{formatCurrency(result.totalInvestment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Wealth</span>
              <span className="font-semibold">{formatCurrency(result.futureValue)}</span>
            </div>
          </div>
        </Card>
      </div>

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
  );
};

export default SIPCalculator;
