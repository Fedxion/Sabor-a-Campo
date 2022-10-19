import axios from "axios";

export const RegisterUser = async (name, surname, email, password) =>{
    const User={
        name: name,
        surname: surname,
        email: email,
        password: password
    };
    return await axios.get("http://localhost:3000/register", User);
}

export const LoginUser = async (email, password) =>{
    const User={
        email: email,
        password: password
    };
    return await axios.get("http://localhost:3000/login", User);
}