import React from 'react'
import gif1 from '../assets/pulse.gif'
import gif2 from '../assets/search.gif'

function Totalstats({Deaths,Cases,datetime}) {
    return (
        <div>
            <h3 className="statTitle">Total Statistics</h3>
            <div className="widget1">
                Total Deaths
                <div className="number1">
                    <img src={gif1} height={40} width={80} alt=""/> 
                    {Deaths}
                </div>
                
            </div>
            <div className="widget2">
                Total Cases
                <div className="number2">
                    <img src={gif2} height={60} width={80} alt=""/> 
                    {Cases}
                </div>    
            </div>    
            <div className="widget3">
                Last Update Time - {datetime}
            </div>
        </div>
    )
}

export default Totalstats
