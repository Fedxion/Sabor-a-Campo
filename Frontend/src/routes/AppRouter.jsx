import React from "react";
import { Routes, Route }from "react-router-dom";
import About from "../pages/AboutUs";
import Contact from "../pages/contact";
// import HomePage from "../pages/Login";
import LoginRegister from "../components/navegation/LoginRegister"
import Login from "../components/navegation/Login";
import Home from "../pages/homePage";


const AppRouter = () => {
    return(
            <Routes>
                <Route exact path="/aboutus" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/register" element={<LoginRegister />} />
                <Route exact path="/login" element={<Login />} />
                {/* <Route exact path="/log" element={<HomePage />} /> */}
                <Route exact path="/" element={<Home />} />
            </Routes>
    )
}

export default AppRouter;