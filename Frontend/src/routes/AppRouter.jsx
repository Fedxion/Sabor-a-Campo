import React from "react";
import { Routes, Route }from "react-router-dom";
import About from "../pages/AboutUs";
import Contact from "../pages/contact";
import HomePage from "../pages/homePage";
import LoginRegister from "../components/navegation/LoginRegister"
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDetails from "../components/userDetails";


const AppRouter = () => {
    return(
            <Routes>
                <Route exact path="/aboutus" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                {/* <Route exact path="/loginregister" element={<LoginRegister />} /> */}
                <Route exact path="/home" element={<HomePage />} />
                
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
            </Routes>
    )
}

export default AppRouter;