import React from 'react';
import '../Styles/PaginaPrincipal.css';

const Barra = () => {
    return (
    <React.Fragment>
       
        <div className="BodyPP">
            <div className="barraMenu">
                <div className="dropdown">
                    <button className="dropbtn"> Administrador de ventas </button>
                    <div className="dropdown-content">
                        <a href="/PagVacia"> Registro </a>
                        <a href="/PagVacia"> Historial de ventas </a>
                    </div>
                </div>
                <div className ="dropdown">
                    <button className ="dropbtn"> Administrador de productos </button>
                    <div className="dropdown-content">
                        <a href="/PagVacia"> Registro </a>
                        <a href="/PagVacia"> Historial de productos </a>
                    </div>
                </div>
                
                <button className="buttonGI">
                    <a href="/GestionUsuario">
                    Gestion de usuarios
                    </a>
                </button>
                
            </div>
        </div>
              
    </React.Fragment>
    )
}

export default Barra;