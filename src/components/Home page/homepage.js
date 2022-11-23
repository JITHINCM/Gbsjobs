

import "../Home page/homepage.css";
// import GBSJOBS from '../img/GBSJOBS.png'
import homebg from '../img/homebg.jpg'
import grampro from '../img/Gramprologo.png'
import search from '../img/searchicon.png'
import c1 from '../img/c1img.png'
import c2 from '../img/c2img.png'
import c3 from '../img/c3img.png'
import c4 from '../img/c4img.png'
import ClientNav from "../Client-Nav/ClientNav";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
function Homepage() {
  
   const jobNext = () => {
      window.location.replace("http://localhost:3000/?#/joblist");
   };

   return (
      
      
      <div>
         
<ClientNav/>

         <div className="homebg" style={{ backgroundImage: `url(${homebg})` }}>
            <div >
               <input className="search" type="text" placeholder="search here" />

               <div>
                  <img className='searchicon' src={search} alt='' />
               </div>
            </div>
            <div>
               <img className='logo' src={grampro} alt='' />
            </div>
            <div className="text1">Delivering Beyond Expectations</div>
            <div className="text2"  >Job Categories: </div>

         </div>

         <div >
            <div className="container1" id="jobNext" onClick={jobNext}>
               <div>
                  <img className='c1' src={c1} alt='' />
                  <div className="c1txt">
                     Branch Banking
                  </div>
                  {/* <div className="c1txt1">
                     4 openings
                  </div> */}
               </div>
            </div>
            <div className="container2"></div>
            <div>
               <img className='c2' src={c2} alt='' />
               <div className="c2txt">
                  Digital Marketing
               </div>
               {/* <div className="c2txt1">
                  2 openings
               </div> */}
            </div>
            <div className="container3"></div>
            <div>
               <img className='c3' src={c3} alt='' />
               <div className="c3txt">
                  I T
               </div>
               {/* <div className="c3txt1">
                  5 openings
               </div> */}
            </div>

            <div className="container4"></div>
            <div>
               <img className='c4' src={c4} alt='' />
               <div className="c4txt">
                  Micro Banking
               </div>
               {/* <div className="c4txt1">
                  3 openings
               </div> */}
            </div>

         </div>
      </div>


   );
}

export default Homepage;