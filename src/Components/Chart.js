import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from './api/index'
import styles from './Chart.module.css';


export default function Chart() {
    const [dailyData, setDailyData] = useState([{}]);

    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
  
        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);
   
    const lineChart = (
      dailyData[0] ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
              data: dailyData.map((data) => data.confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            },  {
              data: dailyData.map((data) => data.recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true,
            },
            ],
          }}
        />
      ) : null
    );
    return (
      <div className={styles.container}>
        {lineChart}
      </div>
    );
   
};