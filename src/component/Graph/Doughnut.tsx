import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph: React.FC = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100,23,11,1,132,233],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 25, 86)',
          'rgb(255, 232, 86)',
          'rgb(25, 205, 86)',
          'rgb(115, 205, 86)',
          'rgb(255, 205, 255)',
          'rgb(255, 205, 42)',
        ],
        hoverOffset: 100,
      },
    ],
    
  };
 

  return (
    <div style={{height:'200px'}}>
      <Doughnut data={data}/>
    </div>
  );
};

export default Graph;
