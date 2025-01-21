export const metrics = {
  callTime: {
    value: "2:45",
    industry: "3:30",
    trend: [
      { value: 3.5 },
      { value: 3.2 },
      { value: 2.9 },
      { value: 2.75 },
      { value: 2.45 }
    ]
  },
  abandonmentRate: {
    value: "4.2%",
    industry: "5.8%",
    trend: [
      { value: 5.8 },
      { value: 5.2 },
      { value: 4.8 },
      { value: 4.5 },
      { value: 4.2 }
    ]
  },
  satisfactionScore: {
    value: "4.8/5",
    industry: "4.2/5",
    trend: [
      { value: 4.2 },
      { value: 4.4 },
      { value: 4.5 },
      { value: 4.7 },
      { value: 4.8 }
    ]
  },
  responseTime: {
    value: "45s",
    industry: "90s",
    trend: [
      { value: 85 },
      { value: 75 },
      { value: 60 },
      { value: 50 },
      { value: 45 }
    ]
  }
};

export const comparisonData = [
  { name: 'Your Company', callTime: 2.75, abandonmentRate: 4.2, satisfactionScore: 4.8, responseTime: 45 },
  { name: 'Industry Avg', callTime: 3.5, abandonmentRate: 5.8, satisfactionScore: 4.2, responseTime: 90 },
  { name: 'Top 25%', callTime: 2.5, abandonmentRate: 3.5, satisfactionScore: 4.6, responseTime: 60 },
  { name: 'Bottom 25%', callTime: 4.5, abandonmentRate: 8.2, satisfactionScore: 3.8, responseTime: 120 }
];
