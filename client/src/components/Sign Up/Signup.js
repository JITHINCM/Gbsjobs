import React, { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

// import ReactDOM from "react-dom";
import GBSJOBS from '../img/GBSJOBS.png'
import './signup.css'

// import ReactDOM from 'react-dom';
import bgimg from '../img/bgimg.png'
import grampro from '../img/Gramprologo.png'
import job from '../img/job.jpg'
import footer from '../img/footer.png'


function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mobile, setMobile] = useState('');
  const utype = "User";
  const [showSuccess,setShowSuccess]=useState(false);

  // const [ConfirmPass, setConfirmPass] = useState('');

  const handleNameChange = (value) => {
    setName(value);
  }
  const handleEmailChange = (value) => {
    setEmail(value);
  }
  const handlePasswordChange = (value) => {
    setPass(value);
  }
  const handleMobileChange = (value) => {
    setMobile(value);
  }

  const BtnLog = () => { 
    
    window.location.replace("http://localhost:3000/");
  };


  // const handleConfirmPasswordChange = (value) => {
  //     setConfirmPass (value);
  // }

  const handleSave = () => {

    const data = {
      Name: name,
      Email: email,
      Password: pass,
      Mobile: mobile,
      UserType: utype
      // ConfirmPass: ConfirmPass,
      // IsActive: 1
    };

    const url = 'https://localhost:5001/GBSJobs/v1/savedata';
    axios.post(url, data).then((response) => {
      console.log(response.data);
      console.log(data);
      if (response.data.Success === true) {
        setShowSuccess(true);
        reset();
      }

    // reset();

      //   if(result.data == 'Data inserted')
      //   alert('data saved');
      //   else
    })



  }

 
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async () => {
    // alert(JSON.stringify(data));
    // reset();
  };


  return (
    <Fragment>
      <div>
        <header>
          <div>
            <img className='jobnav' src={GBSJOBS} alt='jobs' />
          </div>
        </header>

        <div className='signuptxt'>
          Sign Up
        </div>
        <div className="bg" style={{ backgroundImage: `url(${bgimg})` }}>
          {/* <img className='bg' src ={bgimg} alt='bg'/> */}
          <div className="containers">
            <img className='logogbs' src={grampro} alt='' />
            <img className='img' src={job} alt='' />
            <img className='foot' src={footer} alt='' />

            <div className="SignupInnerBox">
              <div style={{ position: 'absolute', width: " 260px", height: "32px", left: "106px", top: '30px', fontFamily: 'Arial', fontstyle: 'normal', fontweight: '400', fontsize: '13px', lineheight: '15px', textalign: 'center' }}>
                Please Sign up to Continue
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <div>
                  <input className='signtxt' placeholder='Enter Your Name' type="text"
                    {...register("name", {
                      required: "*Name is required",
                      pattern: {
                        value: /^[a-zA-Z]+[-'\s]?[a-zA-Z ]+$/,
                        message: "Only alphabets and space are allowed"
                      }
                    })} onChange={(e) => handleNameChange(e.target.value)} />

                  {errors.name && (
                    <small className='text-danger-name'>{errors.name.message}</small>
                  )}
                </div>
                {/*Email  */}

                <div>
                  <input className='signtxt1' placeholder='Enter Your Email' type="text"
                    {...register("email", {
                      required: "*email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })} onChange={(e) => handleEmailChange(e.target.value)} ></input>

                  {errors.email && (
                    <small className='text-danger-email'>{errors.email.message}</small>
                  )}
                </div>


                {/* Password */}
                <div>
                  <input className='signtxt2' placeholder='password' type="password"
                    {...register("password", {
                      required: "*password is required",
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                        message: "Password must have at least 8 characters,One Uppercase and one lowercase"

                      }
                    })} onChange={(e) => handlePasswordChange(e.target.value)}></input>

                  {errors.password && (
                    <small className='text-danger-pass'>{errors.password.message}</small>
                  )}
                </div>
                {/* confirm password  */}
                <div>
                  <input className='signtxt3' placeholder='Confirm password' type="password"
                    {...register("ConfirmPassword", {
                      required: "*confirm password is required", validate: value =>
                        value === password.current || ""
                    })}
                  // onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  />

                  {errors.ConfirmPassword && (
                    <small className='text-danger-ConfirmPass'>{errors.ConfirmPassword.message}</small>
                  )}


                </div>

                {/* Mobile */}

                <div>
                  <input className='signtxt4' placeholder='Enter mobile number' type="text"
                    {...register("Mobile", {
                      required: "*Mobile is required", pattern: {
                        value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                        message: "Invalid  phone Number"
                      }
                    })} onChange={(e) => handleMobileChange(e.target.value)}></input>
                  {errors.Mobile && (
                    <small className='text-danger-Mobile'>{errors.Mobile.message}</small>
                  )}
                </div>

                {/* submit button */}

                <input type="submit" className='submitbtn' value="Submit" onClick={() => handleSave()} />

                
              </form>
              

              <div> <button className='Logindbtn' id='btnlog' onClick={BtnLog} >Login</button></div>
            </div>

            <div className='TxtonSignUpComplete'>
{
       showSuccess?<small>Successfully registered... Plese login to continue</small>:null
     }
</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Signup;
