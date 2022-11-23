import React from 'react'
import './about.css'
import GBSJOBS from '../img/GBSJOBS.png';
import AboutBG from '../img/aboutbg.png';
import AboutSide from '../img/aboutside.png'
function about() {
    const homeBtn = () => {
        window.location.replace("http://localhost:3000/?#/homepage");
    };

    const abtBtn = () => {
        window.location.replace("http://localhost:3000/?#/about");
    };

    const profileBtn = () => {
        window.location.replace("http://localhost:3000/#/profile");
    };

    const jobApply = () => {
        window.location.replace("http://localhost:3000/?#/jobapply");
    };
    const contactBtn = () => {
        window.location.replace("http://localhost:3000/?#/contact");
    };

    return (
        <div>
            <header>
                <div>
                    <img className='job4' src={GBSJOBS} alt='jobs' />
                </div>
                <div>

                </div>
                <div className="navtxtabt" id='homeBtn' onClick={homeBtn}>
                    Home
                </div>
                <div className="navtxtabt1" id='abtBtn' onClick={abtBtn} >
                    About
                </div>
                <div className="navtxtabt2" id='jobApply' onClick={jobApply} >
                    Applied Jobs
                </div>
                <div className="navtxtabt3" id="profileBtn" onClick={profileBtn} >
                    Profile
                </div>
                <div className="navtxtabt4" id="contactBtn" onClick={contactBtn} >
                    Contact
                </div>

            </header>
            <div className="Aboutbg" style={{ backgroundImage: `url(${AboutBG})` }}>
                <div className='abttxt' >
                    About the company
                </div>
            </div>
            <div>
                <div>
                    <div className='abttxt1' id='abtBtn' onClick={abtBtn}>
                        About
                        <div className='abttxt2'>
                            GramPro Business Services (GBS), earlier known as Lahanti Business Services (LBS), is a professional organization offering various business solutions, established in the year 2017 with an objective to provide shared services to Medium, Small and Emerging business enterprises.<br /><br />

                            We design and deliver support services that exceed customers' expectations, outpace the competition and transform their business by providing digital solutions and solving problems with excellence. By adhering to best practises, technology, support and training, GBS strives to be a Centre of Excellence (CoE) for all your business needs.

                            <br /><br /> We, at GBS, are building a culture of exceeding the expections of our clients without compromising on quality.
                        </div>
                    </div>
                </div>
                <div className="Aboutside" style={{ backgroundImage: `url(${AboutSide})` }}>
                </div>
            </div>
        </div>
    )
}

export default about
