import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Analytics = () => {
    const [state, setState] = useState({
        options: {
            colors:["#E91E63", "FF9800"],
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      }
      )
  return (
    <div className='chart'>
        <h1 className='flex justify-center text-lg font-bold'>Analytics</h1>
        <div className='flex gap-2'>
            <div className='col-4'>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
            </div>
            <div className='col-4'>
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
            </div>
            <div className='col-4'>
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />
            </div>
            <div className='col-4'>
            <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="500"
            />
            </div>
        </div>
    </div>
  )
}

export default Analytics;
