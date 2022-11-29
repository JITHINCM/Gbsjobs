import React, { useState, useEffect } from 'react'
import AdminNav from '../Admin-Nav/nav'
import './applicantprofile.css'
import { AiOutlineCaretLeft } from "react-icons/ai";
import ProfileImg from '../img/profile.png'
import axios from 'axios';
import moment from 'moment';



function Applicantprofile() {
    const iconBtn = () => {
        window.location.replace("http://localhost:3000/#/adminapplication");
    };

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);


    const StatusChange1 = (param) => {
        localStorage.setItem('Changed_Status', param)
        // console.log(param)
        setActive(!active);   
    };
    const StatusChange2 = (param) => {
        localStorage.setItem('Changed_Status', param)
        // console.log(param)
        setActive1(!active1);   
    };

    const Application_id = parseInt(localStorage.getItem('View-Appli-Id'))
    const Job_id = parseInt(localStorage.getItem('View-Job-Id'))
    const Changed_Status = localStorage.getItem('Changed_Status')
    // console.log(Changed_Status)


    const [state, setState] = useState([]);
    const [state2, setState2] = useState([]);
    const [resp, setResponse] = useState('');

    // const [status_state,setStatus ] = useState('');


    const ResponseChange = (value) => {
        setResponse(value);
    }

    // console.log(Application_id)

    const fetchData = () => {
        const url = 'https://localhost:5001/GBSJobs/v1/Jobapplication';
        axios.get(url).then((response) => {
            setState(response.data.Data)

        })

        const url2 = 'https://localhost:5001/GBSJobs/v2/getjobdetails?';

        axios.post(url2, null,
            {
                params: {
                    JobId: Job_id
                }
            }).then((response) => {
                console.log(response.data);
                setState2(response.data.Data)
            })

    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const OnSave = () => {

        // localStorage.setItem('User_Id')
        // localStorage.getItem('Category_Id')
        // localStorage.getItem('FullName')
        // localStorage.getItem('Gender')
        // localStorage.getItem('Email')
        // localStorage.getItem('JobName')
        // localStorage.getItem('Skills')
        // localStorage.getItem('HighestQualification')
        // localStorage.getItem('Mobile')
        // localStorage.getItem('AppliedDate')
        // localStorage.getItem('Job_Id')
        // localStorage.getItem('Experience')
        // localStorage.getItem('DateOfBirth')


        const data = {
            Application_Id: Application_id,
            User_Id: parseInt(localStorage.getItem('User_Id')),
            Category_Id: parseInt(localStorage.getItem('Category_Id')),
            FullName: localStorage.getItem('FullName'),
            Gender: localStorage.getItem('Gender'),
            Email: localStorage.getItem('Email'),
            JobName: localStorage.getItem('JobName'),
            Skills: localStorage.getItem('Skills'),
            Experience: parseInt(localStorage.getItem('Experience')),
            HighestQualification: localStorage.getItem('HighestQualification'),
            Mobile: localStorage.getItem('Mobile'),
            DateOfBirth: localStorage.getItem('DateOfBirth'),
            AppliedDate: localStorage.getItem('AppliedDate'),
            Response: resp,
            Status: Changed_Status,
            Job_Id: parseInt(localStorage.getItem('Job_Id')),


        };

        console.log(data)

        const url3 = ' https://localhost:5001/GBSJobs/v2/GetStatusResponse';
        //https://localhost:5001/GBSJobs/v1/update job Applications
        //  https://localhost:5001/GBSJobs/v2/GetStatusResponse

        axios.put(url3, data).then((result) => {
            if (result.data.Success === true) {
                alert("Response Submitted")
                window.location.replace("http://localhost:3000/#/adminapplication");

            }
        })
    };

    return (
        <div className='main-applicant' >
            <AdminNav />
            <div className='BacktoAdminApplication-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft /></div>


            <div className='User-Details'>User Details</div>
            <div className='Job-Details'> Job Details</div>

            {state.filter(obj => obj.Application_Id === Application_id).map((obj) => {

            let convertedDate = moment(obj.AppliedDate)
                const applieddate = convertedDate.format("L");

                localStorage.setItem('User_Id', obj.User_Id)
                localStorage.setItem('Category_Id', obj.Category_Id)
                localStorage.setItem('FullName', obj.FullName)
                localStorage.setItem('Gender', obj.Gender)
                localStorage.setItem('Email', obj.Email)
                localStorage.setItem('JobName', obj.JobName)
                localStorage.setItem('Skills', obj.Skills)
                localStorage.setItem('Experience', obj.Experience)
                localStorage.setItem('HighestQualification', obj.HighestQualification)
                localStorage.setItem('Mobile', obj.Mobile)
                localStorage.setItem('AppliedDate', obj.AppliedDate)
                localStorage.setItem('Job_Id', obj.Job_Id)
                localStorage.setItem('DateOfBirth', obj.DateOfBirth)




                return (
                    <div>
                        <div className='userdetails-container'>
                            <img className='Applicant_Profile_Img' src={ProfileImg} alt='' />
                            <div className='Applicant-Name'> Name : </div>
                            <div className='Applicant-Name-Value'>{obj.FullName}</div>
                            <div className='Contact-number'>Contact number :</div>
                            <div className='Contact-number-value'>{obj.Mobile}</div>
                            <div className='Email'>Email :</div>
                            <div className='Email-value'>{obj.Email}</div>
                            <div className='Gender'>Gender :</div>
                            <div className='Gender-value'>{obj.Gender}</div>
                            <div className='DOB'>DOB :</div>
                            <div className='DOB-value'>{obj.DateOfBirth}</div>
                            <div className='Skill'>Skill :</div>
                            <div className='Skill-value'>{obj.Skills}</div>
                            <div className='Experience'>Experience :</div>
                            <div className='Experience-value'>{obj.Experience} year</div>
                            <div className='Qualification'>Qualification :</div>
                            <div className='Qualification-value'>{obj.HighestQualification}</div>
                            <div className='Applied-Date'>Applied Date :</div>
                            <div className='Applie-Date-value'>{applieddate}</div>
                        </div>
                    </div>

                )
            })}

            {state2.map((obj) => {
 let convertedDate = moment(obj.LastDateForApplying)
 const last = convertedDate.format("L");
                return (
                    <div className='JobDetails-container'>
                        <div className='Applicant-JobName'>Job Name : </div>
                        <div className='Applicant-JobName-Value'>{obj.JobName}</div>
                        <div className='Applicant-Category'>Category :</div>
                        <div className='Applicant-Category-value'>{obj.Category_Id}</div>
                        <div className='Needed-Skills'>Needed Skills :</div>
                        <div className='Needed-Skills-value'>{obj.Skills}</div>
                        <div className='Needed-Experience'>Needed Experience :</div>
                        <div className='Needed-Experience-value'>{obj.Experience} year</div>
                        <div className='Last_Date'>Last Date :</div>
                        <div className='Last-Date_value'>{last}</div>
                    </div>
                )
            })}


            <button className='applicant-Shortlist' id='shortlist' value='shortlisted' onClick={() => StatusChange1('Shortlisted')} style={{ backgroundColor: active ? "green" : "#BCE9C8" }}>Shortlist</button>
                <button className='applicant-Reject' id='reject' value='rejected' onClick={() => StatusChange2('Rejected')} style={{ backgroundColor: active1 ? "red" : "#FD9D98" }}> Reject</button>
            
            <div>
                <input className='applicant-Type-Response' type='text' placeholder='Type Response' onChange={(e) => ResponseChange(e.target.value)}></input>
            </div>

            <button className='applicant-Send' onClick={() => OnSave()}>Submit</button>
        </div>
    )
}

export default Applicantprofile