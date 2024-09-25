import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Запаси', Кількість: 4000 },
  { name: 'Поставки', Кількість: 3000 },
  { name: 'Транспорт', Кількість: 2000 },
  { name: 'Склади', Кількість: 2800 },
  { name: 'Витрати', Кількість: 1900 },
];

const SimpleBarChart = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Огляд логістичних показників</h2> {/* Заголовок */}
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 10,
          left: 90,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Кількість" fill="#d87444" />
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
