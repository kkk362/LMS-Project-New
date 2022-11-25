import axios from 'axios';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export default class MyDetails extends Component {
    constructor(){
        super();
        this.state={
            "emp_Id" : " ",
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
        this.MyDetails=this.MyDetails.bind(this);
    }
    MyDetails(e){
        
        let userName=localStorage.getItem("username");
        axios.get('http://localhost:12246/api/CRUD/MyDetails/'+userName)
        .then(Response=>{
            this.setState({
                emp_Id : Response.data.emp_Id,
                emp_Name:Response.data.emp_Name,
                emp_Email:Response.data.emp_Email,
                password:Response.data.password,
                confirmPassword:Response.data.confirmPassword,
                emp_Phone:Response.data.emp_Phone,
                emp_Doj: Response.data.emp_Doj,
                emp_Dept: Response.data.emp_Dept,
                emp_LeaveBal: Response.data.emp_LeaveBal,
                man_id : Response.data.man_id
            })
            localStorage.setItem("EmpId",Response.data.emp_Id);
            localStorage.setItem("ManagerId",Response.data.man_id);
        
        }).catch(error=>{console.warn(error);
        })
    }
    MyRedirect()
    {
        window.location="/Dashboard";
    }
    componentDidMount(){
        this.MyDetails();
     }
    render() {
        let userName=localStorage.getItem("username");
        const{emp_Id}=this.state;
        const{emp_Name}=this.state;
        const{emp_Email}=this.state;
        const{emp_Phone}=this.state;
        const{emp_Doj}=this.state;
        const{emp_Dept}=this.state;
        const{emp_LeaveBal}=this.state;
        const{man_id} = this.state;
        
        return (
            <> 
            <div>
            <Card>
              <Table striped bordered hover >
                  <thead>
                  
              <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile number</th>
              <th>Date of Join</th>
              <th>Department</th>
              <th>Leave Balance</th>
              <th>Manager ID </th>
              
              </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{emp_Id}</td>
                     <td>{emp_Name}</td>
                     <td>{emp_Email}</td>
                     <td>{emp_Phone}</td>
                     <td>{emp_Doj}</td>
                     <td>{emp_Dept}</td>
                     <td>{emp_LeaveBal}</td>  
                     <td>{man_id}</td>
                 </tr>
             </tbody>
             </Table>
              </Card>
              <br/>
              <button type="submit" onClick={this.MyRedirect}  className="btn btn-dark btn-lg btn-block"> Back</button> {' '}
              </div>
              </>
        )
    }
}