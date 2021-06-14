import React from 'react'
import './GlobalDailyStat.css'
import gif1 from '../assets/pulse.gif'
import gif2 from '../assets/search.gif'
import gif3 from '../assets/check.gif'

function GlobalDailyStat({newConf,newDeaths,NewRec}) {
    return (
        <div>
            <h3 className="GstatTitle">Daily Global Statistics</h3>

            <div className="Gwidget1"> 
                Deaths
                <div className="Gnumber1">
                    <img src={gif1} height={50} width={100} alt=""/>
                    {newDeaths}
                </div>   
            </div>

            <div className="Gwidget2">
                New Cases
                <div className="Gnumber2">
                    <img src={gif2} height={60} width={80} alt=""/>
                    {newConf}
                </div>   
            </div>

            <div className="Gwidget3">
                New Recovered
                <div className="Gnumber3">
                    <img src={gif3} height={60} width={80} alt=""/>
                    {NewRec}
                </div>   
            </div>
        </div>
    )
}

export default GlobalDailyStat
