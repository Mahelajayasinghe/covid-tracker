import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';

function TotalDeathsChart({chartdata}) {
    const [countrychart, setcountrychart] = useState({})
    

    const decimation = {
        enabled: true,
        algorithm: 'LTTB',
      };

    useEffect(() => {
        let top8deaths = []
        let country = []
        let deathsCount = []
        chartdata.sort(function(a,b){return a.TotalDeaths-b.TotalDeaths})
        top8deaths=chartdata.slice(-8)
        top8deaths.reverse()

        for(const x of top8deaths){
            country.push(x.Country)
            deathsCount.push(x.TotalDeaths)
        }

        setcountrychart({
            labels: country,
            datasets: [
              {
                label: "Total Deaths",
                
                data: deathsCount,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(201, 203, 207, 0.7)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ],
                borderWidth: 1,
                fill:false
              }
            ]
          })
    }, [chartdata])

      
    return (
        <div>
        <h3 className="GstatTitle">Total Deaths by Country</h3>

        <div className="chart-container" style={{position:"relative",height:"60vh/",width:"40vw"}}>
             {/* {deathsCount.map(x=><h6>{x}</h6>)}  */}

             <Bar
                data={countrychart}
                options={{
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    title: { text: "Total Deaths", display: true },
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

        </div>
    )
}

export default TotalDeathsChart
