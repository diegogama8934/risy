"use client";
import { fakePosts } from "@/constants/Post";
import { FoodCategory } from "@/interfaces/Post";
import { 
  Area, 
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  ComposedChart,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Calendar, DollarSign, ShoppingCart, TrendingUp, Plus, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input, Select, Modal, Form, message, UploadFile } from 'antd';
import { useState } from 'react';
import { createPost } from '@/service/post/create';
import Image from 'next/image';

// Helper function to calculate stats
const calculateStats = () => {
  const sales = fakePosts.filter(post => post.category === FoodCategory.Sale);
  const totalEarnings = sales.length * 25; // Mock average price of $25 per sale
  const monthlyData = [
    { month: 'Jan', sales: 24, earnings: 600, target: 500 },
    { month: 'Feb', sales: 32, earnings: 800, target: 600 },
    { month: 'Mar', sales: 45, earnings: 1125, target: 800 },
    { month: 'Apr', sales: 38, earnings: 950, target: 900 },
    { month: 'May', sales: 52, earnings: 1300, target: 1000 },
    { month: 'Jun', sales: 48, earnings: 1200, target: 1100 },
  ];

  const categoryData = [
    { name: 'Food', value: 45 },
    { name: 'Beverages', value: 25 },
    { name: 'Snacks', value: 20 },
    { name: 'Others', value: 10 },
  ];

  return {
    totalSales: sales.length,
    totalEarnings,
    monthlyData,
    categoryData,
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

interface PostFormValues {
  title: string;
  description: string;
  category: FoodCategory;
  image: File;
}

export default function ProvidersHomePage() {
  const stats = calculateStats();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePublish = async (values: PostFormValues) => {
    try {
      // Here you would typically upload the image to your storage service
      // and get back a URL. For now, we'll use a placeholder
      const imageUrl = "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg";
      
      const post = {
        title: values.title,
        description: values.description,
        category: values.category,
        images: [imageUrl],
        userId: "user123", // This should come from your auth context
        comments: [],
        userInterested: false,
        goToProvider: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await createPost(post);
      message.success('Post published successfully!');
      setIsModalOpen(false);
      form.resetFields();
      setFileList([]);
    } catch (error: unknown) {
      console.error('Failed to publish post:', error);
      message.error('Failed to publish post');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Provider Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">Welcome back! Here&apos;s your overview</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Post</span>
            </Button>
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              <select className="bg-transparent border-none focus:ring-0 text-gray-700 text-sm sm:text-base">
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="flex items-center gap-1 bg-green-50 px-2 sm:px-3 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="text-green-600 text-xs sm:text-sm font-medium">12%</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium">Total Sales</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">{stats.totalSales}</p>
                <span className="text-xs sm:text-sm text-gray-500">orders</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"></span>
                <span>vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-green-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div className="flex items-center gap-1 bg-green-50 px-2 sm:px-3 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="text-green-600 text-xs sm:text-sm font-medium">8%</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium">Total Earnings</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">${stats.totalEarnings}</p>
                <span className="text-xs sm:text-sm text-gray-500">revenue</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></span>
                <span>vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-purple-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div className="flex items-center gap-1 bg-purple-50 px-2 sm:px-3 py-1 rounded-full">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                <span className="text-purple-600 text-xs sm:text-sm font-medium">30 days</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium">Average per Sale</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">${stats.averagePerSale.toFixed(2)}</p>
                <span className="text-xs sm:text-sm text-gray-500">per order</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500"></span>
                <span>Past 30 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Main Chart */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Sales Overview</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Monthly performance and targets</p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  Sales
                </button>
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  Earnings
                </button>
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  Targets
                </button>
              </div>
            </div>
            <div className="h-[300px] sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={stats.monthlyData}>
                  <defs>
                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EC4899" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6B7280"
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                  />
                  <YAxis 
                    yAxisId="left" 
                    stroke="#6B7280"
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    stroke="#6B7280"
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    formatter={(value: number) => [`$${value}`, '']}
                    labelStyle={{ color: '#374151', fontWeight: 500 }}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36}
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => (
                      <span className="text-sm text-gray-600">{value}</span>
                    )}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="sales"
                    name="Sales"
                    stroke="#8B5CF6"
                    fill="url(#salesGradient)"
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="earnings"
                    name="Earnings"
                    stroke="#EC4899"
                    fill="url(#earningsGradient)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="target"
                    name="Target"
                    stroke="#14B8A6"
                    strokeWidth={2}
                    dot={{ fill: '#14B8A6', strokeWidth: 2, r: 4 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Sales by Category</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Distribution of sales across categories</p>
              </div>
            </div>
            <div className="h-[300px] sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {stats.categoryData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={[
                          '#8B5CF6', // Purple
                          '#EC4899', // Pink
                          '#14B8A6', // Teal
                          '#F59E0B'  // Amber
                        ][index]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    formatter={(value: number) => [`${value}%`, '']}
                    labelStyle={{ color: '#374151', fontWeight: 500 }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    iconSize={6}
                    formatter={(value) => (
                      <span className="text-xs sm:text-sm text-gray-600">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Sales Section */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recent Sales</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Latest transactions and orders</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-50 rounded-lg flex-1 sm:flex-none">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                <span className="text-xs sm:text-sm text-gray-600">Last 7 days</span>
              </div>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2">
                View All
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {fakePosts
              .filter(post => post.category === FoodCategory.Sale)
              .slice(0, 5)
              .map(post => (
                <div 
                  key={post.id} 
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group gap-3 sm:gap-0"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-1.5 sm:p-2 bg-white rounded-lg group-hover:scale-105 transition-transform">
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-gray-800">{post.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{formatDate(post.createdAt)}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-xs text-gray-500">Order #1234</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm font-medium text-gray-800">$25.00</p>
                      <p className="text-xs text-gray-500">Payment completed</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Publish Post Modal */}
        <Modal
          title={
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plus className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-semibold">Publish New Post</span>
            </div>
          }
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          width={600}
          className="rounded-xl"
          styles={{
            body: {
              padding: '24px'
            }
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handlePublish}
            className="space-y-6"
          >
            <Form.Item
              name="title"
              label={
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Title</span>
                  <span className="text-red-500">*</span>
                </div>
              }
              rules={[{ required: true, message: 'Please enter a title' }]}
            >
              <Input 
                placeholder="Enter post title" 
                className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="category"
              label={
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Category</span>
                  <span className="text-red-500">*</span>
                </div>
              }
              rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select 
                placeholder="Select category"
                className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                size="large"
              >
                <Select.Option value={FoodCategory.Sale}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Sale</span>
                  </div>
                </Select.Option>
                <Select.Option value={FoodCategory.Donation}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Donation</span>
                  </div>
                </Select.Option>
                <Select.Option value={FoodCategory.Compost}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Compost</span>
                  </div>
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="description"
              label={
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Description</span>
                  <span className="text-red-500">*</span>
                </div>
              }
              rules={[{ required: true, message: 'Please enter a description' }]}
            >
              <Input.TextArea 
                rows={4} 
                placeholder="Enter post description"
                className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="image"
              label={
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Photo</span>
                  <span className="text-red-500">*</span>
                </div>
              }
              rules={[{ required: true, message: 'Please take a photo' }]}
            >
              <div className="flex flex-col items-center gap-4">
                {fileList.length > 0 && fileList[0].url ? (
                  <div className="relative group w-full">
                    <Image 
                      src={fileList[0].url} 
                      alt="Captured photo" 
                      width={600}
                      height={192}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <button
                        onClick={() => setFileList([])}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'file';
                      input.accept = 'image/*';
                      input.capture = 'environment';
                      
                      input.onchange = (e) => {
                        const file = (e.target as HTMLInputElement).files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (e) => {
                            setFileList([{
                              uid: '-1',
                              name: file.name,
                              status: 'done',
                              url: e.target?.result as string,
                              originFileObj: file as unknown as UploadFile['originFileObj']
                            }]);
                          };
                          reader.readAsDataURL(file);
                        }
                      };
                      
                      input.click();
                    }}
                    className="flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-200 rounded-lg hover:border-primary transition-colors w-full bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Camera className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-gray-600">Take a Photo</div>
                    <div className="text-xs text-gray-400 text-center">Click to open camera</div>
                  </button>
                )}
              </div>
            </Form.Item>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="px-6 h-10 rounded-lg border-gray-200 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="px-6 h-10 rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Publish Post
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
}