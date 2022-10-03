import React from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
  
  <BrowserRouter className="App">
    <div className="container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          Inicio
        </Link>
      </div>
    </div>

    <Switch>



      <Route path="/AboutUs" element={Navbar} {...Imagen} {...Footer} />
      <AboutUs />
    {/* </Route> */}


  </Switch>
  
    </BrowserRouter>
  );
}

export default App;
