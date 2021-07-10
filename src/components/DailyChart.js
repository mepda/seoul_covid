import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';


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
    axios.get('https://ig78fyk8y3.execute-api.us-east-1.amazonaws.com/dev/week').then(data => {
      let past_week_data = JSON.parse(data.data.body)
      let extracted_data = {};
      let seoul_cases = [];
      let national_cases = [];
      // date_times are iso 8601, past_seven_days are past 7 days from today
      // multi_date is the combination of these two
      let date_times = [];
      let days_of_week = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
      let past_seven_days = [];
      let multi_date = [];
      //get data into a more useable format, have epoch time be key and an object with data inside it
      past_week_data.forEach((element, i) => {
        date_times.push(past_week_data[i].date.S)
        //use the ISO 8601 date as a key in the new object
        extracted_data[past_week_data[i].date.S] = {
          koreaDaily: past_week_data[i].koreaDaily.S,
          seoulDaily: past_week_data[i].seoulDaily.S,
        }
      });
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
      date_times.forEach(day => {
        //with newly sorted dates, push the weekly update data to two arrays
        //these will be sorted by default because the array of date_times
        //is sorted
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
    <>
      <div>
        <h1 className='title'>Weekly Chart Statistics</h1>
      </div>
      <Bar data={data} options={options} />
    </>
  )
}