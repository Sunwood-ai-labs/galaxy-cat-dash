import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CatIcon, CoffeeIcon, UsersIcon, DollarSignIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', cats: 4, coffee: 100, customers: 800, revenue: 3500 },
  { name: 'Feb', cats: 6, coffee: 120, customers: 900, revenue: 4000 },
  { name: 'Mar', cats: 8, coffee: 150, customers: 1100, revenue: 4800 },
  { name: 'Apr', cats: 10, coffee: 180, customers: 1300, revenue: 5500 },
  { name: 'May', cats: 12, coffee: 220, customers: 1600, revenue: 6500 },
  { name: 'Jun', cats: 15, coffee: 280, customers: 2000, revenue: 8000 },
];

const CafeGraph = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="cats" stroke="#8884d8" />
      <Line yAxisId="left" type="monotone" dataKey="coffee" stroke="#82ca9d" />
      <Line yAxisId="left" type="monotone" dataKey="customers" stroke="#ffc658" />
      <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#ff7300" />
    </LineChart>
  </ResponsiveContainer>
);

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/galaxy-cat-cafe-background.jpg')] bg-cover bg-center bg-fixed">
      <div className="w-full max-w-6xl p-8 bg-black bg-opacity-60">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Galaxy Cat Cafe Dashboard V2</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Cats Adopted", icon: CatIcon, value: "42" },
            { title: "Coffee Served", icon: CoffeeIcon, value: "1,337" },
            { title: "Happy Customers", icon: UsersIcon, value: "9,001" },
            { title: "Revenue", icon: DollarSignIcon, value: "$42,000" },
          ].map((item, index) => (
            <Card 
              key={index} 
              className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-20 rounded-xl overflow-hidden transition-all duration-300 ${hoveredCard === index ? 'scale-105 shadow-lg' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white opacity-60">{item.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
                </div>
                <item.icon className={`h-8 w-8 text-white transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-60'}`} />
              </div>
            </Card>
          ))}
        </div>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-20 rounded-xl p-4">
          <h2 className="text-2xl font-bold text-white mb-4">Monthly Performance</h2>
          <CafeGraph />
        </div>
      </div>
    </div>
  );
};

export default Index;
