import React from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "../src/components/navegation/Footer";
  // import Gallery from "./components/navegation/Gallery";
  // import Products from "./components/navegation/Products";
import AppRouter from "./components/navegation/routes/AppRouter";
// import {Router} from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";



function App() {
  return (
  <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
  </div>
  );
}

export default App;
