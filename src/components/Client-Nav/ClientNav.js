
import "./ClientNav.css"
import React from 'react'
import GBSJOBS from '../img/GBSJOBS.png'
import Logoutimg from '../img/Logout.png'
// import { useHistory } from 'react-router-dom';


function ClientNav(props) {

   // const Email = props //.location.state || {};
   // const history = useHistory();

    const homeBtn = () => {
        window.location.replace("http://localhost:3000/?#/homepage");
     };
  
     const abtBtn = () => {
        window.location.replace("http://localhost:3000/?#/about");
     };
  
     const jobApply = () => {
        window.location.replace("http://localhost:3000/?#/jobapply");
     };
  
     const profileBtn = (props) => {
      // history.push({
      //    pathname: '/profile',
      //    state: props
      //  });
        window.location.replace("http://localhost:3000/#/profile");
     };
  
     const contactBtn = () => {
        window.location.replace("http://localhost:3000/?#/contact");
     };
     const LogoutBtn = () => {
      window.location.replace("http://localhost:3000/");
   };
     

  return (
    <div>
      
      <header>

<div>
   <img className='job1' src={GBSJOBS} alt='jobs' />
</div>
<div className="navtxthm" id='homeBtn' onClick={homeBtn}  >
   Home
</div>
<div className="navtxthm1" id='abtBtn' onClick={abtBtn} >
   About
</div>
<div className="navtxthm2" id='jobApply' onClick={jobApply}  >
   Applied Jobs
</div>
<div className="navtxthm3" id="profileBtn"  onClick={() => profileBtn()}  >
   Profile
</div>
<div className="navtxthm4" id="contactBtn" onClick={contactBtn}>
   Contact
</div>
<div className="NavLogoutBtn" id="LogoutBtn" onClick={LogoutBtn}>
   <img className='LogoutBt' src={Logoutimg} alt=''></img>
</div>

</header>
    </div>
  )
}

export default ClientNav
  