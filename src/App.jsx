import React, { useState } from 'react';
import MetricCard from './components/MetricCard';
import ComparisonChart from './components/ComparisonChart';
import MetricsForm from './components/MetricsForm';
import { metrics as initialMetrics, comparisonData as initialComparisonData } from './data/mockData';

export default function App() {
  const [selectedMetric, setSelectedMetric] = useState('callTime');
  const [metrics, setMetrics] = useState(initialMetrics);
  const [comparisonData, setComparisonData] = useState(initialComparisonData);
  
  const metricLabels = {
    callTime: 'Average Call Time',
    abandonmentRate: 'Abandonment Rate',
    satisfactionScore: 'Satisfaction Score',
    responseTime: 'Response Time'
  };

  const handleMetricsUpdate = (newMetrics) => {
    // Update metrics
    setMetrics({
      callTime: {
        value: `${newMetrics.callTime}`,
        industry: initialMetrics.callTime.industry,
        trend: [...initialMetrics.callTime.trend.slice(1), { value: newMetrics.callTime }]
      },
      abandonmentRate: {
        value: `${newMetrics.abandonmentRate}%`,
        industry: initialMetrics.abandonmentRate.industry,
        trend: [...initialMetrics.abandonmentRate.trend.slice(1), { value: newMetrics.abandonmentRate }]
      },
      satisfactionScore: {
        value: `${newMetrics.satisfactionScore}/5`,
        industry: initialMetrics.satisfactionScore.industry,
        trend: [...initialMetrics.satisfactionScore.trend.slice(1), { value: newMetrics.satisfactionScore }]
      },
      responseTime: {
        value: `${newMetrics.responseTime}s`,
        industry: initialMetrics.responseTime.industry,
        trend: [...initialMetrics.responseTime.trend.slice(1), { value: newMetrics.responseTime }]
      }
    });

    // Update comparison data
    const updatedComparisonData = [...comparisonData];
    updatedComparisonData[0] = {
      name: 'Your Company',
      callTime: newMetrics.callTime,
      abandonmentRate: newMetrics.abandonmentRate,
      satisfactionScore: newMetrics.satisfactionScore,
      responseTime: newMetrics.responseTime
    };
    setComparisonData(updatedComparisonData);
  };

  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Support Metrics Benchmark</h1>
        <p className="text-gray-600 mt-2">Compare your performance against industry standards</p>
      </header>

      <MetricsForm 
        onSubmit={handleMetricsUpdate} 
        currentMetrics={{
          callTime: parseFloat(comparisonData[0].callTime),
          abandonmentRate: parseFloat(comparisonData[0].abandonmentRate),
          satisfactionScore: parseFloat(comparisonData[0].satisfactionScore),
          responseTime: parseFloat(comparisonData[0].responseTime)
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Average Call Time"
          value={metrics.callTime.value}
          industry={metrics.callTime.industry}
          trend={metrics.callTime.trend}
          color="#6f3fd9"
          metric="callTime"
        />
        <MetricCard 
          title="Abandonment Rate"
          value={metrics.abandonmentRate.value}
          industry={metrics.abandonmentRate.industry}
          trend={metrics.abandonmentRate.trend}
          color="#ff6b6b"
          metric="abandonmentRate"
        />
        <MetricCard 
          title="Satisfaction Score"
          value={metrics.satisfactionScore.value}
          industry={metrics.satisfactionScore.industry}
          trend={metrics.satisfactionScore.trend}
          color="#51cf66"
          metric="satisfactionScore"
        />
        <MetricCard 
          title="Response Time"
          value={metrics.responseTime.value}
          industry={metrics.responseTime.industry}
          trend={metrics.responseTime.trend}
          color="#339af0"
          metric="responseTime"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-wrap gap-4 mb-6">
          {Object.entries(metricLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedMetric === key 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <ComparisonChart data={comparisonData} metric={selectedMetric} />
      </div>
    </div>
  );
}
