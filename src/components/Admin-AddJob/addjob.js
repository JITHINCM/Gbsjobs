import React, { Fragment, useState, useEffect } from "react";
import './addjob.css'
import Nav from '../Admin-Nav/nav'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { AiOutlineCaretLeft } from "react-icons/ai";

function AddJob() {

  const {
    reset,
  } = useForm();

  const iconBtn = () => {
    window.location.replace("http://localhost:3000/#/adminjob");
  };
  
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
  const [state, setState] = useState([]);

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

  const fetchData = () => {
    const url = 'https://localhost:5001/GBSJobs/v1/Category';
    axios.get(url).then((response) => {
      setState(response.data.Data)

    })
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = () => {

    const data = {
      JobName: jobname,
      Openings: openings,
      // CategoryName: jobcat,
      Category_Id:parseInt(jobcat),//parseInt(localStorage.getItem('Category_Id')),
      Description: description,
      Experience: experience,
      Skills: skills,
      LastDateForApplying: lastDate,
      SalaryPackage: salary,
      JobType: type,
      ContactNumber: contact
    };

    const url = 'https://localhost:5001/GBSJobs/v1/savejob';
    axios.post(url, data).then((result) => {
      console.log(result.data);
      console.log(data);
      if (result.data.Success === true) {
        // setShowSuccess(true)
        window.location.replace("http://localhost:3000/#/adminjob");

        reset();
      }
    })
    
    const url2 = 'https://localhost:5001/GBSJobs/v2/getopeningscount';
  axios.get(url2).then((response) => {
    console.log(data);
    console.log(response.data); 

  })

  }

  return (
    <Fragment>
      <div>
        <Nav />
        <div className='BacktoAdminJob-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft /></div>
        <div>
          <div>
            <div className='jobfieldName'>Job :</div>
            <div>
              <input className='jobfieldNnamebox' onChange={(e) => handleJobName(e.target.value)} ></input>
              {/* Branch Operations Manager */}
            </div>
          </div>

          <div>
            <div className='jobfieldCategory'  >Category Name:</div>
            
            
            <select className='jobfieldCategorybox' onChange={(e) => handleJobCat(e.target.value)}>
            <option   value="" >select</option>

            {state.map((obj)=>{ 
              
              return(
          
            <option   value={obj.Category_Id} >{obj.CategoryName} </option>
             
              )
              
            })}
              </select>

                {/*  <input className='jobfieldCategorybox' type='number' onChange={(e) => handleJobCat(e.target.value)} ></input> */}

          </div>

          <div>
            <div className='jobfieldOpenings'>Openings:</div>
            <div>
              <input className='jobfieldOpeningsbox' type='number' onChange={(e) => handleOpenings(e.target.value)}></input>
            </div>
          </div>

          <div>
            <div className='jobfieldSkills'>Skills:</div>
            <div>
              <input className='jobfieldSkillsbox' onChange={(e) => handleSkills(e.target.value)}></input>
            </div>
          </div>

          <div>

            <div className='jobfieldType'>Type:</div>
            {/* <div>
            <input className='jobfieldTypebox' onChange={(e) => handleType(e.target.value)}></input>
          </div> */}
            <select className='jobfieldTypebox' onChange={(e) => handleType(e.target.value)}>
            <option value='' >Select</option>
            <option value='Full Time' >Full Time</option>
                <option value='Part Time'>Part Time</option>
                <option value='Work from Home'>Work from Home</option>
               
            </select>
          </div>

          <div>
            <div className='jobfieldDescription'>Description:</div>
            <div>
              <input className='jobfieldDescriptionbox' onChange={(e) => handleDescription(e.target.value)}></input>
            </div>
          </div>

          <div>
            <div className='jobfieldExperience'>Experience:</div>
            <div>
              <input className='jobfieldExperiencebox' type='number' onChange={(e) => handleExperience(e.target.value)}></input>
            </div>
          </div>


          <div>
            <div className='jobfieldSalary'>Salary:</div>
            <div>
              <input className='jobfieldSalarybox' onChange={(e) => handleSalary(e.target.value)}></input>
            </div>
          </div>

          <div>
            <div className='jobfieldContactNo' >Contact No:</div>
            <div>
              <input className='jobfieldContactNobox' onChange={(e) => handleContact(e.target.value)}></input>
            </div>
          </div>

          <div>
            <div className='jobfieldLastDate'>Last Date:</div>
            <div>
              <input className='jobfieldLastDatebox' type='date' onChange={(e) => handleLastDate(e.target.value)}></input>
            </div>
          </div>
        </div>

        <div>
          <button className='JobAddbtn' onClick={() => handleSave()}>Add</button>
        </div>

      </div>
    </Fragment>
  )
}

export default AddJob