import React from 'react'

function Form() {
    return (
        <form action="" class="form_register" id="form_register">
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
                <th><label for="status"><input id="Estado1" type="radio" name="Estado1"/> En proceso </label></th>
                <th><label for="status"><input id="Estado2" type="radio" name="Estado2"/> Cancelada </label></th>
                <th><label for="status"><input id="Estado3" type="radio" name="Estado3"/> Entregada </label></th>
              </tr>
            </table>
          </div>
          <div class="botones" id="botones">
            <button class="boton" type="submit" onClick >Buscar Ventas</button>
          </div>
          <div class="botones" id="botones">
            <button class="boton" type="submit" onClick >Actualizar Ventas</button>
          </div>
          
        </form>
    )
}

export default Form