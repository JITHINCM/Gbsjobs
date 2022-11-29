import React, { Fragment, useState, useEffect } from "react";
import './EditJob.css'
import Nav from '../Admin-Nav/nav'
import axios from 'axios';
import { AiOutlineCaretLeft } from "react-icons/ai";
import moment from 'moment';

function EditJob() {

  const Jobid = parseInt(localStorage.getItem('Admin_Edit_JobId'))


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


    const url2 = 'https://localhost:5001/GBSJobs/v1/Category';
    axios.get(url2).then((response) => {
      setState2(response.data.Data)

    })

  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);


  const [jobname, setJobName] = useState('');
  const [jobcat, setCat] = useState('');
  const [openings, setOpenings] = useState('');
  const [skills, setSkills] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [contact, setContact] = useState('');
  const [lastDate, setLastDate] = useState('');
  // const [showSuccess,setShowSuccess]=useState(false);

  const handleJobName = (value) => {
    setJobName(value);
  }
  const handleJobCat = (value) => {
    setCat(value);
  }
  const handleOpenings = (value) => {
    setOpenings(value);
  }
  const handleSkills = (value) => {
    setSkills(value);
  }
  const handleType = (value) => {
    setType(value);
  }
  const handleDescription = (value) => {
    setDescription(value);
  }
  const handleExperience = (value) => {
    setExperience(value);
  }
  const handleSalary = (value) => {
    setSalary(value);
  }
  const handleContact = (value) => {
    setContact(value);
  }
  const handleLastDate = (value) => {
    setLastDate(value);
  }

  const iconBtn = () => {
    window.location.replace("http://localhost:3000/#/adminjob");
  };

  const handleSave = () => {

    const data = {
      JobName: jobname,
      Openings: openings,
      Category_Id: jobcat,
      Description: description,
      Experience: experience,
      Skills: skills,
      LastDateForApplying: lastDate,
      SalaryPackage: salary,
      JobType: type,
      ContactNumber: contact
    };

    const url = 'https://localhost:5001/GBSJobs/v1/update Job details';
    axios.put(url, data).then((result) => {
      console.log(result.data);
      console.log(data);
      if (result.data.Success === true) {
        alert("Successfully updated")
        window.location.replace("http://localhost:3000/#/adminjob");

        // setShowSuccess(true)
        // reset();

      }
    })
  }

  return (
    <Fragment>
      <div>
        <Nav />
        <div className='BacktoAdminJob-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft /></div>

        {state.map((obj) => {

          const date = moment(obj.LastDateForApplying).format("YYYY-MM-DD")

          // console.log('date2', date)

          return (

            <div>
              <div>
                <div className='jobfield-name'>Job :</div>
                <div>
                  <input className='jobfield-namebox' defaultValue={obj.JobName} onChange={(e) => handleJobName(e.target.value)} ></input>
                  {/* Branch Operations Manager */}
                </div>
              </div>

              <div>
                <div className='jobfield-Category' >Category :</div>
                <div>
                  <select className='jobfieldCategorybox'  onChange={(e) => handleJobCat(e.target.value)}>
                    <option value="" defaultValue={obj.Category_Id} >{obj.Category_Id}</option>

                    {state2.map((obj1) => {

                      return (

                        <option value={obj1.Category_Id}> {obj1.Category_Id}.{obj1.CategoryName} </option>

                      )

                    })}
                  </select>
                  {/* <input className='jobfield-Categorybox' defaultValue={obj.Category_Id} onChange={(e) => handleJobCat(e.target.value)} ></input> */}
                </div>
              </div>

              <div>
                <div className='jobfield-Openings'>Openings:</div>
                <div>
                  <input className='jobfield-Openingsbox' type='number' defaultValue={obj.Openings} onChange={(e) => handleOpenings(e.target.value)}></input>
                </div>
              </div>

              <div>
                <div className='jobfield-Skills'>Skills:</div>
                <div>
                  <input className='jobfield-Skillsbox' defaultValue={obj.Skills} onChange={(e) => handleSkills(e.target.value)}></input>
                </div>
              </div>

              <div>
                <div className='jobfield-Type'>Type:</div>
                {/* <div>
                  <input className='jobfield-Typebox' defaultValue={obj.JobType} onChange={(e) => handleType(e.target.value)}></input>
                </div> */}
                <select className='jobfield-Typebox' onChange={(e) => handleType(e.target.value)}>
                  <option value={obj.JobType} defaultvalue={obj.JobType} >{obj.JobType}</option>
                  <option value='Full Time' >Full Time</option>
                  <option value='Part Time'>Part Time</option>
                  <option value='Work from Home'>Work from Home</option>

                </select>
              </div>

              <div>
                <div className='jobfield-Description'>Description:</div>
                <div>
                  <input className='jobfield-Descriptionbox' defaultValue={obj.Description} onChange={(e) => handleDescription(e.target.value)}></input>
                </div>
              </div>

              <div>
                <div className='jobfield-Experience'>Experience:</div>
                <div>
                  <input className='jobfield-Experiencebox' type='number' defaultValue={obj.Experience} onChange={(e) => handleExperience(e.target.value)}></input>
                </div>
              </div>


              <div>
                <div className='jobfield-Salary'>Salary:</div>
                <div>
                  <input className='jobfield-Salarybox' defaultValue={obj.SalaryPackage} onChange={(e) => handleSalary(e.target.value)}></input>
                </div>
              </div>

              <div>
                <div className='jobfield-ContactNo'>Contact No:</div>
                <div>
                  <input className='jobfield-ContactNobox' defaultValue={obj.ContactNumber} onChange={(e) => handleContact(e.target.value)}></input>
                </div>
              </div>

              <div>
                <div className='jobfield-LastDate'>Last Date:</div>
                <div>

                  <input className='jobfield-LastDatebox' type='date' defaultValue={date} onChange={(e) => handleLastDate(e.target.value)}></input>
                  {/* {obj.LastDateForApplying} */}
                </div>
              </div>
            </div>

          )
        })}
        <div>
          <button className='Jobeditbtn' onClick={() => handleSave()}>Edit</button>
        </div>

      </div>
    </Fragment>
  )
}

export default EditJob