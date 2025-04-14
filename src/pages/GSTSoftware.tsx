
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, BarChart } from "lucide-react";

const GSTSoftware = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">GST Software</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <FileText className="text-cleartax-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold">File GSTR-1</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">File your monthly GSTR-1 returns easily</p>
            <Button variant="outline" className="w-full">Start Filing</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
              <Upload className="text-cleartax-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Upload Invoices</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Bulk upload your invoices in any format</p>
            <Button variant="outline" className="w-full">Upload Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
              <BarChart className="text-cleartax-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold">GST Analytics</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Get insights on your GST returns and filings</p>
            <Button variant="outline" className="w-full">View Reports</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GSTSoftware;
