import React from 'react'
import './profile.css'
// import GBSJOBS from '../img/GBSJOBS.png'
import Profile from '../img/profile.png'
import Edit from '../img/edit.png'
import ClientNav from "../Client-Nav/ClientNav";

function profile() {
   

   const iconEdit = () => {
      window.location.replace("http://localhost:3000/#/edit");
   };

   return (
      <div>
<ClientNav/>

         
         <div >
            <div>  <img className='editicon' src={Edit} alt='' id='iconEdit' onClick={iconEdit} /></div>
            <div className='protext'>
               Profile
            </div>
            <div>
               <img className='profileimg' src={Profile} alt='' />
            </div>
            <div>
               <form>
                  <div className='profile-container'>
                     <div className='pflname'>Name:</div>
                     <div className='line1'></div>

                     <div className='pflname1'>Phone:</div>
                     <div className='line2'></div>

                     <div className='pflname2'>Email id:</div>
                     <div className='line3'></div>

                     <div className='pflname3'>Gender:</div>
                     <div className='line4'></div>

                     <div className='pflname4'>DOB:</div>
                     <div className='line5'></div>

                     <div className='pflname5'>Address:</div>
                     <div className='line6'></div>

                     <div className='pflname6'>Skills:</div>
                     <div className='line7'></div>

                     <div className='pflname7'>Heighest Qualification:</div>



                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default profile
