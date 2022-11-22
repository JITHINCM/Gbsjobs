import React, { Fragment, useState } from "react";
import './EditJob.css'
import Nav from '../Admin-Nav/nav'
import axios from 'axios';


function EditJob() {

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

    
    // window.location.replace("http://localhost:3000/");
  


  const handleSave = () => {

    const data = {
      JobName:jobname,
      Openings:openings,
      Category_Id:jobcat,
      Description:description,
      Experience:experience,
      Skills:skills,
      LastDateForApplying:lastDate,
      SalaryPackage:salary,
      JobType:type,
      ContactNumber:contact
    };

    const url = 'https://localhost:5001/GBSJobs/v1/savejob';
    axios.post(url, data).then((result) => {
      console.log(result.data);
      console.log(data);
      if (result.data.Success === true) {
        // setShowSuccess(true)
        // reset();

      }
    })
  }

  return (
    <Fragment>
    <div>
      <Nav />

      <div>
        <div>
          <div className='jobfield-name'>Job :</div>
          <div>
            <input className='jobfield-namebox' onChange={(e) => handleJobName(e.target.value)} ></input>
            {/* Branch Operations Manager */}
          </div>
        </div>

        <div>
          <div className='jobfield-Category' >Category:</div>
          <div>
            <input className='jobfield-Categorybox' onChange={(e) => handleJobCat(e.target.value)} ></input>
          </div>
        </div>

        <div>
          <div className='jobfield-Openings'>Openings:</div>
          <div>
            <input className='jobfield-Openingsbox' onChange={(e) => handleOpenings(e.target.value)}></input>
          </div>
        </div>

        <div>
          <div className='jobfield-Skills'>Skills:</div>
          <div>
            <input className='jobfield-Skillsbox' onChange={(e) => handleSkills(e.target.value)}></input>
          </div>
        </div>

        <div>
          <div className='jobfield-Type'>Type:</div>
          <div>
            <input className='jobfield-Typebox' onChange={(e) => handleType(e.target.value)}></input>
          </div>
        </div>

        <div>
          <div className='jobfield-Description'>Description:</div>
          <div>
            <input className='jobfield-Descriptionbox' onChange={(e) => handleDescription(e.target.value)}></input>
          </div>
        </div>

        <div>
          <div className='jobfield-Experience'>Experience:</div>
          <div>
            <input className='jobfield-Experiencebox'  onChange={(e) => handleExperience(e.target.value)}></input>
          </div>
        </div>


        <div>
          <div className='jobfield-Salary'>Salary:</div>
          <div>
            <input className='jobfield-Salarybox'  onChange={(e) => handleSalary(e.target.value)}></input>
          </div>
        </div>

        <div>
          <div className='jobfield-ContactNo'>Contact No:</div>
          <div>
            <input className='jobfield-ContactNobox'  onChange={(e) => handleContact(e.target.value)}></input>
          </div>
        </div>

        <div>
          <div className='jobfield-LastDate'>Last Date:</div>
          <div>
            <input className='jobfield-LastDatebox'  onChange={(e) => handleLastDate(e.target.value)}></input>
          </div>
        </div>
      </div>

      <div>
        <button className='Jobeditbtn' onClick={() => handleSave()}>Edit</button>
      </div>

    </div>
    </Fragment>
  )
}

export default EditJob