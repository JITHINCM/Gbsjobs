import React, { useEffect, useState } from 'react';
import './edit.css'
// import GBSJOBS from '../img/GBSJOBS.png';
import ClientNav from "../Client-Nav/ClientNav";
import axios from 'axios';
import { AiOutlineCaretLeft } from "react-icons/ai";
// import { useForm } from "react-hook-form";
import moment from 'moment';


function Edit(props) {

  const EmailId = localStorage.getItem('Email')

  const [state_1, setState_1] = useState([]);

  const iconBtn = () => {
    window.location.replace("http://localhost:3000/#/profile");
  };
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [skills, setSkills] = useState('');
  const [address, setAddress] = useState('');
  const [qualification, setQualification] = useState('');
  const [gender, setGender] = React.useState('');




  const handleName = (value) => {
    setName(value);
  }
  const handleMobile = (value) => {
    setMobile(value);
  }
  const handleEmail = (value) => {
    setEmail(value);
  }
  const handleDOB = (value) => {
    setDOB(value);
  }
  const handleSkills = (value) => {
    setSkills(value);
  }
  const handleAddress = (value) => {
    setAddress(value);
  }

  const handleChange = (event) => {
    setGender(event.target.value)
  }

  const handleQuali = (value) => {
    setQualification(value)
  }


  const FetchData = () => {
    const url = 'https://localhost:5001/GBSJobs/v2/getuseretails?';

    axios.post(url, null,
      {
        params: {
          email: EmailId
        }
      }).then((response) => {
        console.log(response.data.Data[0].Name);
        // console.log(response.data.Data[0].JobName);
        setState_1(response.data.Data)
      })

  };
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = () => {

    const data = {
      User_Id: parseInt(localStorage.getItem('user_id')),
      Name: name,
      Email: email,
      DateOfBirth: dob,
      Mobile: mobile,
      Skills: skills,
      Gender: gender,
      HighestQualification: qualification,
      Address: address
    };


    const url = 'https://localhost:5001/GBSJobs/v1/update user details';

    axios.put(url, data).then((result) => {
      // console.log(result.data);
      // console.log(data);
      if (result.data.Success === true) {
        // setShowSuccess(true)
        window.location.replace("http://localhost:3000/#/profile");
        // setState_2(result.data.Data)
        localStorage.setItem('Gender', result.data.Data[0].Gender);

      }
    })
  }


  return (
    <div >
      <ClientNav />
      <div className='BacktoProfile-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft /></div>

      <div className='editProfile'>
        Edit profile
      </div>

      {state_1.map((obj) => {
        
        const dob = moment(obj.DateOfBirth).format("YYYY-MM-DD")

        return (

          <div>
            <form >
              <div>
                <label className='EditFullname'>Full Name:</label>
                <input className="EditFullnamebox" type="text" defaultValue={obj.Name} onChange={(e) => handleName(e.target.value)} />
              </div>

              <div>
                <label className='EditMobile'>Mobile:</label>
                <input className="Editmobilebox" type="text" defaultValue={obj.Mobile} onChange={(e) => handleMobile(e.target.value)} />
              </div>

              <div>
                <label className='EditEmail'>Email:</label>
                <input className="Editemailbox" type="text" defaultValue={obj.Email} onChange={(e) => handleEmail(e.target.value)} />
              </div>

              <div>
                <label className='EditDOB'>DOB:</label>
                <input className="EditDOBbox" type="date" defaultValue={dob} onChange={(e) => handleDOB(e.target.value)} />
              </div>


              <div>
                <label className='EditSkills'>Skills:</label>
                <input className="Editskillsbox" type="text" defaultValue={obj.Skills} onChange={(e) => handleSkills(e.target.value)} />
              </div>

              <div>
                <label className='EditAddress'>Address:</label>
                <input className="Editaddressbox" type="text" defaultValue={obj.Address} onChange={(e) => handleAddress(e.target.value)} />
              </div>

              <div>
                <label className='EditQualification'>Highest Qualification:</label>
                <input className="EditQualificationbox" type="text" defaultValue={obj.HighestQualification} onChange={(e) => handleQuali(e.target.value)} />
              </div>

              <div>
                <label className='Editgender'>Gender:</label>
                <div className='EditRadioFemale'>
                  <input type="radio" value='Female' name="Female" checked={gender === 'Female'} //defaultValue={obj.Gender}  value={obj.Gender}
                    onChange={handleChange} /> Female
                </div>

                <div className='EditRadioMale'>
                  <input type="radio" value='Male' name="Male" checked={gender === 'Male'}
                    onChange={handleChange} /> Male
                </div>
                <div className='EditRadioOther'>
                  <input type="radio" value='Other' name="other" checked={gender === 'Other'}
                    onChange={handleChange} /> Other

                </div>

                <div className='upload_text'>
                  Upload Resume (Docx/pdf):
                </div>
                <div> <input className='ChooseFile' type='file' name='file' ></input>
                  {/* onChange={changeHandler} */}
                </div>

              </div>

            </form>
          </div>

        )
      })}
      <div>
        <button className='submit' onClick={() => handleSave()}>submit</button>
      </div>
    </div>
  )
}
export default Edit
