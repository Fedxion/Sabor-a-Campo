import React from "react";
import NavBar from "../components/navegation/NavBar/navbar";
import Footer from "../components/navegation/Footer/Footer";
import Gallery from "../components/navegation/Carousel/Gallery";
import Products from "../components/navegation/Tienda/Products";
import "../pages/homepage.css";

const HomePage = () => {
  return (<div>

    <NavBar />
    <Gallery />
    <Products />
    <Footer />
  
  </div>
  
  );
};

export default HomePage;
