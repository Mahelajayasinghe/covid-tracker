import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';

function Pcrchart({name}) {

    const [chartData, setChartData] = useState({});

    const decimation = {
        enabled: true,
        algorithm: 'LTTB',
      };
    
    useEffect(() => {

        let Date =[]
        let Count =[]
        let Last30Date =[]
        let Last30Count =[]
        for (const dataObj of name) {
            Date.push(dataObj.date);
            Count.push(parseInt(dataObj.count));
        }

        Last30Date=Date.slice(-31)
        Last30Count=Count.slice(-31)
        setChartData({
            labels: Last30Date,
            datasets: [
              {
                label: "Daily PCR Count",
                data: Last30Count,
                backgroundColor: ["rgba(255, 153, 0, 0.6)"],
                borderWidth: 1,
                fill:true
              }
            ]
          })

    }, [name])
    

    return (
        <div className="chart-container" style={{position:"relative",height:"40vh",width:"90vw"}}>
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            title: { text: "Daily PCR Count", display: true },
            plugins: {
                decimation: decimation,
            },
            scales: {
              
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,

                  },
                  showXLabels: 10
                }
              ]
            }
          }}
        />
        </div>
    )
}

export default Pcrchart
