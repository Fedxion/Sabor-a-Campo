import axios from "axios";

export const saveStudent = async (email, password) =>{
    const student={
        email: email,
        password: password
    }
    return await axios.get("http://localhost:8000/login", student);
}