import React from "react";
import {Routes, Route, BrowserRouter as Router }from "react-router-dom";
import About from "../../../pages/AboutUs";
import Contact from "../../../pages/contact";
import HomePage from "../../../pages/homePage";

const AppRouter = () => {
    return(
        <Router>
            <Routes>

                <Route exact path="/" component={HomePage}/>
                <Route exact path="/aboutus" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                
            </Routes>

        </Router>
    )
}

export default AppRouter;