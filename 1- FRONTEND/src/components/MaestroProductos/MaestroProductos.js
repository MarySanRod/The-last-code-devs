import React from "react";
import './stylesMP.css';
import PaginaPrincipal from '../GestionIngreso/PaginaPrincipal'

function MaestroProductos() {
    return(
        <div className= "bodyMP">
            <PaginaPrincipal/>
            <h1 id="tituloMP">Maestro de Productos</h1>
            <form action="" class="form_register" id="form_register">

                <div class="grid" id="grid">
                <div>
                    <label for="idproducto" class="label"><h3>ID Producto</h3></label>
                    <input class="controls" type="text" name="idproductos" id="idproductos" placeholder=""/>
                </div>
                <div>
                    <label for="valor" class="label"><h3>Valor Unitario</h3></label>
                    <input class="controls" type="number" name="valor" id="valor" placeholder=""/>
                </div>
                <div>
                    <label for="descripcion" class="label"><h3>Descripción</h3></label>
                    <textarea class="controls_d" name="descripcion" id="descripcion" placeholder=""></textarea>
                </div>
                <div>
                    <label for="estado" class="label_e"><h3>Estado</h3></label>
                    <label for="Disponible"><input id="Disponible" type="radio" name="Estado"/> Disponible</label>
                    <label for="No Disponible"><input id="No Disponible" type="radio" name="Estado"/> No Disponible</label><br/>
                </div>
                </div>
                    <button class="botonMP" type="button"> Buscar Producto </button>
                    
                        <table id="tabla1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descripción</th>
                                <th>Valor</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Banano</td>
                                <td>$500</td>
                                <td>Disponible</td>
                            </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                        </table>
                    
                    <button class="botonMP" type="submit"> Actualizar Producto </button>
                
            </form>

            <footer id='pieMP'>
                <section id ="pie">
                <a href="#titulo">Ir arriba</a>
                </section> 
                <p>Copyright 2021</p>
            </footer>
            
        </div>
    );
}

export default MaestroProductos