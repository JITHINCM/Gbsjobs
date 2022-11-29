import React, { useEffect, useState } from 'react';
import './jobapply.css'
// import GBSJOBS from '../img/GBSJOBS.png'
import ClientNav from "../Client-Nav/ClientNav";
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import moment from 'moment';


function Jobapply() {
    const [state, setState] = useState([]);
    // console.log(localStorage);
    const userid = localStorage.getItem('user_id');
    console.log(userid)
    // const history = useHistory();

    const appliedJobs = (props) => {
        // console.log(props);
        localStorage.setItem('applied_job_id',props);

        window.location.replace("http://localhost:3000/?#/applied");
    };


    const FetchData = () => {
        const url = 'https://localhost:5001/GBSJobs/v2/getappliedjobsbyUser?';

        axios.get(url,
            {
                params: {
                    userid: userid
                }
            }).then((response) => {
                console.log(response.data.Data);

                setState(response.data.Data)
            })

    };

    useEffect(() => {
        FetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            <ClientNav />

            <div className='jobtext'>
                Applied jobs
            </div>
<div className='topgap'></div>
            {state.map((obj) => {

                let convertedDate = moment(obj.AppliedDate)
                const date = convertedDate.format("L");
                
                return (
                    <div>
                        <div className='JobList_container'>
                            <div className='job-container'>
                                <div className='job-text'>
                                    {/* Branch Operations Manager */}
                                    {obj.JobName}
                                </div>
                                <div className='jobinlinetxt'>
                                    {/* Branch Banking */}
                                    {obj.CategoryName}
                                </div>
                                <div className='jobinlinetxtin'>
                                    Applied Date : {date}<br />

                                </div>
                            </div>
                            <div className='ButtonStatus'>
                                <button className='appbtn' id='appliedJobs' onClick={() => appliedJobs(obj.Job_Id)}> {obj.Status}</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Jobapply
