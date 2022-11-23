import React, { useEffect, useState } from 'react'
import './job.css'
import Nav from '../Admin-Nav/nav'
import axios from 'axios';

function Job() {

  const [state, setState] = useState([]);

  const addBtn = () => {
    window.location.replace("http://localhost:3000/#/adminaddjob");
  };

  const EditBtn = () => {
    window.location.replace("http://localhost:3000/#/admineditjob");
  };

  const ViewjobBtn = () => {
    window.location.replace("http://localhost:3000/?#/adminviewjob");
  };

  const fetchData = () => {
    const url = 'https://localhost:5001/GBSJobs/v1/Job';
    axios.get(url).then((response) => {
      console.log(response.data);
      console.log(response.data.Data);

      setState(response.data.Data)

    })
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div>
      <Nav />
      <div className='job-side-container'>
        <div className='catogeries'>Categories</div>
        <div className='catogeries-line'></div>

        <div className='Branch-banking'>Branch banking</div>
        <div className='catogeries-line1'></div>

        <div className='Digital-marketing'>Digital marketing</div>
        <div className='catogeries-line2'></div>

        <div className='IT'>I T</div>
        <div className='catogeries-line3'></div>

        <div className='Micro-banking'>Micro banking</div>
        <div className='catogeries-line4'></div>
      </div>

      {state.filter(obj=> obj.Category_Id===1).map((obj) => {
         return (

      <div>
        <div className='ListContainer'>
        <div className='Small-container'>
          <div className='BOM'>{obj.JobName}</div>

          <div className='branchbank'>Branch Banking</div>
          <div className='requir'>Required Experience : {obj.Experience} years <br /></div>
          <div className='open'>{obj.Openings} Openings</div>

          <div>
            <button className='viewbtn' id='ViewjobBtn' onClick={ViewjobBtn}>View</button>
          </div>

          <div >
            <button className='editbtn' id='EditBtn' onClick={EditBtn}>Edit</button>
          </div>
        </div>
        </div>

       
      </div>
      )
     })}
      <div className='AddBtnDiv'>
        <button className='addbtn' id='addBtn' onClick={addBtn}>Add +</button>
      </div>
      
    </div>
  );
}

export default Job