import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  plugins: {  // 'legend' now within object 'plugins {}'
    legend: {
      labels: {
        color: '#EDEDED',  // not 'fontColor:' anymore
        // fontSize: 18  // not 'fontSize:' anymore
        font: {
          size: 18 // 'size' now within object 'font {}'
        }
      }
    }
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const StackedBar = () => (
  <>
    <div>
      <h1 className='title'>Daily Chart Statistics</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default StackedBar;