import Button from 'react-bootstrap/Button';
import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class ApplyLeave extends Component 
{
   
  constructor(){
    super();
    this.state={
       "emp_Id":'',
       "man_id": " ",
       "no_OfDays":'',
       "start_Date":'',
       "end_Date":'',
       "applied_On":'',
       "leave_Type":'',
       "leave_Status":'',
       "leave_Reason":'',
       "manager_Comment":''
        
    }
    this.CreateApplyLeave=this.CreateApplyLeave.bind(this);
    this.handleChange=this.handleChange.bind(this);
    
}
CreateApplyLeave()
{
    let empid=localStorage.getItem("EmpId");
    let manid=localStorage.getItem("ManagerId");
    axios.post("http://localhost:12246/api/CRUD/InsertLeave",{
     emp_Id: empid,
     man_id : manid,
     no_OfDays:this.state.no_OfDays,
     start_Date:this.state.start_Date,
     end_Date:this.state.end_Date,
     applied_On:"2022-07-25",
     leave_Type:this.state.leave_Type,
     leave_Status:"Pending",
     leave_Reason:this.state.leave_Reason,
     manager_Comment:"NA"
    }).then(res =>{
        alert("Leave Applied");
    }).catch(err =>{
        alert("Error");
    })

}

handleChange(e)
{
    this.setState(e);
}

  render(){
  return (
   
<form>
<h3>Apply For Leave </h3>

    <div className="form-group">
        <label>Start Date </label>
        <input type="date" onChange={(e)=>this.handleChange({start_Date:e.target.value})} className="form-control" placeholder=" Enter Start Date" />
    </div>

    <div className="form-group">
        <label>End Date</label>
        <input type="date"  onChange={(e)=>this.handleChange({end_Date:e.target.value})} className="form-control" placeholder=" Enter End date" />
    </div>

    <div className="form-group">
        <label>Number of days </label>
        <input type="number"  onChange={(e)=>this.handleChange({no_OfDays:e.target.value})} className="form-control" placeholder="Enter Number of days" />
    </div>

    <div className="form-group">
        <label>Leave Type</label>
        <input type="text" onChange={(e)=>this.handleChange({leave_Type:e.target.value})} className="form-control" placeholder="Enter the Leave Type " />
    </div>

    <div className="form-group">
        <label>Leave Reason</label>
        <input type="text"  onChange={(e)=>this.handleChange({leave_Reason:e.target.value})} className="form-control" placeholder="Enter Leave Reason" />
    </div>

    <br/>

    <button type="submit" onClick={this.CreateApplyLeave} className="btn btn-dark btn-lg btn-block"> Apply </button> {' '}
    
    <form action="/MyPreviousLeaves">
        <br/>
    <button type="submit" className="btn btn-dark btn-lg btn-block"> Cancel </button>
   </form>
     
    </form>
  )
  }
}