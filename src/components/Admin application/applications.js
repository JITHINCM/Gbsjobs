import React, { useEffect, useState } from 'react';
import './applications.css'
import AdminNav from '../Admin-Nav/nav'
import axios from 'axios';

function Applications() {

  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);

  const [jobcat, setCat] = useState('All');
  const [status, setStatus] = useState('AllStatus');


  const handleJobCat = (value) => {
    setCat(value);
  }
  const handleStatus = (value) => {
    setStatus(value);
  }

  const fetchData = () => {
    const url = 'https://localhost:5001/GBSJobs/v1/Jobapplication';
    axios.get(url).then((response) => {

      localStorage.setItem('Category_Id', response.data.Data[0].Category_Id);
      setState(response.data.Data)

    })

    const url2 = 'https://localhost:5001/GBSJobs/v1/Category';
    axios.get(url2).then((resp) => {
      setState2(resp.data.Data)
      // setState3(resp.data.Data)
      // localStorage.setItem('{Category_names}',resp.data.Data)
    })

  };

  useEffect(() => {
    fetchData();
  }, []);

  const Viewdetailsbtn = (p1, p2) => {
    // console.log(p1,p2)
    localStorage.setItem('View-Appli-Id', p1)
    localStorage.setItem('View-Job-Id', p2)

    window.location.replace("http://localhost:3000/#/admin_applicantProfile");
  };

  // https://localhost:5001/GBSJobs/v1/Jobapplication

  return (
    <div>
      <AdminNav />
      <div>
        <select className='Dropdown-Category-2' onChange={(e) => handleJobCat(e.target.value)} >
          <option value='All' >All category</option>
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
        <select className='Dropdown-Status' onChange={(e) => handleStatus(e.target.value)}>
          <option value='AllStatus' >All Status</option>
          {/* <option value='ALlStatus'>All</option> */}
          <option value='Applied' >Applied</option>
          <option value='Shortlisted' >Shortlisted</option>
          <option value='Rejected'>Rejected</option>
        </select>
      </div>

      <div>
        <button className='Generate-Btn'>Generate Report</button>
      </div>

      <div className='Table-Apply'>
        <table className='table' >
          <thead >
            <tr className='tr' >
              <th>User Name</th>
              <th>Job</th>
              <th>Category</th>
              <th>Details</th>
              <th>status</th>
            </tr>
          </thead>

          {jobcat === 'All' ?

            state.map((obj) => {
              return (
                <tbody>
                  <tr className='tblrow'>
                    <td>{obj.FullName}</td>
                    <td>{obj.JobName}</td>
                    <td>{obj.Category_Id}</td>
                    <td><div className='viewbtn-div' ><button className='tbl-viewbtn' id='Viewdetailsbtn' onClick={() => Viewdetailsbtn(obj.Application_Id, obj.Job_Id)}>View</button></div></td>
                    <td><div className='tbl-Applied '><i style={{ color: obj.Status === "Shortlisted" ? "green" : obj.Status === "Rejected" ? "red" : "blue" }}>{obj.Status}</i></div></td>

                  </tr>


                </tbody>
              )
            })
            : status === 'AllStatus' ?
              state.filter(obj => obj.Category_Id === parseInt(jobcat)).map((obj) => {
                return (
                  <tbody>
                    <tr className='tblrow'>
                      <td>{obj.FullName}</td>
                      <td>{obj.JobName}</td>
                      <td>{obj.Category_Id}</td>

                      <td><div className='viewbtn-div' ><button className='tbl-viewbtn' id='Viewdetailsbtn' onClick={() => Viewdetailsbtn(obj.Application_Id, obj.Job_Id)}>View</button></div></td>
                      <td><div className='tbl-Applied '><i style={{ color: obj.Status === "Shortlisted" ? "green" : obj.Status === "Rejected" ? "red" : "blue" }}>{obj.Status}</i></div></td>

                    </tr>


                  </tbody>
                )
              })
              : state.filter(obj => (obj.Category_Id === parseInt(jobcat)) && (obj.Status === status)).map((obj) => {
                return (
                  <tbody>
                    <tr className='tblrow'>
                      <td>{obj.FullName}</td>
                      <td>{obj.JobName}</td>
                      <td>{obj.Category_Id}</td>

                      <td><div className='viewbtn-div' ><button className='tbl-viewbtn' id='Viewdetailsbtn' onClick={() => Viewdetailsbtn(obj.Application_Id, obj.Job_Id)}>View</button></div></td>
                      <td><div className='tbl-Applied '><i style={{ color: obj.Status === "Shortlisted" ? "green" : obj.Status === "Rejected" ? "red" : "blue" }}>{obj.Status}</i></div></td>

                    </tr>


                  </tbody>
                )
              })

          }

        </table>
      </div>
    </div>
  )
}

export default Applications