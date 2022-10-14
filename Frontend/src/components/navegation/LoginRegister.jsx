import React, {useState} from "react";
import Register from "./register";
import Login from "./login";



  const LoginRegister = () =>{
    const [currentForm, SetCurrentForm] = useState('login');
    const toggleForm = (formName) => {
    SetCurrentForm(formName);
  }
    return (
        <div>
  {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        </div>
    )
}

export default LoginRegister;