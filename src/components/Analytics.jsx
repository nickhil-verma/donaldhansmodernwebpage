import React, { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Line = React.lazy(() => import('react-chartjs-2').then(mod => ({ default: mod.Line })));
const Doughnut = React.lazy(() => import('react-chartjs-2').then(mod => ({ default: mod.Doughnut })));

const Analytics = () => {
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 300, 0, 0);
    grad.addColorStop(0, 'rgba(219, 234, 254, 0.0)');
    grad.addColorStop(1, 'rgba(219, 234, 254, 0.8)');
    setGradient(grad);
  }, []);

  const growthData = useMemo(() => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Organic Growth',
        data: [150, 165, 180, 195, 210, 230, 255, 270, 290, 310, 330, 350],
        fill: true,
        backgroundColor: gradient,
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }), [gradient]);

  const growthOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Organic Traffic Growth',
        align: 'start',
        font: { size: 16, weight: 'bold' },
        padding: { bottom: 10 },
      },
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      y: {
        min: 100, max: 400,
        ticks: { stepSize: 50, font: { size: 10 } },
        grid: { color: 'rgba(0,0,0,0.05)' },
      },
    },
  };

  const trafficSourceData = {
    labels: ['Organic Search', 'Direct', 'Referral', 'Social Media', 'Paid Ads'],
    datasets: [
      {
        data: [45, 20, 15, 10, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const trafficSourceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: { size: 12 },
          boxWidth: 15,
          padding: 10,
        },
      },
      title: {
        display: true,
        text: 'Traffic Sources',
        font: { size: 16, weight: 'bold' },
        padding: { bottom: 10 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label || ''}: ${ctx.parsed}%`,
        },
      },
    },
  };

  return (
    <section id="seo" className="py-20 px-6 bg-gradient-to-t from-blue-50 to-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        <div className="flex-1 w-full lg:w-1/2 lg:pr-16 mt-12 lg:mt-0 order-2 lg:order-1">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-black mb-6">
            Increase Your Website Traffic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Organically</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
           Unlock the full potential of your online presence. Our advanced analytics tools help you understand your audience, track key performance indicators, and implement data-driven strategies to boost your organic search rankings and attract more visitors to your site without relying on paid ads.
          </p>
          <p className="text-md text-gray-600 max-w-lg">
           Dive deep into user behavior, identify trending keywords, and optimize your content for maximum visibility. Start growing your audience naturally and sustainably today.
          </p>
        </div>

        <div className="hover:scale-105 duration-500 flex-1 w-full lg:w-1/2 order-1 lg:order-2">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <div className="flex items-center p-3 border-b border-gray-200 bg-gray-50">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <div className="flex-grow text-center">
                <h3 className="text-sm font-medium text-gray-700">Client's Analytics Dashboard</h3>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ minHeight: '400px' }}>
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex flex-col">
                <Suspense fallback={<p>Loading Line Chart...</p>}>
                  <Line data={growthData} options={growthOptions} />
                </Suspense>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex flex-col">
                <Suspense fallback={<p>Loading Doughnut Chart...</p>}>
                  <Doughnut data={trafficSourceData} options={trafficSourceOptions} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
