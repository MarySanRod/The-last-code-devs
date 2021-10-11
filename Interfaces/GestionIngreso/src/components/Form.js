import React from 'react'

function Form() {
    return (
      <form action="" class="form_user" id="form_user">
        <div id="margenform"></div>
        
        <div id="IngresoDatos">
          <div>
            <h2 id="TituloUsuario">Usuario</h2>
            <input type="email" id="Usuario" name="Usuario" placeholder="" />
          </div>

          <div>
            <h2 id="TituloContraseña">Contraseña</h2>
            <input type="password" id="Contraseña" name="Contraseña" placeholder="" />
          </div>

        </div>

        <div id="IniciarSesión">
          <button class="button1" type="button" onclick>
            Iniciar sesión
          </button>
        </div>
        
        <div id="separador">
          </div>
        
        <div id="Google">
          <button class="button2" type="button" onclic>
            Continuar con Google
          </button>
        </div>
        
        <div id="margenform"></div>
        
        </form>
    )
}

export default Form
