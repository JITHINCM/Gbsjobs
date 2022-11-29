import React, { useState } from 'react' //
import axios from 'axios';
import './apply.css'
import ClientNav from "../Client-Nav/ClientNav";
import { AiOutlineCaretLeft } from "react-icons/ai";
// import moment from 'moment';

function Apply() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [skills, setSkills] = useState('');
  const [exp, setExp] = useState('');
  const [gender, setGender] = useState('');
  const [qualification, setQualification] = useState('');
const[dob,setDOB]=useState('');
  
const iconBtn = () => {
  window.location.replace("http://localhost:3000/?#/details");
};

  const handleNameChange = (value) => {
    setName(value);
  }
  const handleEmailChange = (value) => {
    setEmail(value);
  }
  const handleSkillsChange = (value) => {
    setSkills(value);
  }
  const handleMobileChange = (value) => {
    setMobile(value);
  }
  const handleExperience = (value) => {
    setExp(value);
  }
 
  const handleQualificationChange = (value) => {
    setQualification(value);
  }
 
  const handleDOBChange= (value) => {
    setDOB(value);
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }

  
  const user_id = parseInt(localStorage.getItem('user_id'));
  const category_id = parseInt(localStorage.getItem('Category_Id'));
  const job_id = parseInt(localStorage.getItem('Job_Id'));
  const Job_Name = localStorage.getItem('Job_Name');
  
  

  // let convertedDate = moment(date)           
  // const applydate = convertedDate.format("L");

// const upload_cv="ResumeB6"

  const HandleSubmit = () => {
    const current = new Date();
    const Applied_date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    console.log(Applied_date) 

    const data = {
      FullName:name,
      Email:email,
      Mobile: mobile,
      Skills: skills,
      Experience:parseInt(exp),
      JobName:Job_Name,
      HighestQualification:qualification,
      DateOfBirth:dob,
      Gender: gender,
      User_Id: user_id,
      Category_Id: category_id,
      Job_Id:job_id,
      Response: " ",
      Status: "Applied",
      AppliedDate:Applied_date
      // AppliedDate:'',
      // Upload_CV:upload_cv
    };
    console.log(data);
    const url = 'https://localhost:5001/GBSJobs/v1/savejobapplication'; 
    axios.post(url, data).then((response) => {
      console.log(response.data);
      console.log(data);
      
      if (response.data.Success === true) {
        alert("Successfully applied");
        window.location.replace("http://localhost:3000/?#/details");
      }
    })
   
  }


  return (
    <div >
      <ClientNav />
      <div className='BacktoDetails-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft /></div>

      <div className='aplytxt'>
        APPLY NOW
      </div>
      <div>
      <form >

<div>
  <div className='FullName-text'>Full Name</div>
  <input className="FullName-Box" type="name" onChange={(e) => handleNameChange(e.target.value)} />
</div>

<div>
  <div className='Email-text'>Email</div>
  <input className="Email-Box" type="email" onChange={(e) => handleEmailChange(e.target.value)} />
</div>

<div>
  <div className='Mobile-text'>Mobile</div>
  <input className="Mobile-box" type="text" onChange={(e) => handleMobileChange(e.target.value)} />
</div>

<div>
  <div className='Quali-text'>Qualification</div>
  <input className="Quali-box" type="text" onChange={(e) => handleQualificationChange(e.target.value)} />
</div>

<div>
<div className='Gender-text'>Gender </div>
  <div className='radio'>
    <input type="radio" value="Female" name="Female" onChange={handleGenderChange} checked={gender === 'Female'} /> Female
  </div>
  <div className='radio1'>
    <input type="radio" value="Male" name="Male" onChange={handleGenderChange} checked={gender === 'Male'} /> Male
  </div>
  <div className='radioOther'>
    <input type="radio" value="Other" name="Other" onChange={handleGenderChange} checked={gender === 'Other'} /> Others
  </div>
</div>

<div>
  <div className='dob-text'>DOB</div>
  <input className="dob-box" type="date" onChange={(e) => handleDOBChange(e.target.value)} />
</div>

 <div>
  <div className='Experience-text'>Experience</div>
  <input className="Experience-box" type="number" onChange={(e) => handleExperience(e.target.value)} />
</div> 

<div>
  <div className='Skills-text'>Skills</div>
  <input className="Skills-box" type="text" onChange={(e) => handleSkillsChange(e.target.value)} />
</div>

{/* <div className='resume'>
    Upload Resume (Docx/pdf)
  </div>
  <div>

    <button className='choose'> Choose file</button>
    <input className='choose' type='file' name='Resumebase64'  ></input>

    onChange={onUploadFileChange}  accept="application/*"

  </div> */}


</form>
      </div>
      <div>
        <button className='submit' onClick={() => HandleSubmit()}> submit</button>
      </div>
    </div>
  )
}

export default Apply
