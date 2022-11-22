import React from 'react'
import GBSJOBS from '../img/GBSJOBS.png'
import './nav.css'
function nav() {
  const adminHome = () => {
    window.location.replace("http://localhost:3000/#/adminhome");
  };

  const adminNavbtn = () => {
    window.location.replace("http://localhost:3000/#/adminjob");
  };

  const adminAppli = () => {
    window.location.replace("http://localhost:3000/#/adminapplication");
  };

  const adminUser = () => {
    window.location.replace("http://localhost:3000/#/admin_userProfile");
  };

  return (
    <div className='AdminNav'>
      <div className='logobox'>
        <img className='gbslogo' src={GBSJOBS} alt='' />
      </div>
      <div className='navs'>
        <div className='home' id='adminHome' onClick={adminHome}>Home</div>
        <div className='jobs' id='adminNavbtn' onClick={adminNavbtn}>Jobs</div>
        <div className='applications' id='adminAppli' onClick={adminAppli}>Applications</div>
        <div className='userProfile' id='adminUser' onClick={adminUser}>User Profiles</div>
      </div>
    </div>
  )

}

export default nav
