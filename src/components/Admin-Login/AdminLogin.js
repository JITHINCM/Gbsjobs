import React, { Fragment, useState } from 'react'
import GBSJOBS from '../img/GBSJOBS.png'
import './AdminLogin.css'
import imge from '../img/AdminBg.png';
import axios from 'axios';


function Adminlogin() {

    const Userlogin = () => {

        window.location.replace("http://localhost:3000/#/");

    };

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showError, setShowError] = useState(false);

    const handleEmailChange = (value) => {

        setEmail(value);

    };

    const handlePasswordChange = (value) => {

        setPassword(value);

    };

    const handleLogin = () => {

        const data = {

            Email: email,

            Password: password

        };


        const url = 'https://localhost:5001/GBSJobs/v1/login';

        axios.post(url, data).then((response) => {

            // console.log(response.data.Success);

            if (response.data.Success === true) {
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

            if (res.data.Data[0].UserType === 'Admin') 
            { 
                window.location.replace("http://localhost:3000/?#/adminhome");
            }

            else{alert("Only admin can login Here")}

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

                <div className='AdminNav'>

                    <div className='logobox'>

                        <img className='gbslogo' src={GBSJOBS} alt='' />

                    </div>

                </div>

                <div className='header'></div>

                <img className='main' src={imge} alt='' />

                <div>

                    <div className='welcome'>Welcome Admin</div>

                </div>

                <div className='please'>Please Login to continue</div>

                <div>

                    <input type="email" className='usrname' placeholder=' Enter your Email' onChange={(e) => handleEmailChange(e.target.value)} /><br /><br /><br /><br />

                </div>

                <div>

                    <input type="password" className='password' placeholder=' Enter your Password' onChange={(e) => handlePasswordChange(e.target.value)} />

                </div>

                <div>

                    <button className='btn' onClick={() => handleLogin()}>Login</button>

                </div>

                <div className='AdminErrorLogin'>
                    {
                        showError ? <small>*Incorrect Email or Password</small> : null
                    }

                </div>

                <div>

                    <div className="userlog"> User?</div>

                    <div><button className='signupBtn' id='btnSignup' onClick={Userlogin} >Login</button></div>

                </div>

            </div>

        </Fragment>

    )

}

export default Adminlogin

