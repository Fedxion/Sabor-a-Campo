import React, { useState } from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "./components/navegation/Footer";
import { Login } from "./components/navegation/login";
import { Register } from "./components/navegation/register";
import AppRouter from "./routes/appRouter.jsx";
import Contact from "./pages/contact";
import AboutUs from "./pages/AboutUs";
import "./pages/AboutUs.css"

function App() {
    const [currentForm, SetCurrentForm] = useState('login');
    const toggleForm = (formName) => {
      SetCurrentForm(formName);
    }
  return <div className="App">
    <AppRouter/>

     <Navbar />
     
     {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
     <Footer />
    </div>
}

export default App;
