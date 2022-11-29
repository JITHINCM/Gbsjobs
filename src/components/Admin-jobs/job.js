import React, { useEffect, useState } from 'react'
import './job.css'
import Nav from '../Admin-Nav/nav'
import axios from 'axios';

function Job() {

  const [state, setState] = useState([]);

  const [state2, setState2] = useState([]);
  // const [state3, setState3] = useState([]);


  const [jobcat, setCat] = useState('All');


  const addBtn = () => {
    window.location.replace("http://localhost:3000/#/adminaddjob");
  };

  const EditBtn = (param) => {
    localStorage.setItem('Admin_Edit_JobId', param)
    window.location.replace("http://localhost:3000/#/admineditjob");
  };

  const ViewjobBtn = (param) => {
    localStorage.setItem('AdminView_JobId', param);
    window.location.replace("http://localhost:3000/?#/adminviewjob");
  };

  const CataddBtn = () => {
    window.location.replace("http://localhost:3000/#/admin_addcategory");
  };

  const handleJobCat = (value) => {
    setCat(value);
  }

  const fetchData = () => {
    const url = 'https://localhost:5001/GBSJobs/v1/Job';
    axios.get(url).then((response) => {
      console.log(response.data.Data);
      setState(response.data.Data)

      const url2 = 'https://localhost:5001/GBSJobs/v1/Category';
      axios.get(url2).then((resp) => {
        setState2(resp.data.Data)
        // setState3(resp.data.Data)
        // localStorage.setItem('{Category_names}',resp.data.Data)
      })

    })
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <Nav />
      <div>
        <select className='Dropdown-Category' onChange={(e) => handleJobCat(e.target.value)}>
          <option defaultvalue='All' value='All' >All Category</option>
          {state2.map((obj) => {

            return (
              <option value={obj.Category_Id} >{obj.Category_Id}. {obj.CategoryName}</option>
            )

          })}
          {/* <option value='Digital Marketing' >Digital Marketing</option>
          <option value='IT'>IT</option>
          <option value='Micro Banking'>Micro Banking</option> */}
        </select>
      </div>
      <div>
        <button className='Add-Category' id='CataddBtn' onClick={CataddBtn}>Add New Category +</button>
      </div>
      <div>
        <button className='addbtn2' id='addBtn' onClick={addBtn}>Add New Job +</button>
      </div>
      {/* <div className='AddBtnDiv'>
        <button className='addbtn' id='addBtn' onClick={addBtn}>Add +</button>
      </div> */}

      {jobcat === 'All' ?

        state.map((obj) => {
          // .filter(obj => obj.Category_Id === parseInt(jobcat))
          //  const Cat_name= localStorage.getItem('Category_name')
          return (

            <div>
              <div className='ListContainer'>
                <div className='Small-container'>
                  <div className='BOM'>{obj.JobName}</div>

                  {/* {state3.filter(obj => obj.Category_Id ).map((obj) => {
         return ( */}
                  <div className='branchbank'>Job Category Id: {obj.Category_Id}</div>
                  {/* )
     })} */}

                  <div className='requir'>Required Experience : {obj.Experience} years <br /></div>
                  <div className='open'>{obj.Openings} Openings</div>

                  <div>
                    <button className='viewbtn' id='ViewjobBtn' onClick={() => ViewjobBtn(obj.Job_Id)}>View</button>
                  </div>

                  <div >
                    <button className='editbtn' id='EditBtn' onClick={()=>EditBtn(obj.Job_Id)}>Edit</button>
                  </div>
                </div>
              </div>


            </div>
          )
        }) 
        :  state.filter(obj => obj.Category_Id === parseInt(jobcat)).map((obj) => {
          // .filter(obj => obj.Category_Id === parseInt(jobcat))
          return (
  
            <div>
              <div className='ListContainer'>
                <div className='Small-container'>
                  <div className='BOM'>{obj.JobName}</div>
  
                  <div className='branchbank'>Job Category Id: {obj.Category_Id}</div>
                  <div className='requir'>Required Experience : {obj.Experience} years <br /></div>
                  <div className='open'>{obj.Openings} Openings</div>
  
                  <div>
                    <button className='viewbtn' id='ViewjobBtn'  onClick={() => ViewjobBtn(obj.Job_Id)}>View</button>
                  </div>
  
                  <div >
                    <button className='editbtn' id='EditBtn'  onClick={()=>EditBtn(obj.Job_Id)}>Edit</button>
                  </div>
                </div>
              </div>
  
  
            </div>
          )
        })
        
      }

     
      {/* <div className='AddBtnDiv'>
        <button className='addbtn1' id='addBtn' onClick={addBtn}>Add +</button>
      </div> */}

    </div>
  );
}

export default Job