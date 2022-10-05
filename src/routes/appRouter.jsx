import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "../pages/homePage.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Contact from "../pages/contact.jsx";

const AppRouter =() =>{
    return (
    <Router>
        <Routes>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Contact" component={Contact} />
        </Routes>
    </Router>
    );
}

export default AppRouter;