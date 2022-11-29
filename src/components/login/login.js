import React, { Fragment, useState } from 'react'
// import useState  from 'react'
// import useEffect from 'react'
import axios from 'axios';
import './login.css'
import GBSJOBS from '../img/GBSJOBS.png'
import bgimg from '../img/bgimg.png'
import grampro from '../img/Gramprologo.png'
import job from '../img/job.jpg'
import footer from '../img/footer.png'
// import { useHistory } from 'react-router-dom';


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {Link} from "react-router-dom"


function Login() {

  // const user = { username, password };

  // const history = useHistory();

  const btnSignup = () => {

    window.location.replace("http://localhost:3000/#/signup");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [usertype, setusertype] = useState(""); 

  const [showError, setShowError] = useState(false);


  const AdminLoginbtn = () => {

    window.location.replace("http://localhost:3000/#/adminlogin");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {

    // console.log(EMail);


    const data = {
      Email: email,
      Password: password
    };


    const url = 'https://localhost:5001/GBSJobs/v1/login';
    axios.post(url, data).then((response) => {
      console.log(data);
      console.log(response.data);
      // console.log(response.data.Success);
      if (response.data.Success === true) {

        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);

        const url = 'https://localhost:5001/GBSJobs/v2/getusertype?';
        axios.get(url,
          {
            params: {
              email: email
            } 
          }).then((res) => {
            // console.log(response.data.Data[0].UserType);
            // console.log(response.data.Data[0].User_Id);
            localStorage.setItem('Usertype', res.data.Data[0].UserType)
            localStorage.setItem('user_id', res.data.Data[0].User_Id)
               console.log( res.data.Data[0].UserType);

            if (res.data.Data[0].UserType === 'User') 
            { window.location.replace("http://localhost:3000/?#/homepage"); }
            else{alert(" Please go to the Admin login Page..Only Users can login here")}
          })

      }
      else {
        setShowError(true);
      }


      


    })


  }




  return (
    <Fragment>
      <div>

        <header>
          <div>

          </div>
          <div>
            <img className='job' src={GBSJOBS} alt='jobs' />
          </div>
        </header>
        <div className="bg" style={{ backgroundImage: `url(${bgimg})` }}>
          {/* <img className='bg' src ={bgimg} alt='bg'/> */}
          <div className="container">
            <img className='logogbs' src={grampro} alt='' />
            <img className='img' src={job} alt='' />
            <img className='foot' src={footer} alt='' />

            <div className="LoginInnerBox">
              <div style={{ position: 'absolute', width: " 327px", height: "32px", left: "107px", top: '43px', fontFamily: 'Arial', fontstyle: 'normal', fontweight: '400', fontsize: '13px', lineheight: '15px', textalign: 'center' }}>
                Please Login to Continue
              </div>
              <div>
                <form  >
                  <div>
                    <input className="name" type="email" value={email} placeholder='Username/Email ' onChange={(e) => handleEmailChange(e.target.value)} /><br /><br /><br /><br />

                  </div>

                  <div>
                    <input className="pswd" type="password" value={password} placeholder='Password' onChange={(e) => handlePasswordChange(e.target.value)} />
                  </div>

                  <div>
                    <button className='loginbtn' id="btnVerify" onClick={() => handleLogin()} >Login   </button>
                    {/* <button className='loginbtn' id="btnVerify"  >Login   </button> */}

                  </div>

                </form>

                <div className='UserErrorLogin'>
                  {
                    showError ? <small>Incorrect Email or Password</small> : null
                  }
                </div>
                <div>
                  <div className="code"> Don't have an account?</div>
                  <div> <button className='signupdbtn' id='btnSignup' onClick={btnSignup} >SignUp</button></div>
                </div>
              </div>
              <div className='Admin'>Admin ?</div>
              <div><button className='adlogin' id='AdminLoginbtn' onClick={AdminLoginbtn}>Login</button></div>

            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default Login;