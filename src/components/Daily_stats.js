import React from 'react'
import './Daily_stats.css'
import gif1 from '../assets/pulse.gif'
import gif2 from '../assets/search.gif'

function Dailystats({deaths,cases,datetime}) {
    return (
        <div>
            <h3>Daily Statistics</h3>
            <div className="widget1"> 
                Deaths
                <div className="number1">{deaths}</div>
                <img src={gif1} height={50} width={100} alt=""/>
            </div>
            <div className="widget2">
                New Cases
                <div className="number2">{cases}</div>
                <img src={gif2} height={60} width={80} alt=""/>
            </div>
            <div className="widget3">
                Last Update Time - {datetime}
            </div>  
        </div>
    )
}

export default Dailystats
