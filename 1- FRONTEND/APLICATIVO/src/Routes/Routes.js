import { Switch, Route, BrowserRouter} from "react-router-dom";
import Inicio from '../components/GestionIngreso/Inicio'
import GestionUsuario from '../components/GestionUsuario/GestionUsuario'
import PaginaPrincipal from '../components/GestionIngreso/PaginaPrincipal'
import RegistroVentas from '../components/RegistroVentas/RegistroVentas'

const Routes = () => {
    return (

        <BrowserRouter>

            <Switch>
                <Route exact path='/' component={Inicio} />
                <Route exact path='/PaginaPrincipal' component={PaginaPrincipal} />
                <Route exact path='/GestionUsuario' component= {GestionUsuario} />
                <Route exact path='/RegistroVentas' component= {RegistroVentas} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;