import axios from 'axios';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export default class MyManager extends Component {
    constructor(){
        super();
        this.state={
          "man_id":'',
          "man_Name":'',
          "man_Email":'',
          "man_Phone":''
                    
        }
        this.MyManager=this.MyManager.bind(this);
    }
    MyManager(e){
        
        let MId=localStorage.getItem("ManagerId");
        axios.get('http://localhost:12246/api/CRUD/MyManagerDetails/'+MId)
        .then(Response=>{
            this.setState({
              man_Id:Response.data.man_Id,
              man_Name:Response.data.man_Name,
              man_Email:Response.data.man_Email,
              man_Phone:Response.data.man_Phone,
                
            })
        }).catch(error=>{console.warn(error);
        })
    }
    MyRedirect()
    {
        window.location="/Dashboard";
    }
    componentDidMount(){
        this.MyManager();
     }
    render() {
       let ManagerId=localStorage.getItem("MId");
        const{man_Id}=this.state;
        const{man_Name}=this.state;
        const{man_Email}=this.state;
        const{man_Phone}=this.state;
        
        return (
            <> 
            <div>
        
              <Card>
              <Table striped bordered hover >
            <thead>  
              <tr>
              <th>Manager Id</th>
              <th>Manager Name</th>
              <th>Manager Email</th>
              <th>Manager Mobile Number</th>
            
              </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{man_Id}</td>
                     <td>{man_Name}</td>
                     <td>{man_Email}</td>
                     <td>{man_Phone}</td>   
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