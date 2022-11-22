import React from 'react'
import './home.css'
import Nav from '../Admin-Nav/nav';
import grampro from '../img/Gramprologo.png'
import Adminbg from '../img/adm-bg.png'
function home() {
    const adminNavbtn = () => {
        window.location.replace("http://localhost:3000/#/adminjob");
    };
    return (
        <div>
            <Nav />
            <div>
                <div className='AdminBg' style={{ backgroundImage: `url(${Adminbg})` }}>
                    <img className='gbslog' src={grampro} alt='' />
                    <div >
                        <button className='updateJobBtn' id='adminNavbtn' onClick={adminNavbtn}>Update Jobs </button>
                    </div>
                    <div >
                        <button className='viewJobBtn'>View job Applications </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home