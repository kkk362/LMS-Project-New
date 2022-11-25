import React, { Component } from "react";

export default class ManagerLogin extends Component {
    constructor()
{
    super();
    this.state={
        man_Id:"",
        password:""
        
    }
    this.ManagerLogin=this.ManagerLogin.bind(this);
    this.validate=this.validate.bind(this);
    this.handleChange=this.handleChange.bind(this);
   
}

validate()
{
    if(this.state.man_Id=="" &&  this.state.password=="")
    {
        alert("Please Enter Your Credentials")
    }
    else{
        return true;
    }

}
handleChange(e){
    this.setState(e);
}

ManagerLogin(e)
{
    
    e.preventDefault();
    if (this.validate())
    {
        let man_Id = this.state.man_Id;
        let password = this.state.password;
        
        fetch("http://localhost:12246/api/CRUD/ManLogin/"+man_Id+"/"+password).then(res =>res.json()).then(result =>
            {
                console.log(result);
                if(result==1)
                {
                    
                    window.location="/AppliedLeaves";
                    
                }
                else
                {
                    alert ("Invalid Credentials");
                }
            }).catch(err =>{
                console.warn(err);
                alert("error");
            })
    }
}
    render() {
        return (
            <form>

                <h3>Admin Log in</h3>
                <center><img src="/Manlogo.png" width={100} height={100} alt="Image not found"/></center>
                <div className="form-group">
                    <label>Manager Id</label>
                    <input type="text" className="form-control" onChange={(e)=>this.handleChange({man_Id:e.target.value})} placeholder="Enter Manager Id" />
                </div>

            

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{this.handleChange({password:e.target.value})}} placeholder="Enter password" />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
                <br/>
                <center>
                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.ManagerLogin}>Sign in</button>
                </center>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </form>
        );
    }
}