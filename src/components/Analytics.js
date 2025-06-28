import React, { useRef, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
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

// Register Chart.js components for both Line and Doughnut charts
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

const Analytics = () => {
  const chartRef = useRef(null); // Ref to get the canvas context for gradient

  // Function to create a gradient for the line chart
  const createGradient = (chart) => {
    const { ctx, chartArea } = chart;
    if (!ctx || !chartArea) {
      return null;
    }

    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(219, 234, 254, 0.0)'); // blue-100 very transparent at bottom
    gradient.addColorStop(1, 'rgba(219, 234, 254, 0.8)'); // blue-100 less transparent at top
    return gradient;
  };

  // --- Data & Options for Line Chart (Growth) ---
  // The backgroundColor will be set dynamically in useEffect
  const growthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Organic Growth',
        data: [150, 165, 180, 195, 210, 230, 255, 270, 290, 310, 330, 350], // Data showing growth
        fill: true, // This enables the area under the curve
        backgroundColor: (context) => {
          const chart = context.chart;
          return createGradient(chart);
        },
        borderColor: 'rgb(59, 130, 246)', // A blue color for the line (Tailwind blue-500)
        tension: 0.4, // Smooth curve
        pointRadius: 0, // No node points
        pointHoverRadius: 5,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: 'rgb(59, 130, 246)',
      },
    ],
  };

  const growthOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to fill its container
    plugins: {
      legend: {
        display: false, // Hide legend as it's a single line
      },
      title: {
        display: true,
        text: 'Organic Traffic Growth',
        align: 'start',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
            bottom: 10
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // No vertical grid lines
        },
        ticks: {
            font: {
                size: 10
            }
        }
      },
      y: {
        min: 100, // Adjust min/max based on data range
        max: 400,
        ticks: {
          stepSize: 50,
          font: {
              size: 10
          }
        },
        grid: {
          color: 'rgba(0,0,0,0.05)', // Light horizontal grid lines
        },
      },
    },
  };

  // --- Data & Options for Doughnut Chart (Traffic Sources) ---
  const trafficSourceData = {
    labels: ['Organic Search', 'Direct', 'Referral', 'Social Media', 'Paid Ads'],
    datasets: [
      {
        data: [45, 20, 15, 10, 10], // Percentages or values, ensure they sum up to 100 if representing percentages
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)', // Tailwind blue-500 with transparency
          'rgba(34, 197, 94, 0.8)',  // Tailwind green-500 with transparency
          'rgba(249, 115, 22, 0.8)', // Tailwind orange-500 with transparency
          'rgba(168, 85, 247, 0.8)', // Tailwind purple-500 with transparency
          'rgba(239, 68, 68, 0.8)',  // Tailwind red-500 with transparency
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
    maintainAspectRatio: false, // Allows chart to fill its container
    plugins: {
      legend: {
        position: 'right', // Place legend on the right for better landscape fit
        labels: {
            font: {
                size: 12, // Adjust font size for readability
            },
            boxWidth: 15, // Adjust color box size
            padding: 10, // Padding between legend items
        }
      },
      title: {
        display: true,
        text: 'Traffic Sources',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
            bottom: 10
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%'; // Assuming data is percentage
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-t from-blue-50 to-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Right Section (now left): Text Content - Order adjusted for responsiveness */}
        <div className="flex-1 w-full lg:w-1/2 lg:pr-16 mt-12 lg:mt-0 order-2 lg:order-1">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-black   mb-6">
            Increase Your Website Traffic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Organically</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Unlock the full potential of your online presence. Our advanced analytics tools help you understand your audience, track key performance indicators, and implement data-driven strategies to boost your organic search rankings and attract more visitors to your site without relying on paid ads.
          </p>
          <p className="text-md text-gray-600 max-w-lg">
            Dive deep into user behavior, identify trending keywords, and optimize your content for maximum visibility. Start growing your audience naturally and sustainably today.
          </p>
        </div>

        {/* Left Section (now right): MacBook Window Card with Analytics - Order adjusted for responsiveness */}
        <div className="hover:scale-105 duration-500 flex-1 w-full lg:w-1/2 order-1 lg:order-2">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            {/* Window Header */}
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

            {/* Analytics Content - Two Charts Side-by-Side */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ minHeight: '400px' }}> {/* Adjusted minHeight for landscape with two charts */}
              {/* Organic Traffic Growth (Line Chart) */}
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex flex-col">
                <div className="flex-grow"> {/* Flex-grow to make chart fill space */}
                  <Line ref={chartRef} data={growthData} options={growthOptions} />
                </div>
              </div>

              {/* Website Traffic Sources (Doughnut Chart) */}
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex flex-col">
                <div className="flex-grow"> {/* Flex-grow to make chart fill space */}
                  <Doughnut data={trafficSourceData} options={trafficSourceOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;