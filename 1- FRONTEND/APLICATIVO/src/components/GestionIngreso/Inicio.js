import React from "react";
import '../../Styles/GestionIngreso.css';
import UserPhoto from '../../Assets/Imagenes/Usuario.jpg'
import Login from "./Login";

function Inicio() {
    return(
        <div className="container">
            
            <div className="MainBox">
                <form>
                    <div>
                        <img src={UserPhoto} className="UserPhoto" alt="UserPhoto" />
                        <h1 className="Iniciar">INICIAR SESIÓN</h1>
                        <input className="Name" type="text" placeholder="Ingrese su nombre" />
                        <input className="Password" type="password" placeholder="Ingrese su contraseña" />
                        
                        <button className="ButtomIS" type="button" onclick>
                        Iniciar sesión
                        </button>
                    </div>
                </form>
                <Login/>  
            </div>
            
            <footer>
                <p>Cuida tu seguridad digital, te invitamos a cambiar tu contraseña y activar el doble factor de autenticación
                    de correo electrónico.
                </p>
            </footer>
        </div>
    );
}

export default Inicio