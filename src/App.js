import React from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "../src/components/navegation/Footer";
import Gallery from "./components/navegation/Gallery";
import Products from "./components/navegation/Products";
import { Router } from "react-router-dom";





function App() {
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Gallery />
      <Products /> 

    </Router>


     

     
     
     <Footer />
    </div>
  );
}

export default App;
