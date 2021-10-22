import React from "react";
import '../../Styles/GestionUsuario.css';

function GestionUsuario() {
    return(
        <div className= "bodyGU">
            <header>
                <h1 id="titulo">Gestión de Usuario</h1>
            </header>

            <form action="" class="form_register" id="form_register">
                <div class="grid" id="grid">
                    <div>
                        <label for="usuario" class="label"><h3>Usuario</h3></label>
                        <input class="controls" type="text" name="usuario" id="usuario" placeholder=""/>
                    </div>
                    <div>
                        <label for="rol" class="label_e"><h3>Rol</h3></label>
                        <label for="Administrador"><input id="Administrador" type="radio" name="Rol"/> Administrador</label>
                        <label for="Vendedor"><input id="Vendedor" type="radio" name="Rol"/> Vendedor</label><br/>
                    </div>
                    <div>
                        <label for="estado" class="label_e"><h3>Estado</h3></label>
                        <label for="Pendiente"><input id="Pendiente" type="radio" name="Estado"/> Pendiente</label>
                        <label for="Autorizado"><input id="Autorizado" type="radio" name="Estado"/> Autorizado</label><br/>
                        <label for="No Autorizado"><input id="No Autorizado" type="radio" name="Estado"/> No Autorizado</label><br/>
                    </div>
                </div>
                <button class="botonGI" type="button" onclick> Buscar Usuario </button>
                <table id="tabla1">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Rol</th>                       
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Carlos</td>
                            <td>Vendedor</td>
                            <td>Autorizado</td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
                <button class="botonGI" type="submit" onclick> Actualizar Usuario </button>
            </form>
            
            <footer>
                <section id ="pie">
                <a href="#titulo">Ir arriba</a>
                </section> 
                <p>Copyright 2021</p>
            </footer>
            
        </div>
    );
}

export default GestionUsuario