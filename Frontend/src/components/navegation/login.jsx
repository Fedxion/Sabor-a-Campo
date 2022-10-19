import React, { useState } from "react";
import './Login.css';
import Logo from "../../assets/logo.jpeg"
import {Apiurlogin} from "../../services/apiRest";
import axios from 'axios';
// const {saveUser, UserTableData}= require("../../services/apiCall");

class Login extends React.Component{
    
    state={
        form:{
            "email": "",
            "password": ""
        },
        error:false,
        errorMsg:""
    }
    
    manejadorSubmit =e=>{
        e.preventDefault();
    }

    manejadorChange =async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
       
    }

    manejadorBoton=()=>{
        let url = Apiurlogin;
        axios.post(url,this.state.form)
        .then(response =>{
            console.log(response);
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        
                        <div className="fadeIn first">
                            <br /><br />
                            <img src={Logo} id="icon" alt="User Icon" />
                        </div>

                       
                        <form onSubmit={this.manejadorSubmit}> 
                            <input type="text"  className="fadeIn second" name="email" placeholder="Email" onChange={this.manejadorChange} />
                            <input type="password"  className="fadeIn third" name="password" placeholder="Contraseña" onChange={this.manejadorChange} />
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
                        </form>

                        
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Olvidaste la contraseña?</a>
                        </div>

                    </div>
                </div>    
            </React.Fragment>
        )
    }
}




export default Login;