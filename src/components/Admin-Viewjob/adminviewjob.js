import React , { useEffect,useState } from 'react'; 
import './adminviewjob.css'
import Nav from '../Admin-Nav/nav'
import { AiOutlineCaretLeft } from "react-icons/ai";
import axios from 'axios';

function Adminviewjob() {
    
    const Jobid=localStorage.getItem('AdminView_JobId');
    const [state, setState] = useState([]);

    const FetchData = () => {
        const url = 'https://localhost:5001/GBSJobs/v2/getjobdetails?';
      
        axios.post(url, null,
          {
            params: {
              JobId: Jobid
            }
          }).then((response) => {
            console.log(response.data);
            // console.log(response.data.Data[0].JobName);
            setState(response.data.Data)
          })
         
        };
      
        useEffect(() => {
          FetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

  const iconBtn = () => {
    window.location.replace("http://localhost:3000/?#/adminjob");
  };


    return (
        <div>
            <Nav />

            {state.map((obj) => {
  return(
    <div>
            <div className='viewjob-box'>
                <div className='txt'>{obj.JobName}</div>
                <div className='txt1'>Category Id: {obj.Category_Id} </div>
                <div className='txt2'>Required Experience : {obj.Experience} years <br />ESAF Small Finance Bank</div>
            </div>

            <div className='viewjob-skils'>
                SKILLS :
            </div>
            <div className='skilltxt'>
            {obj.Skills}
            </div>
            <div className='viewjob-disc'>
                Description :
            </div>
            <div className='viewdiscription-txt'>
            {obj.Description}
            </div>
            <div className='viewjob-type'>Type:</div>
            <div className='viewjob-full'>{obj.JobType}</div>
            <div className='viewjob-sal'>Salary package: </div>
            <div className='viewjob-45'>{obj.SalaryPackage}</div>
            <div className='viewjob-last'>Last Date to apply:</div>
            <div className='viewjob-date'>{obj.LastDateForApplying}</div>
            <div className='viewjob-contact'>Contact No :</div>
            <div className='viewjob-no'>{obj.ContactNumber}</div>
            <div className='viewjob-icon' id='iconBtn'  onClick={iconBtn}><AiOutlineCaretLeft/></div>
            </div>
            )
        })}
            </div>

    )
}

export default Adminviewjob