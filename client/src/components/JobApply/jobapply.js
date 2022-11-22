import React from 'react'
import './jobapply.css'
// import GBSJOBS from '../img/GBSJOBS.png'
import ClientNav from "../Client-Nav/ClientNav";

function jobapply() {
   
    const appliedJobs = () => {
        window.location.replace("http://localhost:3000/?#/applied");
    };
    return (
        <div>
<ClientNav/>
            
            <div className='jobtext'>
                Applied jobs
            </div>
            <div>
                <div className='job-container'>
                    <div className='job-text'>
                        Branch Operations Manager
                    </div>
                    <div className='jobinlinetxt'>
                        Branch Banking
                    </div>
                    <div className='jobinlinetxtin'>
                        Required Experience : 0 years<br />
                        ESAF Small Finance Bank
                    </div>
                </div>
                <div>
                    <button className='aapbtn' id='appliedJobs' onClick={appliedJobs}> Applied</button>
                </div>
            </div>

            <div>
                <div className='job1-container'>
                    <div className='job-text1'>
                        Sales Officer / Sales Officer Trainee
                    </div>
                    <div className='jobinlinetxt'>
                        Branch Banking
                    </div>
                    <div className='jobinlinetxtin'>
                        Required Experience : 0 years<br />
                        ESAF Small Finance Bank
                    </div>

                </div>
                <div>
                    <button className='aapbtn1' > Shortlisted</button>
                </div>
            </div>

            <div className='job2-container'>
                <div className='job-text1'>
                    Branch Operations Officer / Teller
                </div>
                <div className='jobinlinetxt'>
                    Branch Banking
                </div>
                <div className='jobinlinetxtin'>
                    Required Experience : 0 years<br />
                    ESAF Small Finance Bank
                </div>
            </div>

            <div>
                <button className='aapbtn2' > Rejected</button>
            </div>
        </div>
    )
}

export default jobapply
