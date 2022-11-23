import React from 'react'
import './applications.css'
import Nav from '../Admin-Nav/nav'
import Profile from '../img/profile.png'
function Applications() {
  const ViewBtns = () => {
    window.location.replace("http://localhost:3000/#/admin_applicantProfile");
  };

  return (
    <div>
      <Nav />

      <div className='job-side-container-application'>
        <div className='catogeries'>Categories</div>
        <div className='catogeries-line'></div>

        <div className='Branch-banking'>Branch banking</div>
        <div className='catogeries-line1'></div>

        <div className='Digital-marketing'>Digital marketing</div>
        <div className='catogeries-line2'></div>

        <div className='IT'>I T</div>
        <div className='catogeries-line3'></div>

        <div className='Micro-banking'>Micro banking</div>
        <div className='catogeries-line4'></div>
      </div>
      <div>
        <button className='Applied-button'>Applied</button>
        <button className='Shortlisted-button'>Shortlisted</button>
        <button className='Rejected-button'>Rejected</button>
        <button className='Generate-button'>Generate Report</button>
      </div>

      <div className='appli-container'>
        <div>
          <img className='pro' src={Profile} alt='' />
          <div className='sani'>Sanishma K S</div>
          <div className='exp'>Experience: Fresher</div>
          <div className='skil'>Skills: .............</div>
        </div>
        <div>
          <button className='appli-viewbtn' id='ViewBtns' onClick={ViewBtns}>View</button>
        </div>
      </div>
      <div className='appli-container1'>
        <div>
          <img className='pro' src={Profile} alt='' />
          <div className='sani'>Sanishma K S</div>
          <div className='exp'>Experience: Fresher</div>
          <div className='skil'>Skills: .............</div>
        </div>
        <div>
          <button className='appli-viewbtn'>View</button>
        </div>
      </div>
      <div className='appli-container2'>
        <div>
          <img className='pro' src={Profile} alt='' />
          <div className='sani'>Sanishma K S</div>
          <div className='exp'>Experience: Fresher</div>
          <div className='skil'>Skills: .............</div>
        </div>
        <div>
          <button className='appli-viewbtn'>View</button>
        </div>
        </div>
      
    </div>
  )
}

export default Applications