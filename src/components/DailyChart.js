import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './DailyChart.css';

export default function StackedBar() {
  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#EDEDED',
          font: {
            size: 18
          }
        }
      }
    },
    responsive: true,
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
  const [data, loadData] = useState({
    labels: [],
    datasets: [
      {
        data: [5, 50, 125, 250, 500],
        label: 'Seoul Cases',
        backgroundColor: '#444444',
      },
      {
        data: [10, 100, 250, 500, 1500],
        label: 'National Cases',
        backgroundColor: '#DA0037',
      },
    ],
  });
  useEffect(() => {
    axios.get('https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/api').then(data => {
      let past_week_data = data.data;
      let extracted_data = {};
      let seoul_cases = [];
      let national_cases = [];
      // date_times are iso 8601, past_seven_days are past 7 days from today
      // multi_date is the combination of these two
      let date_times = [];

      //Fun fact: if new Date().getDay() is a sunday it's actually 0 
      let days_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let past_seven_days = [];
      let multi_date = [];
      //get data into a more useable format, have epoch time be key and an object with data inside it
      past_week_data.forEach((element, i) => {
        date_times.push(past_week_data[i].date)
        //use the ISO 8601 date as a key in the new object
        extracted_data[past_week_data[i].date] = {
          koreaDaily: past_week_data[i].koreaDaily,
          seoulDaily: past_week_data[i].seoulDaily,
        }
      });
      console.log(extracted_data)

      date_times = date_times.sort((a, b) => {
        //sort the dates in ascending order
        return new Date(a) - new Date(b)
      });
      date_times.forEach(day => {
        let temp = new Date(day).getDay();
        past_seven_days.push(days_of_week[temp])
        let multi_temp = `${day} (${days_of_week[temp]})`;
        multi_date.push(multi_temp)
      })
      console.log(date_times)
      date_times.forEach(day => {
        //with newly sorted dates, push the weekly update data to two arrays
        //these will be sorted by default because the array of date_times
        //is sorted
        console.log(seoul_cases)
        seoul_cases.push(extracted_data[day].seoulDaily)
        national_cases.push(extracted_data[day].koreaDaily)
      })

      let new_data = {
        labels: past_seven_days,
        datasets: [
          {
            label: 'Seoul Cases',
            data: [],
          },
          {
            label: 'National Cases',
            data: [],
          },
        ]
      }
      new_data.datasets[0].data = seoul_cases;
      new_data.datasets[1].data = national_cases;
      loadData(new_data)
    })
  }, [])



  return (
    <div className="ChartJSContainer">
      <div>
        <h1 className='title'>Weekly Chart Statistics</h1>
      </div>
      <Bar data={data} options={options} />
    </div>
  )
}