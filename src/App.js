
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Login from './components/login/login'
import Signup from './components/Sign Up/Signup'
import Homepage from './components/Home page/homepage'
import Details from './components/Details/details'
import Apply from './components/Apply/apply'
import About from './components/About/about'
import Jobapply from './components/JobApply/jobapply'
import profile from './components/Profile/profile'; 
import Edit from './components/Edit Profile/edit'
import Applied from './components/Applied Jobs details/applied'
import Contact from './components/Contact/contact'
import JobList from './components/JobCategory/JobList'

import AdminLogin from './components/Admin-Login/AdminLogin'
import AdminHome from './components/Admin-Home/home'
import Adminjob from './components/Admin-jobs/job'
import AdminAddjob from './components/Admin-AddJob/addjob'
import AdminEditJob from './components/Admin EditJob/EditJob'
import AdminApplications from './components/Admin application/applications';
import AdminViewJob from './components/Admin-Viewjob/adminviewjob'
import ApplicantProfile from './components/Admin -ApplicacantProfile/applicantprofile'
import AdminUserProfile from './components/Admin-UserProfile/userProfile'
import AdminAddCategory from './components/Admin-addCategory/addcategory'



function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/joblist" component={JobList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/about" component={About} />
          <Route exact path="/jobapply" component={Jobapply} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/applied" component={Applied} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route exact path="/adminhome" component={AdminHome} />
          <Route exact path="/adminjob" component={Adminjob} />
          <Route exact path="/adminaddjob" component={AdminAddjob} />
          <Route exact path="/admineditjob" component={AdminEditJob} />
          <Route exact path="/adminapplication" component={AdminApplications} />
          <Route exact path="/adminviewjob" component={AdminViewJob} />
          <Route exact path="/admin_applicantProfile" component={ApplicantProfile} />
          <Route exact path="/admin_userProfile" component={AdminUserProfile} />
          <Route exact path="/admin_addcategory" component={AdminAddCategory} />


          



        </Switch>
      </HashRouter>

      {/* <Login /> */}
      {/* <Homepage/> */}
      {/* <Branch/> */}
      {/* <Details/> */}

    </div>
  );

}

export default App;
