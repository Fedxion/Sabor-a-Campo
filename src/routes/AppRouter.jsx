import React from "react";
import {Routes, Route, BrowserRouter as Router }from "react-router-dom";
import About from "../pages/AboutUs";
import Contact from "../pages/contact";
import HomePage from "../pages/homePage";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>

                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/AboutUs" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                
            </Routes>

        </Router>
    )
}

export default AppRouter;