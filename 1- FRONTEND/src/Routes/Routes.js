import { Switch, Route, BrowserRouter} from "react-router-dom";
import Inicio from '../components/GestionIngreso/Inicio'
import GestionUsuario from '../components/GestionUsuario/GestionUsuario'
import PaginaPrincipal from '../components/GestionIngreso/PaginaPrincipal'
import RegistroVentas from '../components/RegistroVentas/RegistroVentas'
import MaestroVentas from "../components/MaestroVentas/MaestroVentas";
import MaestroProductos from "../components/MaestroProductos/MaestroProductos";
import RegistroProductos from "../components/RegistroProductos/RegistroProductos"
import Pending from "../components/GestionIngreso/Pending";

const Routes = () => {
    return (

        <BrowserRouter>

            <Switch>
                <Route exact path='/' component={Inicio} />
                <Route exact path='/PaginaPrincipal' component={PaginaPrincipal} />
                <Route exact path='/Lobito1' component= {Pending} />
                <Route exact path='/GestionUsuario' component= {GestionUsuario} />
                <Route exact path='/RegistroVentas' component= {RegistroVentas} />
                <Route exact path='/MaestroVentas' component= {MaestroVentas} />
                <Route exact path='/MaestroProductos' component= {MaestroProductos} />
                <Route exact path='/RegistroProductos' component= {RegistroProductos} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;