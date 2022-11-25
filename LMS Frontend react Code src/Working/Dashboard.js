import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default class Dashboard extends Component {
    MyRedirect()
    {
        window.location="/";
    }
    render() {
        let userName=localStorage.getItem("username");
        return (
    <>
    <center><h1>Welcome {userName} </h1></center>
    
    <center><h1>Dashboard</h1></center>
    
    <button type="submit" className="dashboard"><Link className="nav-link" to ={'/MyDetails'}> My Details Section</Link></button>
    
    <button type="submit" className="dashboard"><Link  className="nav-link" to={'/MyManager'}>My Manager Details</Link></button>

    <button type="submit" className="dashboard"><Link className="nav-link" to ={'/MyPreviousLeaves'}> My Leave Applications Section</Link></button>
    <center>
    <button type="submit" onClick={this.MyRedirect}  className="btn btn-dark btn-lg btn-block"> LogOut </button> {' '}
    </center>
    </>
        )
    }
}
