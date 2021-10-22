import React from "react";
import './stylesMV.css';
import PaginaPrincipal from '../GestionIngreso/PaginaPrincipal'

function MaestroVentas(){
    return(
        <div className= "bodyMV">
            <PaginaPrincipal/>
            <h1 id="tituloMV">Maestro de Ventas</h1>
            <form action="" class="form_registerMV" id="form_register">
                <div class="grid" id="grid">
                
                </div>
                
                <div id="IngresoDatos"/>
                <div>
                <label for="idventa" class="label"><h3>ID Venta</h3></label>
                <input class="controls" type="text" name="idproductos" id="idproductos" placeholder=""/>
                </div>
                <div>
                    <label for="FECHAVENTA" class="label"><h3>Fecha de la Venta </h3></label>
                    <input type="date" placeholder="Ingresar datos" required="" id="FECHAVENTA"/>
                </div>
                <div>
                    <table>
                    <label for="estado" class="label_e"><h3>Estado</h3></label>
                    <tr>
                        <th id="thMV"><label for="status"><input id="Estado1" type="radio" name="Estado1"/> En proceso </label></th>
                        <th id="thMV"><label for="status"><input id="Estado2" type="radio" name="Estado2"/> Cancelada </label></th>
                        <th id="thMV"><label for="status"><input id="Estado3" type="radio" name="Estado3"/> Entregada </label></th>
                    </tr>
                    </table>
                </div>
                <div>
                    <button class="botonMV" type="submit" onClick >Buscar Ventas</button>
                </div>
                <div>
                    <button class="botonMV" type="submit" onClick >Actualizar Ventas</button>
                </div>
                
            </form>

            <footer id='pieMV'>
                <section id ="pie">
                <a href="#titulo">Ir arriba</a>
                </section> 
                <p>Copyright 2021</p>
            </footer>
            
        </div>
    );
}

export default MaestroVentas