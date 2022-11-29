import React, { useEffect, useState } from 'react';
import ClientNav from "../Client-Nav/ClientNav";
import search from '../img/searchicon.png';
import './jobList.css'
import axios from 'axios';
import { AiOutlineCaretLeft } from "react-icons/ai";
// import { useHistory } from 'react-router-dom';



function JobList() {

  const [state, setState] = useState([]);

 const cat_id= parseInt(localStorage.getItem('Home_Category_Id')) 
//  console.log(cat_id)

  const btnDtls = (p1,p2) => {
    // console.log(jobid)
    localStorage.setItem('Job_Id', p1);
    localStorage.setItem('Job_Name',p2);

    window.location.replace("http://localhost:3000/?#/details");

  };

  const iconBtn = () => {
    window.location.replace("http://localhost:3000/?#/homepage");
  };
  const fetchData = () => {
    const url = 'https://localhost:5001/GBSJobs/v1/Job';
    axios.get(url).then((response) => {

      localStorage.setItem('Category_Id', response.data.Data[0].Category_Id);
      setState(response.data.Data)

    })
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>

      <ClientNav />

      <div className='BacktoHome-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft/></div>

      <div >
        <input className="searchs" type="text" placeholder="search here" />
        <div>
          <img className='searchicons' src={search} alt='' />
        </div>

      </div>
      <div className='gap'></div>

      {state.filter(obj => obj.Category_Id === cat_id).map((obj) => {

        // localStorage.setItem('Job_Id', obj.Job_Id);
        // localStorage.setItem('Job_Name', obj.JobName);

        return (

          <div className='Listdiv'>
            <div className='branch-container'>
              <div className='content-text'>
                {obj.JobName}
              </div>

              {/* <div className='caregory-name'>Branch Banking</div> */}
              <div className='Exp'>Required Experience : {obj.Experience} years <br /></div>
              <div className='opening' >
                {obj.Openings} Openings
              </div>

              <div className='btndetails'>
                <button className='dtlsbtn' id='btnDtls' onClick={() => btnDtls(obj.Job_Id, obj.JobName)}>Details </button>
              </div>
              {/* {props:obj.Job_Id} 
              onClick={btnDtls} */}
            </div>


          </div>
        )

      })}
    </div>
  );

}

export default JobList
