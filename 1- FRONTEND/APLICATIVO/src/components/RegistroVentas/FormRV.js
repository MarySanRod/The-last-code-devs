import axios from 'axios'
import React, {useState} from 'react'



function FormRV() {

    const [idCliente, setIdCliente] = useState('');
    const [nomCliente, setNomCliente] = useState('');
    const [idVendedor, setIdVendedor] = useState('');
    const [nomVendedor, setNomVendedor] = useState('');
    const [fechaCompra, setFechaCompra] = useState('');
    const [fechaPago, setFechaPago] = useState('');
    const [idProducto, setIdProducto] = useState('');
    const [preProducto, setPreProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [idVenta, setIdVenta] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const registrarVenta = async(e)=>{
        e.preventDefault()
        const nuevaVenta = {idCliente, nomCliente, idVendedor, nomVendedor,
        fechaCompra, fechaPago, idProducto, preProducto, cantidad, idVenta, descripcion }
        const respuesta = await axios.post('http://localhost:5000/sales', nuevaVenta)
        console.log(respuesta)
    };

    return (
        <form id= 'formRV' onSubmit = {registrarVenta}>
            <div id="cliente">
                <label id= 'RV'> ID cliente</label>
                <input id= 'RV' type="text" required placeholder="ID cliente" onChange={e=>setIdCliente(e.target.value)}/>
                <label id= 'RV' > Nombre del cliente</label>
                <input id= 'RV' type= "text"  require placeholder="Nombre del cliente" onChange={e=>setNomCliente(e.target.value)}/>
            </div>
            <div id ="vendedor">
                <label id= 'RV'> ID Vendedor</label>
                <input id= 'RV' type="text" required placeholder="ID vendedor" onChange={e=>setIdVendedor(e.target.value)}/>
                <label id= 'RV'> Nombre del vendedor</label>
                <input id= 'RV' type= "text" required placeholder="Nombre del vendedor" onChange={e=>setNomVendedor(e.target.value)}/>
            </div>
            <div id= "fechas">
                <label id= 'RV'> Fecha inicial</label>
                <input id= 'RV' type="date" required placeholder="fecha inicial" onChange={e=>setFechaCompra(e.target.value)}/>
                <label id= 'RV'> Fecha de pago</label>
                <input id= 'RV' type= "date" required placeholder="fecha de pago" onChange={e=>setFechaPago(e.target.value)}/>   
            </div>
            <div id="productos">
                <label id= 'RV'> ID Producto</label>
                <input id= 'RV' type="text" required placeholder="ID producto" onChange={e=>setIdProducto(e.target.value)}/>
                <label id= 'RV'> Precio del producto</label>
                <input id= 'RV' type= "number"  required placeholder="precio del producto" onChange={e=>setPreProducto(e.target.value)}/>
                <label id= 'RV'> Cantidad</label>
                <input id= 'RV' type= "number" required placeholder="cantidad del producto" onChange={e=>setCantidad(e.target.value)}/>
            </div>
            <div id="venta">
                <label id= 'RV'> ID venta</label>
                <input id= 'RV' type="text" required placeholder="ID venta" onChange={e=>setIdVenta(e.target.value)}/><br></br><br></br>
                <label id= 'RV'> Descripción de la venta</label><br></br>
                <textarea cols="50" rows="5" placeholder="ingrese descripción de la venta" onChange={e=>setDescripcion(e.target.value)}>
                </textarea>
            </div>
            <div>
                <button id= 'botonRV' type='submit'>Registrar venta</button>
            </div>
        </form>
    )
}

export default FormRV

