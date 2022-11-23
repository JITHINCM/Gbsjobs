import React from 'react'
import GBSJOBS from '../img/GBSJOBS.png'
import './applied.css'
function applied() {
  const homeBtn = () => {
    window.location.replace("http://localhost:3000/?#/homepage");
  };

  const abtBtn = () => {
    window.location.replace("http://localhost:3000/?#/about");
  };

  const profileBtn = () => {
    window.location.replace("http://localhost:3000/#/profile");
  };

  const jobApply = () => {
    window.location.replace("http://localhost:3000/?#/jobapply");
  };

  const contactBtn = () => {
    window.location.replace("http://localhost:3000/?#/contact");
  };
  return (
    <div>
      <header>
        <div>
          <img className='job4' src={GBSJOBS} alt='jobs' />
        </div>
        <div>

        </div>
        <div className="navtxtapl" id='homeBtn' onClick={homeBtn}>
          Home
        </div>
        <div className="navtxtapl1" id='abtBtn' onClick={abtBtn} >
          About
        </div>
        <div className="navtxtapl2" id='jobApply' onClick={jobApply} >
          Applied Jobs
        </div>
        <div className="navtxtapl3" id="profileBtn" onClick={profileBtn}>
          Profile
        </div>
        <div className="navtxtapl4" id="contactBtn" onClick={contactBtn} >
          Contact
        </div>

      </header>

      <div className='applied-container'>
        <div>

          <div className='Applyedtxt'>Branch Operations Manager</div>
          <div className='Applyedtxt1'>Branch Banking</div>
          <div className='Applyedtxt2'>Required Experience : 2 years <br />ESAF Small Finance Bank</div>
        </div>
        <div>
          <button className='appliedjob'> Applied</button>
        </div>

      </div>

      <div className='responsetxt'>Response from the recruiter will be shown here:</div>
    </div>
  )
}

export default applied
