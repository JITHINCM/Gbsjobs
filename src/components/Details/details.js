import React , { useEffect,useState } from 'react'; //
import './details.css'
// import GBSJOBS from '../img/GBSJOBS.png';
import Share from '../img/share.png'
import ClientNav from "../Client-Nav/ClientNav";
import axios from 'axios';



function Details(props) {

  const Jobid = props.location.state || {};

  const [state, setState] = useState([]);

  console.log(Jobid);

  const btnApply = () => {
    window.location.replace("http://localhost:3000/?#/apply");

  };

  const FetchData = () => {
  const url = 'https://localhost:5001/newcontroller/getjobdetails/filter?';

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

  return (
    <div>
      <ClientNav />

{state.map((obj) => {
  return(
    <div>
    <div className='box'>
        <div className='txt'>{obj.JobName}</div>
        <div className='txt1'>Branch Banking </div>
        <div className='txt2'>Required Experience : {obj.Experience}years <br />ESAF Small Finance Bank</div>
        <div className='txt3'>{obj.Openings} Openings </div>

      </div>
      <div>
        <button className='applybtn' id='btnApply' onClick={btnApply}>Apply </button>
      </div>
      <div>
        <button className='share'><img src={Share} alt='' /></button>
      </div>
      <div className='skils'>
        Skills:
      </div>
      <div className='sktxt'>
        {obj.Skills}
      </div>
      <div className='desc'>
        Description:
      </div>
      <div className='desctxt'>
       {obj.Description}

      </div>

      <div className='jobtype'>
        Job Type: <span className='type'> {obj.JobType}</span>
      </div>
      <div className='salary'>
        Salary package: <span className='salary-span'> {obj.SalaryPackage}</span>
      </div>
      <div className='LastDate'>
        Last Date to apply: <span className='Date-span'> {obj.LastDateForApplying}</span>
      </div>

      <div className='contact-num'>
        Contact Number: <span className='contact-span'> {obj.ContactNumber}</span>
      </div>
    </div>
  )
})}

     
    </div>
  )
}

export default Details
