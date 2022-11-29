import React, { useEffect, useState } from 'react'; // 
import './profile.css'
// import GBSJOBS from '../img/GBSJOBS.png'
import Profile from '../img/profile.png'
import Edit from '../img/edit.png'
import ClientNav from "../Client-Nav/ClientNav";
import axios from 'axios';
// import { useHistory } from 'react-router-dom';


function UserProfile() {

   // const EmailId = props.location.state || {};

   const [state, setState] = useState([]);

   // const history = useHistory();

   // console.log(EmailId.email);

   // const Email_Id = EmailId.email;
   localStorage.getItem('Email') ;
   const email=localStorage.getItem('Email') 

   const FetchData = () => {
      const url = 'https://localhost:5001/GBSJobs/v2/getuseretails?';

      axios.post(url, null,
         {
            params: {
               email: email
            }
         }).then((response) => {
            // console.log(response.data.Data[0].Name);
            // console.log(response.data.Data[0].JobName);
            setState(response.data.Data)
         })

   };

   const iconEdit = () => {
      // history.push({
      //    pathname: '/edit',
      //    state: Email  
      //  });
      window.location.replace("http://localhost:3000/#/edit");
   };


   useEffect(() => {
      FetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div>
         <ClientNav />

         {state.map((obj) => {

            return (

               <div>

                  <div className='profile-div'> <h1 className='profile_h1'>Profile</h1> </div>
                  <div>  <img className='editicon' src={Edit} alt='' id='iconEdit' onClick={() => iconEdit(obj.Email)}  /></div>

                  <div>
                     <img className='profileimg' src={Profile} alt='' />
                  </div>
                  <div>
                     <form>
                        <div className='profile-container'>
                           <div className='pflname'>Name:  {obj.Name}</div>
                           <div className='line1'></div>

                           <div className='pflname1'>Phone: {obj.Mobile} </div>
                           <div className='line2'></div>

                           <div className='pflname2'>Email id:  {obj.Email}</div>
                           <div className='line3'></div>

                           <div className='pflname3'>Gender:{obj.Gender}  </div>
                           <div className='line4'></div>

                           <div className='pflname4'>DOB:  {obj.DateOfBirth}</div>
                           <div className='line5'></div>

                           <div className='pflname5'>Address:{obj.Address}</div>
                           <div className='line6'></div>

                           <div className='pflname6'>Skills:  {obj.Skills}</div>
                           <div className='line7'></div>

                           <div className='pflname7'>Heighest Qualification:  {obj.HighestQualification}</div>
                           <div className='line8'></div>

                           <div className='pflname8'>Resume: resume.pdf</div>



                        </div>
                     </form>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default UserProfile
