import axios from "axios";

export const saveUser = async (email, password) =>{
    const User={
        email: email,
        password: password
    };
    return await axios.get("http://localhost:8000/login", User);
}