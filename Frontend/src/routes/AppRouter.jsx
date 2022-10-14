import React from "react";
import { Routes, Route }from "react-router-dom";
import About from "../pages/AboutUs";
import Contact from "../pages/contact";
import Register from "../components/navegation/register";
import Login from "../components/navegation/login"
import Home from "../pages/homePage";
import Access from "../pages/Access";


const AppRouter = () => {
    return(
            <Routes>
                <Route exact path="/access" element={<Access />} />
                <Route exact path="/aboutus" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
    )
}

export default AppRouter;