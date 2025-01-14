import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type HeroStatsChartProps = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};

const HeroStatsChart: React.FC<HeroStatsChartProps> = ({
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat,
}) => {
  const data = {
    labels: [
      'Intelligence',
      'Strength',
      'Speed',
      'Durability',
      'Power',
      'Combat',
    ],
    datasets: [
      {
        label: 'Hero Stats',
        data: [
          Number(intelligence),
          Number(strength),
          Number(speed),
          Number(durability),
          Number(power),
          Number(combat),
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default HeroStatsChart;
