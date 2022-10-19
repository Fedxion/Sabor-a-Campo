import React from "react";
import "../navegation/Login.css";
import Logo from "../../assets/logo.jpeg";
import { Apiurl } from "../../services/apiRest";
import axios from "axios";


class Register extends React.Component {
  state = {
    form: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    error: false,
    errorMSg: "",
  };

  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  manejadorBoton = () => {
    let url = Apiurl;
    const user = {
      name: this.state.form.name,
      surname: this.state.form.surname,
      email: this.state.form.email,      
      password: this.state.form.password,
    };
    console.log(user);
    axios.post(url, user).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <br></br>
              <img
                src={Logo}
                width="150px"
                border-radio="50%"
                alt="User Icon"
              />
              <br></br>
            </div>

            <form onSubmit={this.manejadorSubmit}>
              <input
                type="text"
                className="fadeIn second"
                name="name"
                placeholder="Nombre"
                onChange={this.manejadorChange}
              />


              <input
                type="text"
                className="fadeIn second"
                name="surname"
                placeholder="Apellido"
                onChange={this.manejadorChange}
              />

              <input
                type="email"
                className="fadeIn second"
                name="email"
                placeholder="juan@gmail.com"
                onChange={this.manejadorChange}
              />

              

              <input
                type="password"
                name="password"
                className="fadeIn third"
                placeholder="Contraseña"
                onChange={this.manejadorChange}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Register"
                onClick={this.manejadorBoton}
              />
            </form>

            <div id="formFooter"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;