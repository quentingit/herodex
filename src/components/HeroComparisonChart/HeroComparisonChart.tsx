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

type HeroComparisonChartProps = {
  hero1: { name: string; stats: number[] };
  hero2: { name: string; stats: number[] };
};

const HeroComparisonChart: React.FC<HeroComparisonChartProps> = ({
  hero1,
  hero2,
}) => {
  const data = {
    labels: ['Strength', 'Speed', 'Intelligence'],
    datasets: [
      {
        label: hero1.name,
        data: hero1.stats,
        backgroundColor: '#FF6384',
      },
      {
        label: hero2.name,
        data: hero2.stats,
        backgroundColor: '#36A2EB',
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
        text: 'Superhero Comparison',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HeroComparisonChart;
