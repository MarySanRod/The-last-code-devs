import React from 'react'


function header(props) {
    return (
        <div id= 'tituloRV'>
            <header>
                <h1 id="titulo">Registro de ventas</h1>
                <p>En esta interfaz podras registrar ventas, es decir, ingresarás 
                    información como: ID de la venta, valor total de la venta, ID, 
                    cantidad y precio unitario de cada producto, fecha de venta,
                    identificación y nombre del cliente, y finalmente, información del
                    vendedor.
                </p>
            </header>
        </div>
    )
}

export default header

