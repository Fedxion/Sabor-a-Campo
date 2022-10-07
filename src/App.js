import React from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "../src/components/navegation/Footer";
import Gallery from "./components/navegation/Gallery";
import Products from "./components/navegation/Products";



function App() {
  return <div className="App">
     <Navbar />
     <Gallery />
     <Products /> 
     <Footer />
    </div>
}

export default App;
