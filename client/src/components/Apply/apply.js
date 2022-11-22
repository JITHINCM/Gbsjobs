import React from 'react' //, {useState} 
import './apply.css'
import ClientNav from "../Client-Nav/ClientNav";


function Apply() {

  // const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);

  // const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// 	setIsFilePicked(true);
	// };

  const myFunction = () => {
    alert("Successfully Submitted")
  }
  return (
    <div >
      <ClientNav />
      
      <div className='aplytxt'>
        APPLY NOW
      </div>
      <div>
        <form >
          <div>
            <div className='nametxt'>Full Name</div>
            <input className="boxs" type="text" />
          </div>

          <div>
            <div className='nametxt1'>Mobile</div>
            <input className="box1" type="text" />
          </div>

          <div>
            <div className='nametxt2'>Location</div>
            <input className="box2" type="text" />
          </div>

          <div>
            <div className='nametxt3'>Email</div>
            <input className="box3" type="text" />
          </div>


          <div>
            <div className='nametxt4'>Skills</div>
            <input className="box4" type="text" />
          </div>

          <div>
            <div className='nametxt5'>Experience:</div>
            <input className="box5" type="number" />
          </div>

          <div>
            <div className='radio'>
              <input type="radio" value="Female" name="gender" /> Female
            </div>

            <div className='radio1'>
              <input type="radio" value="Male" name="gender" /> Male
            </div>
            <div className='radioOther'>
              <input type="radio" value="Male" name="gender" /> Others
            </div>
            <div className='resume'>
              Upload Resume (Docx/pdf)
            </div>
            <div>

              {/* <button className='choose'> Choose file</button> */}
              <input className='choose' type='file' name ='file' ></input> 
              {/* onChange={changeHandler} */}
            </div>
          </div>

        </form>
      </div>
      <div>
        <button className='submit' onClick={myFunction}> submit</button>
      </div>
    </div>
  )
}

export default Apply
