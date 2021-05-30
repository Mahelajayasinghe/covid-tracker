import React from 'react'
import gif1 from '../assets/pulse.gif'
import gif2 from '../assets/search.gif'

function Totalstats({Deaths,HospIndividual,Cases,Recovered}) {
    return (
        <div>
            <h3>Total Statistics</h3>
            <div className="widget1">
                Total Deaths
                <div className="number1">{Deaths}</div>
                <img src={gif1} height={50} width={100} alt=""/> 
            </div>
            <div className="widget2">
                Total Cases
                <div className="number2">{Cases}</div>
                <img src={gif2} height={60} width={80} alt=""/> 
            </div>    
            <div >Total No of Individuals in the Hospital - {HospIndividual}</div>
             
            <div >Totally Recovered - {Recovered}</div> 
        </div>
    )
}

export default Totalstats
