import React from 'react'
import './adminviewjob.css'
import Nav from '../Admin-Nav/nav'
import { AiOutlineCaretLeft } from "react-icons/ai";
function adminviewjob() {
    
  const iconBtn = () => {
    window.location.replace("http://localhost:3000/?#/adminjob");
  };
    return (
        <div>
            <Nav />
            <div className='viewjob-box'>
                <div className='txt'>Branch Operations Manager</div>
                <div className='txt1'>Branch Banking</div>
                <div className='txt2'>Required Experience : 2 years <br />ESAF Small Finance Bank</div>
            </div>

            <div className='viewjob-skils'>
                SKILLS :
            </div>
            <div className='skilltxt'>
                Banking, Banking Knowledge, Banking Operations, Banking Sales
            </div>
            <div className='viewjob-disc'>
                Description :
            </div>
            <div className='viewdiscription-txt'>
                Responsible for Branch operations ,increasing the Bank's customers, business development and MIS reporting and compliance and service quality at the branch.
                Profile Graduation (regular) or PG in any discipline with 2+ years of Branch Banking and a flair for sales and marketing is mandate.
            </div>
            <div className='viewjob-type'>Type:</div>
            <div className='viewjob-full'>Full Time</div>
            <div className='viewjob-sal'>Salary package: </div>
            <div className='viewjob-45'>45K</div>
            <div className='viewjob-last'>Last Date to apply:</div>
            <div className='viewjob-date'>01-11-2022</div>
            <div className='viewjob-contact'>Contact No :</div>
            <div className='viewjob-no'>904809XXXX</div>
            <div className='viewjob-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft/></div>
        </div>
    )
}

export default adminviewjob