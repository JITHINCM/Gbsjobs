import React from 'react'
import './applicantprofile.css'
import Nav from '../Admin-Nav/nav'
import profile from '../img/profile.png'
function applicantprofile() {
    return (
        <div>
            <Nav />
            <div>
                <img className='profileimg' src={profile} alt='' />
            </div>
            <div>
                <form>
                    <div className='profile-container'>
                        <div className='pflname'>Name:</div>
                        <div className='line1'></div>

                        <div className='pflPhone'>Phone:</div>
                        <div className='line2'></div>

                        <div className='Emailid'>Email id:</div>
                        <div className='line3'></div>

                        <div className='Gender'>Gender:</div>
                        <div className='line4'></div>

                        <div className='pflDOB'>DOB:</div>
                        <div className='line5'></div>

                        <div className='Address'>Address:</div>
                        <div className='line6'></div>

                        <div className='pflSkills'>Skills:</div>
                        <div className='line7'></div>

                        <div className='Qualification'>Heighest Qualification:</div>
                        <div className='line8'></div>

                        <div className='pflResume'> Resume:</div>
                        <div className='Resumepdf'> Resume.pdf</div>
                    </div>
                </form>
            </div>
            <div>
                <button className='Shortlisted'>Shortlisted</button>
                <button className='Reject'>Reject</button>
            </div>
            <div>
                <input className='TypeRespons' placeholder='Type Response'></input>
            </div>
            <div>
                <button className='PflDone'>Done</button>
            </div>
        </div>
    )
}

export default applicantprofile