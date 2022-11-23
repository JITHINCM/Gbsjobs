import React, { useEffect, useState } from 'react';
import ClientNav from "../Client-Nav/ClientNav";
import search from '../img/searchicon.png';
import "./jobList.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function JobList() {

  const [state, setState] = useState([]);

  const history = useHistory();
  
  const btnDtls = (jobid) => {
    // console.log(jobid)

    history.push({
      pathname: '/details',
      state: jobid
    });

    // window.location.replace("http://localhost:3000/?#/details");

      };
    
  
  const fetchData = () => {
    const url = 'https://localhost:5001/GBSJobs/v1/Job';
    axios.get(url).then((response) => {

      setState(response.data.Data)

    })
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>

      <ClientNav />


      <div >
        <input className="searchs" type="text" placeholder="search here" />
        <div>
          <img className='searchicons' src={search} alt='' />
        </div>

      </div>
      <div className='gap'></div>

      {state.filter(obj=> obj.Category_Id===1).map((obj) => {
        
        
        return (

          <div className ='Listdiv'>
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
                <button className='dtlsbtn' id='btnDtls' onClick={() => btnDtls(obj.Job_Id)}>Details </button>
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
