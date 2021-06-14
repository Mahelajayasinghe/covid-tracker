import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './GetGlobalData.css'
import icon from  '../assets/icon.png'
import gmap from  '../assets/gmap.png'
import GlobalDailyStat from './GlobalDailyStat'
import GlobalTotalStat from './GlobalTotalStat'
import TotalDeathsChart from './TotalDeathsChart'

function GetGlobalData() {
    const [globalstate, setglobal] = useState({})
    const [CountryDeaths, setCountryDeaths] = useState([])
    const globalurl = "https://api.covid19api.com/summary"

    useEffect(() => {
        axios.get(globalurl)
        .then((respon)=>{
            console.log(respon)
            setglobal(respon.data.Global)
            setCountryDeaths(respon.data.Countries)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [globalurl])

    return (
        <div className="Ggrid-container">
            <div className="Gcontainer-1">
                <img src={icon} height={80} width={80} alt=""/>
                <div className="title">Global Covid-19 Dashboard</div>
                <img src={gmap} height={100} width={150} alt=""/>
            </div>

            <div className="Gcontainer-2">
                <GlobalDailyStat 
                    newConf={globalstate.NewConfirmed}
                    newDeaths = {globalstate.NewDeaths}
                    NewRec = {globalstate.NewRecovered}
                />
            </div>

            <div className="Gcontainer-3">
                <TotalDeathsChart chartdata={CountryDeaths}/>
            </div>

            <div className="Gcontainer-4">
                <GlobalTotalStat
                    totalconf ={globalstate.TotalConfirmed}
                    totaldeaths ={globalstate.TotalDeaths}
                    totalrec ={globalstate.TotalRecovered}
                />
            </div>

            
            
        </div>
    )
}

export default GetGlobalData
