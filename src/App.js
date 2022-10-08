import React from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "../src/components/navegation/Footer";
import Gallery from "./components/navegation/Gallery";
import Products from "./components/navegation/Products";
import { Router } from "react-router-dom";
import AppRouter from "./components/navegation/routes/AppRouter";





function App() {
  return (
  <div className="App">
    <Router>
      <AppRouter />
      <Navbar />
      <Gallery />
      <Products /> 

    </Router>


     

     
     
     <Footer />
    </div>
  );
}

export default App;
