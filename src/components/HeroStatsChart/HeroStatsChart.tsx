import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HeroStatsChart = () => {
  const data = {
    labels: ['Strength', 'Speed', 'Intelligence'],
    datasets: [
      {
        label: 'Stats',
        data: [80, 90, 70],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Superhero Stats',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HeroStatsChart;
