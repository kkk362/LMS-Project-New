import React from 'react'
import SignUp from './SignUp'
import ApplyLeave from './ApplyLeave'
import Login from './Login'
import Dashboard from './Dashboard'
import MyDetails from './MyDetails'
import MyManager from './MyManager'
import MyPreviousLeaves from './MyPreviousLeaves'
import AppliedLeaves from './AppliedLeaves'
import ManagerLogin from './ManagerLogin'
import ApproveDeny from './ApproveDeny'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function App() 
{
    return (
  <Router>
  <div className="App">
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={'/'}>
      Leave Management System
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to={'/'}>
          SignIn
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/SignUp'}>
          SignUp
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/ManagerLogin'}>
          Admin
            </Link>
          </li>

         

          {/* <li className="nav-item">
            <Link className="nav-link" to={'/ApplyLeave'}>
          ApplyLeave
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/Dashboard'}>
          Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/MyDetails'}>
          MyDetails
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/MyManager'}>
          MyManager
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/MyPreviousLeaves'}>
          MyPreviousLeaves
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/AppliedLeaves'}>
          AppliedLeaves
            </Link>
          </li> */}

         

        </ul>
      </div>
    </div>
  </nav>
       
  <div className="outer">
    <div className="inner">
      <Routes>
        <Route path ="/" element={<Login/>}/>
        
        <Route path="/SignUp"  element={<SignUp/>}/>
        <Route path="/Dashboard"  element={<Dashboard/>}/>
        <Route path="/MyDetails"  element={<MyDetails/>}/>
        <Route path="/MyManager"  element={<MyManager/>}/>
        <Route path="/ApplyLeave"  element={<ApplyLeave/>}/>
        <Route path="/MyPreviousLeaves"  element={<MyPreviousLeaves/>}/>
        <Route path="/AppliedLeaves"  element={<AppliedLeaves/>}/>
        <Route path="/ManagerLogin"  element={<ManagerLogin/>}/>
        <Route path="/ApproveDeny"  element={<ApproveDeny/>}/>
       
      </Routes>
    </div>
  </div>
</div>
</Router>
    )
}
