import React from "react";
import { Routes, Route }from "react-router-dom";
import About from "../pages/AboutUs";
import Contact from "../pages/contact";
import HomePage from "../pages/homePage";
import LoginRegister from "../components/navegation/LoginRegister"


const AppRouter = () => {
    return(
            <Routes>
                <Route exact path="/aboutus" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/loginregister" element={<LoginRegister />} />
                <Route exact path="/" element={<HomePage />} />
            </Routes>
    )
}

export default AppRouter;