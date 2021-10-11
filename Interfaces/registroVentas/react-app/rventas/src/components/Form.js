import React from 'react'

function Form() {
    return (
        <form>
            <div id="cliente">
                <label for="id cliente">ID cliente</label>
                <input type="text" id="idcliente" name="id cliente" placeholder="ID cliente"/>
                <label for="nombre del cliente">Nombre del cliente</label>
                <input type= "text" id="nomcliente" name="nombre del cliente" 
                placeholder="Nombre del cliente"/>
            </div>
            <div id ="vendedor">
                <label for="id vendedor">ID Vendedor</label>
                <input type="text" id="idvendedor" name="id vendedor" placeholder="ID vendedor"/>
                <label for="nombre del vendedor">Nombre del vendedor</label>
                <input type= "text" id="nomvendedor" name="nombre del vendedor" 
                placeholder="Nombre del vendedor"/>
            </div>
            <div id= "fechas">
                <label for="fecha inicial">Fecha inicial</label>
                <input type="date" id="fechainicial" name="fecha inicial" placeholder="fecha inicial"/>
                <label for="fecha de pago">Fecha de pago</label>
                <input type= "date" id="fechapago" name="fecha de pago" 
                placeholder="fecha de pago"/>   
            </div>
            <div id="productos">
                <label for="producto">ID Producto</label>
                <input type="text" id="idproducto" name="id producto" placeholder="ID producto"/>
                <label for="precio del producto">Precio del producto</label>
                <input type= "number" id="preproducto" name="precio del producto" 
                placeholder="precio del producto"/>
                <label for="cantidad">Cantidad</label>
                <input type= "number" id="cantidad" name="cantidad del producto" 
                placeholder="cantidad del producto"/>
            </div>
            <div id="venta">
                <label for="id venta">ID venta</label>
                <input type="text" id="idventa" name="id ventas" placeholder="ID venta"/><br></br><br></br>
                <label for="comentario">Descripción de la venta</label><br></br>
                <textarea cols="50" rows="5" id="comentario"
                    placeholder="ingrese descripción de la venta" name="Descripción">
                </textarea>
            </div>
        </form>
    )
}

export default Form

