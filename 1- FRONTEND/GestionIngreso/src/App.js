import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Form from "./components/Form";
import Login from "./components/Login";
import Logo from "./components/Logo";

function App() {
    return(
        <div className = 'Container'>
            <Header/>
            
            <div className = 'Ingreso'>
                <Logo/>
                <Login/>
            </div>
            
            {/* <Form/> */}
            <Footer/>
            
        </div>
    );
}

export default App