import React from 'react';
import '../../Styles/PaginaPrincipal.css';

const Barra = () => {
    return (
    <React.Fragment>
       
        <div className="BodyPP">
            <div className="barraMenu">
                <div className="dropdown">
                    <button className="dropbtn"> Administrador de ventas </button>
                    <div className="dropdown-content">
                        <a href="/RegistroVentas"> Registro </a>
                        <a href="/MaestroVentas"> Historial de ventas </a>
                    </div>
                </div>
                <div className ="dropdown">
                    <button className ="dropbtn"> Administrador de productos </button>
                    <div className="dropdown-content">
                        <a href="/RegistroProductos"> Registro </a>
                        <a href="/MaestroProductos"> Historial de productos </a>
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