import React from 'react'
import './edit.css'
// import GBSJOBS from '../img/GBSJOBS.png';
import ClientNav from "../Client-Nav/ClientNav";

function edit() {


  
  return (
    <div >
<ClientNav/>
      
      <div className='edittxt'>
        Edit profile
      </div>
      <div>
        <form >
          <div>
            <div className='editnametxt'>Full Name</div>
            <input className="editboxs" type="text" />
          </div>

          <div>
            <div className='editnametxt1'>Mobile</div>
            <input className="editboxs1" type="text" />
          </div>

          <div>
            <div className='editnametxt2'>Email</div>
            <input className="editboxs2" type="text" />
          </div>

          <div>
            <div className='editnametxt3'>DOB</div>
            <input className="editboxs3" type="text" />
          </div>


          <div>
            <div className='editnametxt4'>Skills</div>
            <input className="editboxs4" type="text" />
          </div>

          <div>
            <div className='editnametxt5'>Address</div>
            <input className="editboxs5" type="text" />
          </div>

          <div>
            <div className='gender'>Gender:</div>
            <div className='editradio'>
              <input type="radio" value="Female" name="gender" /> Female
            </div>

            <div className='editradio1'>
              <input type="radio" value="Male" name="gender" /> Male
            </div>

          </div>

        </form>
      </div>
      <div>
        <button className='submit' >submit</button>
      </div>
    </div>
  )
}

export default edit
