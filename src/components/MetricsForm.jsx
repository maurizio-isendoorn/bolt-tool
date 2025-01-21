import React from 'react';

export default function MetricsForm({ onSubmit, currentMetrics }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      callTime: parseFloat(formData.get('callTime')),
      abandonmentRate: parseFloat(formData.get('abandonmentRate')),
      satisfactionScore: parseFloat(formData.get('satisfactionScore')),
      responseTime: parseFloat(formData.get('responseTime'))
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Your Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Call Time (minutes)
          </label>
          <input
            type="number"
            name="callTime"
            step="0.1"
            defaultValue={currentMetrics.callTime}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Abandonment Rate (%)
          </label>
          <input
            type="number"
            name="abandonmentRate"
            step="0.1"
            defaultValue={currentMetrics.abandonmentRate}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Satisfaction Score (1-5)
          </label>
          <input
            type="number"
            name="satisfactionScore"
            step="0.1"
            min="1"
            max="5"
            defaultValue={currentMetrics.satisfactionScore}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Response Time (seconds)
          </label>
          <input
            type="number"
            name="responseTime"
            defaultValue={currentMetrics.responseTime}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-6">
        Update Metrics
      </button>
    </form>
  );
}
