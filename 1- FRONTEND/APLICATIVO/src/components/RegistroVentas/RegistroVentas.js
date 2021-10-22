import React from "react";
import Header from "./HeaderRV";
import Footer from "./FooterRV";
import Form from "./FormRV";
import '../../Styles/RegistroVentas.css'
import PaginaPrincipal from '../GestionIngreso/PaginaPrincipal'

function RegistroVentas(){
    return (
        
        <div id='containerRV'>
            <header>
                <PaginaPrincipal/>
            </header>
            <Header/>
            <Form />
            <Footer />
        </div>
        
        
        
);
};

export default RegistroVentas
