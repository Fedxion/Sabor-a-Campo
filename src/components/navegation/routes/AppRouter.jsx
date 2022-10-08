import React from "react";
import {Routes, Route, BrowserRouter as Router }from "react-router-dom";
import About from "../../../pages/AboutUs";
import {Productos} from "../Gallery";
import { Router } from "react-router-dom";
import Contact from "../../../pages/contact";
import HomePage from "../../../pages/homePage";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/AboutUs" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/" component={HomePage}/>
            </Routes>

        </Router>
    )
}
