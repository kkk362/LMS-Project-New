import axios from 'axios';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export default class AppliedLeaves extends Component {
    constructor(){
        super();
        this.state={ 
            Leaves:[]
                    
        }
      
        this.AppliedLeaves=this.AppliedLeaves.bind(this);
    }

    AppliedLeaves(e){
        
        let manid=localStorage.getItem("ManagerId");
        axios.get('http://localhost:12246/api/CRUD/AppliedLeaves/'+manid)
        .then(Response=>{
            this.setState({
                Leaves:Response.data
            })
            
        }).catch(error=>{console.warn(error);
        })
    }
  
    MyRedirect()
    {
        window.location="/ApproveDeny";
    }
    componentDidMount(){
        this.AppliedLeaves();
     }
    render() {
        let ManId=localStorage.getItem("manid");
        const {Leaves}=this.state;
        
        return (
            <> 
            <div >
            <Card style={{ width: '60rem' }}>
              <Table striped bordered hover >
            <thead>      
              <tr>
              <th>Leave ID</th>
              <th>Emp ID</th>
              {/* <th>Manager ID </th> */}
              <th>No Of Days</th>
              <th>Start Date </th>
              <th>End Date</th>
              <th>Applied On</th>
              <th>Leave Type</th>
              <th>Leave Status</th>
              <th>Leave Reason</th>
              <th>Manager Comment</th>
              </tr>
             </thead>

             <tbody>
                 {
                    Leaves.map(a=>
                <tr>
               <td>{a.leave_Id}</td>
               <td>{a.emp_Id}</td>
               {/* <td>{a.man_Id}</td> */}
               <td>{a.no_OfDays}</td>
               <td>{a.start_Date}</td>
               <td>{a.end_Date}</td>
               <td>{a.applied_On}</td>
               <td>{a.leave_Type}</td>  
               <td>{a.leave_Status}</td>
               <td>{a.leave_Reason}</td>
               <td>{a.manager_Comment}</td>
               </tr>
            )} 
            </tbody>
            </Table>
            </Card>
            <br/>
              <button type="submit" onClick={this.MyRedirect}  className="btn btn-dark btn-lg btn-block"> Next </button> {' '}
            
              </div>
              </>
        )
    }
}
