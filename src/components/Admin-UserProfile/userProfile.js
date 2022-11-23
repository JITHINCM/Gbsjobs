import React from 'react'
import './userProfile.css'
import Nav from '../Admin-Nav/nav'
import Profile from '../img/profile.png'
function userProfile() {
    return (
        <div>
            <Nav />

            <div className='user-container'>
                <div>
                    <img className='pro' src={Profile} alt='' />
                    <div className='user-sani'>Sanishma K S</div>
                    <div className='user-exp'>Experience: Fresher</div>
                    <div className='user-skil'>Skills: .............</div>
                </div>
              
            </div>
            <div className='user-container1'>
                <div>
                    <img className='pro' src={Profile} alt='' />
                    <div className='user-sani'>Sanishma K S</div>
                    <div className='user-exp'>Experience: Fresher</div>
                    <div className='user-skil'>Skills: .............</div>
                </div>
               
            </div>
            <div className='user-container2'>
                <div>
                    <img className='pro' src={Profile} alt='' />
                    <div className='user-sani'>Sanishma K S</div>
                    <div className='user-exp'>Experience: Fresher</div>
                    <div className='user-skil'>Skills: .............</div>
                </div>
            </div>

            <div className='vertical-line'></div>

            <div>
                <img className='user-profileimg' src={Profile} alt='' />
            </div>
            <div>
                <form>
                    <div className='UserPro-container'>
                        <div className='user-pflname'>Name:</div>
                        <div className='user-line1'></div>

                        <div className='user-pflPhone'>Phone:</div>
                        <div className='user-line2'></div>
                    
                        <div className='user-Emailid'>Email id:</div>
                        <div className='user-line3'></div>

                        <div className='user-Gender'>Gender:</div>
                        <div className='user-line4'></div>

                        <div className='user-pflDOB'>DOB:</div>
                        <div className='user-line5'></div>

                        <div className='user-pflAddress'>Address:</div>
                        <div className='user-line6'></div>

                        <div className='user-pflSkills'>Skills:</div>
                        <div className='user-line7'></div>

                        <div className='user-pflQualification'>Heighest Qualification:</div>

                        <div className='user-pflResume'> Resume:</div>
                        <div className='user-Resumepdf'> Resume.pdf</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default userProfile