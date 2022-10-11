import axios from "axios";


export const findAllStudent =  async () => {
    return await axios.get("http://localhost:8000/students");
}

// export const findAllStudent =  async () => {
//     const data = await axios.get("http://localhost:8000/students");
//     console.log("Data desde el método" + data.data);
//     return data.data;
// }

export const saveStuden = async (studentToSave) =>{
    const student ={
        dni: "477",
        nombre: "Ana",
        apellido: "Sosa",
        email: "anasosa@gmail.com",
        contraseña: "***"
    
    };
    return await axios.post("http://localhost:8000/students", student); 
}

export const updateStuden = async (studentToSave) =>{
    const student ={
        dni: "477",
        nombre: "Ana",
        apellido: "Sosa",
        email: "anasosa@gmail.com",
        contraseña: "***"
    
    };
    return await axios.put("http://localhost:8000/students/" + 36094, student); 
}

export const deleteStudent = async () => {
    return await axios.delete("http://localhost:8000/students/" + 36094);  
}

export const findOneStudent = async () => {
    return await axios.get("http://localhost:8000/students/" + 36094);
}