import React from "react";
import {Routes, Route, BrowserRouter as Router }from "react-router-dom";
import About from "../pages/AboutUs";
import Contact from "../pages/contact";
import HomePage from "../pages/homePage";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>

                <Route exact path="/" component={HomePage} />
                <Route exact path="/AboutUs" component={About} />
                <Route exact path="/Contact" component={Contact} />
                
            </Routes>

        </Router>
    )
}

export default AppRouter;