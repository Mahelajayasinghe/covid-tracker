import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './Getdata.css'
import icon from  '../assets/icon.png'
import srilanka from  '../assets/srilanka.png'
//import redcross from  '../assets/redcross.gif'
//import check from  '../assets/check.gif'
//import caution from  '../assets/caution.gif'
import Dailystats from './Daily_stats'
import Totalstats from './Total_stats' 
import Pcrchart from './Pcrchart'

function Getdata() {
    const [state, setstate] = useState({})
    const [pcr, setpcr] = useState([])
    const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical'

    useEffect(() => {
        axios.get(url)
        .then((response)=>{
            console.log(response)
            setstate(response.data.data)
            setpcr(response.data.data.daily_pcr_testing_data)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[url])

    return (
        <div className="grid-container">

            <div className="container-1">
                <img src={icon} height={80} width={80} alt=""/>
                <div className="title">Covid-19 Dashboard of Sri Lanka</div>
                <img src={srilanka} height={100} width={70} alt=""/>
            </div>
            

            <div className="container-2">
                <Dailystats 
                    deaths={state.local_new_deaths} 
                    cases={state.local_new_cases} 
                    datetime={state.update_date_time}
                />
            </div>

            <div className="container-3">
                <h3 className="statTitle">Active cases</h3>
                <div className="subtitleNo1">
                    
                    {state.local_active_cases}
                </div>
            </div>

            <div className="container-4">
                <Totalstats
                    Deaths = {state.local_deaths}
                    Cases = {state.local_total_cases}
                    datetime={state.update_date_time}
                />
                
            </div>
            
            <div className="container-5">
                <h3 className="statTitle">Total No of Individuals in the Hospital</h3>
                <div className="subtitleNo2">
                
                {state.local_total_number_of_individuals_in_hospitals}    
                </div>
                
            </div>

            <div className="container-6">
                    <h3 className="statTitle">Totally Recovered</h3> 
                    <div className="subtitleNo3">
                        
                        {state.local_recovered}
                    </div> 
            </div>
            
            <div className="container-7">
                <h3 className="statTitle">Total No of PCR Tests</h3>
                <div className="subtitleNo4">{state.total_pcr_testing_count}</div>
                <Pcrchart name={pcr}/>
            </div>             
            
        </div>
    )
}

export default Getdata
