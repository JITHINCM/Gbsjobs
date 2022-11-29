import React from 'react'
import GBSJOBS from '../img/GBSJOBS.png'
import Logout from '../img/Logout.png'
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

  // eslint-disable-next-line no-unused-vars
  const adminUser = () => {
    window.location.replace("http://localhost:3000/#/admin_userProfile");
  };
  const LogoutBtn = () => {
    window.location.replace("http://localhost:3000/#/adminlogin");
 };

  return (
    <div className='AdminNav'>
      <div className='logobox'>
        <img className='gbslogo' src={GBSJOBS} alt='' />
      </div>
      <div className='navs'>
        <div className='home' id='adminHome' onClick={adminHome} >Home</div>
        <div className='jobs' id='adminNavbtn' onClick={adminNavbtn}>Jobs List</div>
        <div className='applications' id='adminAppli' onClick={adminAppli}>Job Applications</div>
        {/* <div className='userProfile' id='adminUser' onClick={adminUser}>User Profiles</div> */}
        <div className="NavLogout" id="LogoutBtn" onClick={LogoutBtn}>
   <img className='LogoutBt' src={Logout} alt=''></img>
</div>
      </div>
    </div>
  )

}

export default nav
