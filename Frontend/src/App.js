import React from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "../src/components/navegation/Footer";
import AppRouter from "./routes/AppRouter";




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
