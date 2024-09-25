import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Січень', value: 1200 },
  { month: 'Лютий', value: 2100 },
  { month: 'Березень', value: 3200 },
  { month: 'Квітень', value: 4500 },
  { month: 'Травень', value: 3800 },
  { month: 'Червень', value: 5400 },
];

const SmoothCurveChart = () => {
  return (
    <div style={{ textAlign: 'center', marginLeft: '90px' }}>
      {' '}
      {/* Margin added here */}
      <h2>Загальна статистика</h2>
      <ResponsiveContainer width="80%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 6000]} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: 'none' }}
            labelStyle={{ fontWeight: 'bold' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4379F2"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SmoothCurveChart;
