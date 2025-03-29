"use client";
import { fakePosts } from "@/constants/Post";
import { FoodCategory } from "@/interfaces/Post";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Helper function to calculate stats
const calculateStats = () => {
  const sales = fakePosts.filter(post => post.category === FoodCategory.Sale);
  const totalEarnings = sales.length * 25; // Mock average price of $25 per sale
  const monthlyData = [
    { month: 'Jan', sales: 4, earnings: 100 },
    { month: 'Feb', sales: 6, earnings: 150 },
    { month: 'Mar', sales: 8, earnings: 200 },
    // Mock data for demonstration
  ];

  return {
    totalSales: sales.length,
    totalEarnings,
    monthlyData,
    averagePerSale: totalEarnings / (sales.length || 1),
  };
};

// Add this helper function for consistent date formatting
const formatDate = (date: Date | undefined) => {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
};

export default function ProvidersHomePage() {
  const stats = calculateStats();

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Provider Dashboard</h1>
        <select className="border p-2 rounded">
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Sales</h3>
          <p className="text-3xl font-bold">{stats.totalSales}</p>
          <span className="text-green-500 text-sm">↑ 12% from last month</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Earnings</h3>
          <p className="text-3xl font-bold">${stats.totalEarnings}</p>
          <span className="text-green-500 text-sm">↑ 8% from last month</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Average per Sale</h3>
          <p className="text-3xl font-bold">${stats.averagePerSale.toFixed(2)}</p>
          <span className="text-gray-500 text-sm">Past 30 days</span>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="sales" fill="#4F46E5" name="Sales" />
              <Bar yAxisId="right" dataKey="earnings" fill="#10B981" name="Earnings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Sales Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3">Item</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {fakePosts
              .filter(post => post.category === FoodCategory.Sale)
              .slice(0, 5)
              .map(post => (
                <tr key={post.id} className="border-b">
                  <td className="py-3">{post.title}</td>
                  <td>{formatDate(post.createdAt)}</td>
                  <td>$25.00</td>
                  <td>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}