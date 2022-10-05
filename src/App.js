import React, { useState } from "react";
import Navbar from "./components/navegation/navbar";
import Footer from "./components/Footer";
import { Login } from "./components/navegation/login";
import { Register } from "./components/navegation/register";

import Contact from "./components/pages/contact";
import Test from "./components/navegation/test"


function App() {
    const [currentForm, SetCurrentForm] = useState('login');
    const toggleForm = (formName) => {
      SetCurrentForm(formName);
    }
  return <div className="App">
     <Navbar />
     {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
     <Footer />
    </div>
}

export default App;
