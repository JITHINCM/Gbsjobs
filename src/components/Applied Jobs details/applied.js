import React, { useEffect, useState } from 'react';
import './applied.css'
import ClientNav from "../Client-Nav/ClientNav";
import axios from 'axios';
import moment from 'moment';
import { AiOutlineCaretLeft } from "react-icons/ai";

function Applied() {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);

  const Jobid = parseInt(localStorage.getItem('applied_job_id'));
  console.log(Jobid);
  const userid = parseInt(localStorage.getItem('user_id'));
  const iconBtn = () => {
    window.location.replace("http://localhost:3000/?#/jobapply");
  };

  const FetchData = () => {
    const url1 = 'https://localhost:5001/GBSJobs/v2/getappliedjobsbyUser?';

    axios.get(url1,
      {
        params: {
          userid:userid
        }
      }).then((response) => {
        console.log(response.data.Data);

        setState(response.data.Data)
      })

    const url2 = 'https://localhost:5001/GBSJobs/v1/Jobapplication';
    axios.get(url2).then((response) => {

      setState2(response.data.Data) 

    })

  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ClientNav />
      <div className='BacktoJobApply-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft /></div>
      {state.filter(obj => obj.Job_Id === Jobid).map((obj) => {
        let convertedDate = moment(obj.AppliedDate)
        const date = convertedDate.format("L");
        // moment(emp.createdAt).format("YYYY-MMM-DD")
        return (

          <div className='applied-container'>
            <div>

              <div className='Applyedtxt'>{obj.JobName}</div>
              <div className='Applyedtxt1'>{obj.CategoryName}</div>
              <div className='Applyedtxt2'>Applied Date : {date} <br /></div>
            </div>
            <div>
              <div className='appliedjob'> {obj.Status}</div>
            </div>

          </div>
        )
      })}

      {state2.filter(obj => obj.Job_Id === Jobid && obj.User_Id === userid).map((obj) => {

        return (
          <div>
            <div className='responsetxt'>Response:</div>
            {/* <div className='reply_response'>{obj.Response}</div> */}
          </div>
        )
      })}
    </div>
  )
}

export default Applied
