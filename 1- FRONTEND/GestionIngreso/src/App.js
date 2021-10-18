import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Login from "./components/Login";

function App() {
    return(
        <div>
            <Header/>
            <Form/>
            <Footer/>
            <Login/>
        </div>
    );
}

export default App