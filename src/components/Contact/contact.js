import React from 'react'
// import GBSJOBS from '../img/GBSJOBS.png'
import './contact.css'
import Mailbox from '../img/mailbox.png'
import Location from '../img/location.png'
import Call from '../img/call log.png'
import Facebook from '../img/facebook.png'
import Twiter from '../img/twiter.png'
import Insta from '../img/insta.png'
import Msg from '../img/messege.png'
import Linkdin from '../img/linkdin.png'
import ClientNav from "../Client-Nav/ClientNav";



function contact() {
   
   return (
      <div>

<ClientNav/>
         <div className='side-continer'>
            <div>
               <img className='mailbox' src={Mailbox} alt='' />
            </div>
            <div className='mailtext' >contact@gramproindia.com</div>
            <div className='cont-line'></div>
            <div>
               <img className='Location' src={Location} alt='' />
            </div>
            <div className='location-text'> Building No:708, Sreebhadra Complex Tirupadi lane, Mannuthy Thrissur-680651, Kerala.</div>
            <div className='cont-line1 '></div>
            <div>
               <img className='call-log' src={Call} alt='' />
            </div>
            <div className='call-text'>+91 907 260 4100</div>
            <div className='cont-line2 '></div>
         </div>
         <div>
            <div>
               <img className='facebook' src={Facebook} alt=''></img>
            </div>
            <div>
               <img className='twiter' src={Twiter} alt=''></img>
            </div>
            <div>
               <img className='insta' src={Insta} alt=''></img>
            </div>
            <div>
               <img className='msg' src={Msg} alt=''></img>
            </div>
            <div>
               <img className='linkd' src={Linkdin} alt=''></img>
            </div>
         </div>

         <div>
            <div className='container-class'>
               <div className='cntct'> Contact Us</div>
               <div className='cnct-text'>We're here to help ! send us your query via the form below or send us an email at  <a href='contact@gramproindia.com'> contact@gramproindia.com</a> </div>
               <div>
                  <input className='contact-name' type='text' placeholder='Name'></input>
               </div>
               <div>
                  <input className='contact-email' type='text' placeholder='Email'></input>
               </div>
               <div>
                  <input className='contact-content' type='text' placeholder='Type your message here'></input>
               </div>
               <div>
                  <button className='contact-submit' >submit</button>
               </div>
            </div>

         </div>
      </div>
   )
}

export default contact
