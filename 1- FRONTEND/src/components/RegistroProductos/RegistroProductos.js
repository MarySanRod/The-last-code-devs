import axios from "axios";
import React, {useState} from "react";
import './stylesRP.css';
import PaginaPrincipal from '../GestionIngreso/PaginaPrincipal'
import Swal from 'sweetalert2'

function RegistroProductos() {

    if (process.env.NODE_ENV !== 'production') {
        console.log('No estamos para producción');
        require('dotenv').config();
      }
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const [idProducto, setIdProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    //const [disponibilidad, setDisponibilidad] = useState('');


    const registrarProducto = async(e)=>{
        e.preventDefault()
        const nuevoProducto = {idProducto, precio, descripcion}
        const respuesta = await axios.post(`${BACKEND_URL}/products`, nuevoProducto, {
            headers: {
            'token': sessionStorage.getItem('token')
            }
      })
        console.log(respuesta)
        const mensaje = "Producto registrado correctamente"
        Swal.fire({
            icon: 'success',
            title: mensaje
          })
    };


    return(
        <div className= "bodyRP">
            <PaginaPrincipal/>
            <h1 id="tituloRP">Registro de Productos</h1>

            <form action="" class="form_registerRP" id="form_register" onSubmit={registrarProducto}>
                <div class="grid" id="grid">
                    <div>
                    <label for="idproducto" class="label"><h3>ID Producto</h3></label>
                    <input class="controls" type="text" required  placeholder="" onChange={e=>setIdProducto(e.target.value)}/>
                    </div>
                <div>
                    <label for="valor" class="label"><h3>Valor Unitario</h3></label>
                    <input class="controls" type="number" name="valor" required id="valor" placeholder="" onChange={e=>setPrecio(e.target.value)}/>
                </div>
                <div>
                    <label for="descripcion" class="label"><h3>Descripción</h3></label>
                    <textarea class="controls_d" name="descripcion" id="descripcion" placeholder="" onChange={e=>setDescripcion(e.target.value)}></textarea>
                </div>
                <div>
                    <label for="estado" class="label_e"><h3>Estado</h3></label>
                    <label for="Disponible"><input id="Disponible" type="radio" name="Estado" /*onChange={e=>setDisponibilidad(e.target.value)}*//> Disponible</label>
                    <label for="No Disponible"><input id="No Disponible" type="radio" name="Estado" /*onChange={e=>setDisponibilidad(e.target.value)}*//> No Disponible</label><br/>
                </div>
                </div>
            
                <button class="botonRP" type="submit">Registrar Producto</button>
                
        
             </form>

            <footer id='pieRP'>
                <section id ="pie">
                <a href="#titulo">Ir arriba</a>
                </section> 
                <p>Copyright 2021</p>
            </footer>
            
        </div>
    );
}

export default RegistroProductos