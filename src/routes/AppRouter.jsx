import React from "react";
import {Routes, Route, BrowserRouter as Router }from "react-router-dom";
import About from "../pages/AboutUs";
import Contact from "../pages/contact";
import HomePage from "../pages/homePage";
import Login from "../components/navegation/Login&Register/login";
import LoginRegister from "../components/navegation/Login&Register/LoginRegister";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>

                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/aboutus" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/login" element={<LoginRegister />} />
                
            </Routes>

        </Router>
    )
}

export default AppRouter;