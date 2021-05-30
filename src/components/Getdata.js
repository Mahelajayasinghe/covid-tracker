import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './Getdata.css'
import icon from  '../assets/icon.png'
import Dailystats from './Daily_stats'
import Totalstats from './Total_stats' 

function Getdata() {
    const [state, setstate] = useState({})
    const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical'

    useEffect(() => {
        axios.get(url)
        .then((response)=>{
            console.log(response)
            setstate(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[url])

    return (
        <div className="grid-container">
            <div className="container-1">
                <img src={icon} height={100} width={100} alt=""/>
                <div className="title">Covid-19 Dashboard of Sri Lanka</div>
                <img src={icon} height={100} width={100} alt=""/>
            </div>
            
            <div className="container-2">
                <Dailystats 
                    deaths={state.local_new_deaths} 
                    cases={state.local_new_cases} 
                    datetime={state.update_date_time}
                />
            </div>

            <div className="container-3">
                <div >Active Cases - {state.local_active_cases}</div>
            </div>

            <div className="container-4">
                <Totalstats
                    Deaths = {state.local_deaths}
                    HospIndividual ={state.local_total_number_of_individuals_in_hospitals}
                    Cases = {state.local_total_cases}
                    Recovered = {state.local_recovered}
                />
                
            </div>
            
            <div className="container-5">
                <div >Total No of PCR Tests - {state.total_pcr_testing_count}</div> 
            </div>
            
            
        </div>
    )
}

export default Getdata
