import axios from 'axios';
import React, { Component } from 'react'
export default class SignUp extends Component {

    constructor(){
        super();
        this.state={
            "emp_Name": "",
            "emp_Email": "",
            "password": "",
            "confirmPassword" : " ",
            "emp_Phone":"",
            "emp_Doj": "",
            "emp_Dept": "",
            "emp_LeaveBal": "",
            "man_id": " "
        }
        this.create=this.create.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    create(){
       axios.post("http://localhost:12246/api/CRUD/InsertEmp",{
        emp_Name: this.state.emp_Name,
        emp_Email:this.state.emp_Email,
        password:this.state.password,
        confirmPassword:this.state.confirmPassword,
        emp_Phone:this.state.emp_Phone,
        emp_Doj: this.state.emp_Doj,
        emp_Dept: this.state.emp_Dept,
        emp_LeaveBal:"12",
        man_id : "2"
       }).then(res =>{
           alert("Registration Successful");
       }).catch(err =>{
           alert("Please Enter all Details")
       })
    
    }
    handleChange(e)
    {
      this.setState(e);
    }

    render() {
        return (
<form>
    <h3>New Registration</h3>

    <div className="form-group">
        <label>Employee Name </label>
        <input type="text" name="Name" onChange={(e)=>this.handleChange({emp_Name:e.target.value})} className="form-control" placeholder="Enter Name" />
    </div>

    <div className="form-group">
        <label>Email</label>
        <input type="email" name="Email" onChange={(e)=>this.handleChange({emp_Email:e.target.value})} className="form-control" placeholder="Enter Email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password"  name="Password"  onChange={(e)=>this.handleChange({password:e.target.value})}  className="form-control" placeholder="Enter password" />
    </div>

    <div className="form-group">
        <label>Confirm Password</label>
        <input type="password"  name="Password"  onChange={(e)=>this.handleChange({confirmPassword:e.target.value})}  className="form-control" placeholder="Enter password" />
    </div>
    <div className="form-group">
        <label>Phone Number</label>
        <input type="text" name="Number" onChange={(e)=>this.handleChange({emp_Phone:e.target.value})} className="form-control" placeholder="Enter Number" />
    </div>

    <div className="form-group">
        <label>Date Of Join</label>
        <input type="date" name="DOJ" onChange={(e)=>this.handleChange({emp_Doj:e.target.value})} className="form-control" placeholder="Date of Join" />
    </div>

    <div className="form-group">
        <label>Department</label>
        <input type="text" name="Department" onChange={(e)=>this.handleChange({emp_Dept:e.target.value})} className="form-control" placeholder="Enter Department" />
    </div>
 <br/>
 <center>
    <button type="submit" onClick={this.create} className="btn btn-dark btn-lg btn-block">Register</button>
    </center>
    <p className="forgot-password text-right">
        Already registered <a href="/">log in?</a>
    </p>
</form>
  
)
}
}
