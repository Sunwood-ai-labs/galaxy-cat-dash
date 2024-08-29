import { Card } from "@/components/ui/card";
import { CatIcon, CoffeeIcon, UsersIcon, DollarSignIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 bg-fixed bg-cover">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Galaxy Cat Cafe Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Cats Adopted", icon: CatIcon, value: "42" },
            { title: "Coffee Served", icon: CoffeeIcon, value: "1,337" },
            { title: "Happy Customers", icon: UsersIcon, value: "9,001" },
            { title: "Revenue", icon: DollarSignIcon, value: "$42,000" },
          ].map((item, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-20 rounded-xl overflow-hidden">
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white opacity-60">{item.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
                </div>
                <item.icon className="h-8 w-8 text-white opacity-60" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
