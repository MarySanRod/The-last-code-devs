import React from 'react';
import Image from '../Assets/Imagenes/Usuario.jpg'
import Login from "./Login";

function Form() {
  return (    
    <div className="MainBox">
        <form>
          <div>
            <img src={Image} className="UserPhoto" alt="UserPhoto" />
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
  )
}


export default Form;
