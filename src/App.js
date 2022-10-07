import React from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "../src/components/navegation/Footer";
import Gallery from "./components/navegation/Gallery";
import Prod from "./components/navegation/Prod";



function App() {
  return <div className="App">
     <Navbar />
     <Gallery />
     <Prod/> 
     <Footer />
    </div>
}

export default App;
