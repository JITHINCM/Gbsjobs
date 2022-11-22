import React, { Fragment, useState } from 'react'

//import React from 'react'

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

            // console.log(data);

            // console.log(response.data);

            // console.log(response.data.Success);

            if (response.data.Success === true) {

                const url1 = 'https://localhost:5001/GBSJobs/v1/users';

                axios.get(url1).then((res) => {

                    // console.log(res.data.Data[1].UserType);



                })

                window.location.replace("http://localhost:3000/?#/adminhome");



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



                <div className='ErrorLogin'>

                    {

                        showError ? <small>Incurrect Email or Password</small> : null

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

