import React from "react";
import Gallery from "../components/navegation/Gallery";
import Products from "../components/navegation/Products";
import "../pages/homepage.css";
import {findAllStudent, saveStudent, updateStudent, deleteStudent, findOneStudent} from "../services/apiCall";

findAllStudent().then( (response) =>{
  console.log("Data desde la llamada al método");
  console.log(response.data.data.lenght);
  response.data.data.forEach(student =>{
    console.log("dni" + student.dni);
    console.log("nombre" + student.nombre);
    console.log("apellido" + student.apellido);
    console.log("email" + student.email);
    console.log("contraseña" + student.contraseña);
    console.log("--------------------------");
  })
}).catch (error =>{
  console.log(error);
});

saveStudent().then(response =>{
  console.log("Student saved" + response.data);
});


updateStudent().then(response =>{
  console.log(response.data.message);
});

deleteStudent().then(response =>{
  console.log(response); //o response.data.message//
});


findOneStudent().then(response =>{
  console.log(response.data.data);
});

const HomePage = () => {
  return (<div>
    <Gallery />
      <Products />
  </div>
  
  );
};

export default HomePage;
