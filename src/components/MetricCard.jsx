import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const getComparisonData = (value, industry, metric) => {
  // Remove any non-numeric characters and convert to number
  const cleanValue = parseFloat(value.replace(/[^\d.-]/g, ''));
  const cleanIndustry = parseFloat(industry.replace(/[^\d.-]/g, ''));
  
  // For metrics where lower is better
  const isLowerBetter = ['callTime', 'abandonmentRate', 'responseTime'].includes(metric);
  
  const percentage = Math.abs(((cleanValue - cleanIndustry) / cleanIndustry) * 100).toFixed(1);
  const isBetter = isLowerBetter ? cleanValue < cleanIndustry : cleanValue > cleanIndustry;
  
  return {
    isBetter,
    percentage,
    comparison: isBetter ? 'better' : 'worse'
  };
};

export default function MetricCard({ title, value, industry, trend, color, metric }) {
  const { isBetter, percentage, comparison } = getComparisonData(value, industry, metric);
  
  return (
    <div className="metric-card relative">
      <div className={`absolute top-0 right-0 mt-2 mr-2 px-2 py-1 rounded-full text-sm flex items-center gap-1
        ${isBetter ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {isBetter ? <FiArrowUp /> : <FiArrowDown />}
        {percentage}%
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">Industry avg: {industry}</p>
            <span className={`text-sm font-medium ${
              isBetter ? 'text-green-600' : 'text-red-600'
            }`}>
              ({comparison} than average)
            </span>
          </div>
        </div>
        <div className="h-16 w-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trend}>
              <defs>
                <linearGradient id={`color${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isBetter ? '#10B981' : '#EF4444'} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={isBetter ? '#10B981' : '#EF4444'} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value"
                stroke={isBetter ? '#10B981' : '#EF4444'}
                fillOpacity={1}
                fill={`url(#color${title})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
